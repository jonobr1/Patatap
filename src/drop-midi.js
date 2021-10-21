$(function() {
    window.currentMidiFile = null;
    var dragEventCounter = 0;
    var initDragMessage = document.querySelector(
        "#drop-target .message"
    ).textContent;

    function parseFile(file) {
        // Q: Show error if wrong file type?
        if (!file.type.startsWith("audio/mid"))
            return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const midi = new Midi(e.target.result);
            currentMidiFile = midi;
            console.log(currentMidiFile);
            //Q: Call an autoplay function or will player loop always check for currentMidi?
        };
        reader.readAsArrayBuffer(file);
    }

    function dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
      }

    function dropHandler(e) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();

        let file = null;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0 && e.dataTransfer.items[0].kind === 'file') {
            file = e.dataTransfer.items[0].getAsFile();
        } else if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            file = e.dataTransfer.files[0];
        }

        if (file) {
            document.querySelector(
                "#drop-target .message"
            ).textContent = file.name;
            parseFile(file);
        }
    }
      
    if (
        !(
            window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob
        )
    ) {
        document.querySelector("#drop-target .message").textContent =
            "Reading files not supported by this browser";
    } else {
        const fileDrop = document.querySelector("#drop-target");

        fileDrop.addEventListener("dragenter", (e) => {
            dragEventCounter++;
            if (dragEventCounter === 1) {
                fileDrop.classList.add("Hover")
                document.querySelector(
                    "#drop-target .message"
                ).textContent = initDragMessage;
            }
        }
        );

        fileDrop.addEventListener("dragleave", (e) => {
            dragEventCounter = Math.max(dragEventCounter-1, 0);
            if (dragEventCounter === 0)
                fileDrop.classList.remove("Hover")
        }
        );

        fileDrop.addEventListener("dragover", (e) => {
            dragOverHandler(e)
        }
        );

        fileDrop.addEventListener("drop", (e) => {
            dragEventCounter = 0;
            fileDrop.classList.remove("Hover");
            dropHandler(e);
        });
    }

});
  
  