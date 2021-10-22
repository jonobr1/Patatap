$(function() {
    var midi = window.midi = {
        notesToIndices: {
            21: '2,0', 23: '2,1', 24: '2,2', 26: '2,3', 28: '2,4', 29: '2,5',
            31: '2,6', 33: '1,0', 35: '1,1', 36: '1,2', 38: '1,3', 40: '1,4',
            41: '1,5', 43: '1,6', 45: '1,7', 47: '1,8', 48: '0,0', 50: '0,1',
            52: '0,2', 53: '0,3', 55: '0,4', 57: '0,5', 59: '0,6', 60: '0,7',
            62: '0,8', 64: '0,9',
            65: '2,0', 67: '2,1', 69: '2,2', 71: '2,3', 72: '2,4', 74: '2,5',
            76: '2,6', 77: '1,0', 79: '1,1', 81: '1,2', 83: '1,3', 84: '1,4',
            86: '1,5', 88: '1,6', 89: '1,7', 91: '1,8', 93: '0,0', 95: '0,1',
            96: '0,2', 98: '0,3', 100: '0,4', 101: '0,5', 103: '0,6', 105: '0,7',
            107: '0,8', 108: '0,9',
            // SPACE
            22: '3,0',
            106: '3,0'
        },

        _onTrigger: null,
        onTrigger: function(func) {
            midi._onTrigger = func;
        },

        playbackTime: 0.0,
        notes: [],
        queue: [],
        duration: 0.0, 
        name: "",

        start: function() {
            midi.queue = midi.notes.slice(0);
            midi.playbackTime = 0.0;
        },

    };
    
    var dragEventCounter = 0;
    var initDragMessage = document.querySelector(
        "#drop-target .message"
    ).textContent;
    var $nowPlaying = $("#now-playing");

    function parseFile(file) {
        // Q: Show error if wrong file type?
        if (!file.type.startsWith("audio/mid"))
            return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const json = new Midi(e.target.result);
            midi.name = file.name; //json doesnt always include the name, so refer to file.
            midi.duration = json.duration;
    
            for (var i = 0; i < json.tracks.length; i++) {
                if (json.tracks[i].notes.length) {
                    midi.notes = json.tracks[i].notes.sort(function (a, b) {
                        return a.time - b.time;
                    });
                    break;
                }
            }
    
            startFile();
        };
        reader.readAsArrayBuffer(file);
    }

    function startFile(fileData) {
        $("#midi-title").html(midi.name);
        $nowPlaying.fadeIn();
        midi.start();
    }

    function removeFile() {
        //Hide the title/player
        $nowPlaying.fadeOut(100);
        //Reset Var (This will stop the player)
        midi.notes = [];
        midi.queue = [];
        midi.name = "";
        midi.duration = 0;
        midi.playbackTime = 0.0;
    }

    function updatePlayhead() {
        var fill = 0.0;
        fill = (midi.playbackTime/midi.duration) * 100;

        $("#midi-track-progress").width(fill+"%");
    }

    function updateSoundQueue() {
        var note = midi.queue[0];

        while (note) {

            if (note.time <= midi.playbackTime) {
                if (midi.notesToIndices[note.midi])
                    midi._onTrigger(midi.notesToIndices[note.midi]);
                midi.queue.shift();
                note = midi.queue[0];
            } else {
                note = null;
            }

        }
    }
    
    var tLastLoop = 0;
    function playLoop(timestamp) {
        if (Object.keys(midi.notes).length) {
            
            var deltaTime = timestamp - tLastLoop;
            midi.playbackTime += (deltaTime * 0.001);

            if (midi.playbackTime > midi.duration) {
                midi.start();
            } 
            
            updatePlayhead();
            updateSoundQueue();
            tLastLoop = timestamp;
        }

        window.requestAnimationFrame(playLoop);
    }
    
    window.requestAnimationFrame(playLoop);

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

        document.querySelector("#midi-remove").addEventListener("click", (e) => {
            removeFile();
        });
    }

});
  
  