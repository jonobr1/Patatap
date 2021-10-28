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

        playing: false,
        update: update,

        _onHint: null,
        onHint: function(func) {
            console.log("setting onhint");
            midi._onHint = func;
        },

        _onTrigger: null,
        onTrigger: function(func) {
            midi._onTrigger = func;
        },

        handleChangeColors: function() {
            if (!window.animations) return;

            function lighten(color) {
                white = [255,255,255];
                power = .33;
                return [color[0]+(white[0]-color[0])*power, color[1]+(white[1]-color[1])*power, color[2]+(white[2]-color[2])*power]
            }
    
            var fillColor = "rgb("+Object.values(window.animations.getColorPalette().accent).toString()+")";
            var bgColor = "rgb("+lighten(Object.values(window.animations.getColorPalette().background)).toString()+")"; 
            $("#midi-progress-fill").css("background", fillColor);
    
            $("#midi-progress").css("background", bgColor);
        },

        activeTrackIndex: 0,
        trackList: [],
        playbackTime: 0.0,
        notes: [],
        queue: [],
        duration: 0.0, 
        name: "",

        start: function() {
            midi.queue = midi.notes.slice(0);
            midi.playbackTime = 0.0;
            midi.handleChangeColors();
        },

    };
    
    var $message = $("#drop-target .message");
    var initDragMessage = $message.text();
    var $content = $("#content");
    var $dropContainer = $("#drop");
    var $nowPlaying = $("#now-playing");
    var $midiProgress = $('#midi-progress');
    var $dropdown = $("#midi-track-list");
    var $credits = $('#credits');

    function parseFile(file) {
        if (!file.type.startsWith("audio/mid")) {
            showMessage("Sorry, Patatap only reads midi files.");
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            const json = new Midi(e.target.result);
            const maxTitleChars = 30;
            midi.name = (file.name.length > maxTitleChars) ? file.name.substring(0,maxTitleChars-3) + "..." : file.name; //json doesnt always include the name, so refer to file.
            midi.duration = json.duration;
    
            midi.trackList = [];

            for (var i = 0; i < json.tracks.length; i++) {
                var _track = {"name": "",
                "notes": []}
                if (json.tracks[i].notes.length) {
                    _track.notes = json.tracks[i].notes.sort(function (a, b) {
                        return a.time - b.time;
                    });
                    if (json.tracks[i].name)
                        _track.name = json.tracks[i].name;
                    else if (json.tracks[i].instrument.name)
                        _track.name = json.tracks[i].instrument.name;
                    else
                        _track.name = "Track " + i+1; //OR Instrument name if avail?

                    midi.trackList.push(_track);
                }
            }
            
            if(midi.trackList.length > 0) {
                setTrack(0);
                populateTrackDropdown();
                showMessage("Now Playing: " + midi.name + " - " + midi.trackList[activeTrackIndex].name);
            } else {
                showMessage("Sorry, Patatap couldn't find any notes in this file.");
            }

        };
        reader.readAsArrayBuffer(file);
    }

    $hint = $("#hint");

    $midiMessage = $hint.find(".midi-filedrop");
    function showMessage(message) {
        $midiMessage.html(message);

        $hint.find('.message').animate({ opacity: 0 }, function() {
            $hint.css({
            display: 'block',
            opacity: 1
            });
            $midiMessage.fadeIn();
        });

        hideMessage();
    };

    var hideMessage = _.debounce(function() {
        $midiMessage.fadeOut(function() {
            $hint.fadeOut(function() {
            $hint.find('.message').css({ opacity: 1 });
            });
            if (midi._onHint)
                midi._onHint();
        });
    }, 5000);

    function populateTrackDropdown() {
        for (var i = 0; i < midi.trackList.length; i++) {
            var className = "track-option";
            if (i == 0)
                className += " selected";
            $dropdown.append("<span class='"+className+"' data-index="+i+">"+midi.trackList[i].name+"</span>");
        }
        $trackOptions = $(".track-option");
        $trackOptions.click(function(e) {
            e.stopPropagation();
            var index = parseInt(e.target.getAttribute("data-index"));
            setTrack(index)
            $trackOptions.removeClass("selected");
            $(e.target).addClass("selected");
            toggleTrackList();
        })

    }

    function setTrack(index) {
        if (index < midi.trackList.length) {
            activeTrackIndex = index;
            midi.notes = midi.trackList[activeTrackIndex].notes;
            startFile();
        }
    }

    function toggleTrackList() {
        $credits.toggleClass('active');
        $dropdown.fadeToggle(100);
    }

    function startFile() {
        $("#midi-title").html(midi.name + " - " + midi.trackList[activeTrackIndex].name);
        $nowPlaying.fadeIn();
        $midiProgress.fadeIn();
        midi.start();
        midi.playing = true;
    }

    function removeFile() {
        //Hide the title/player
        $credits.removeClass('active');
        $nowPlaying.fadeOut(100);
        $midiProgress.fadeOut(100);
        //Reset Var (This will stop the player)
        midi.notes = [];
        midi.queue = [];
        midi.name = "";
        midi.duration = 0;
        midi.playbackTime = 0.0;
        midi.activeTrackIndex = 0;
        midi.trackList = [];
        midi.playing = false;
    }

    function updatePlayhead() {
        var fill = 0.0;
        fill = (midi.playbackTime/midi.duration) * 100;

        $("#midi-progress-fill").width(fill+"%");
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

    function update(deltaTime) {
        if (midi.notes.length) {

            midi.playbackTime += (deltaTime * 0.001);

            if (midi.playbackTime > midi.duration) {
                midi.start();
            }

            updatePlayhead();
            updateSoundQueue();
        }

    }

    function showDropzone() {
        $message.html(initDragMessage);
        $dropContainer.fadeIn();
    }

    function hideDropzone(duration) {
        duration = duration || 400;
        dragEventCounter = 0;
        $dropContainer.fadeOut(duration, function() {$dropContainer.hide();});
    }

    var dragEventCounter = 0;
    function dragEnterHandler(e) {
        if (dragEventCounter == 0) {
            showDropzone();
        }
        dragEventCounter++;

        e.preventDefault();
    }

    function dragLeaveHandler(e) {
        dragEventCounter --;
        if (dragEventCounter == 0) {
            hideDropzone();
        }
        
        e.preventDefault();
    }

    function dragOverHandler(e) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
      }

    function dropHandler(e) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();

        //reset dropzone vars
        hideDropzone(200);
        let file = null;

        var e = e.originalEvent;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0 && e.dataTransfer.items[0].kind === 'file') {
            file = e.dataTransfer.items[0].getAsFile();
        } else if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            file = e.dataTransfer.files[0];
        }

        if (file) {
            $message.html(file.name);
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
        $message.html("Reading files not supported by this browser");
    } else {
        $content.on("dragenter", dragEnterHandler);
        $content.on("dragover", dragOverHandler);
        $content.on("dragleave", dragLeaveHandler);

        $dropContainer.on("dragenter", dragEnterHandler);
        $dropContainer.on("dragover", dragOverHandler);
        $dropContainer.on("dragleave", dragLeaveHandler);

        $dropContainer.on("drop", dropHandler);

        $("#midi-remove").click(removeFile);

        $("#midi-title").click(toggleTrackList);

        $(window).click(function(e) {
            if (e.target.id !== $dropdown.id && e.target.id != "midi-title" && $dropdown.is(":visible")) {
                $dropdown.hide();
            }
        })
    }

});
  
  