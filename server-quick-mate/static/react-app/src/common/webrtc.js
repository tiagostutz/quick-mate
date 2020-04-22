var maxCALLERS = 3;
let ok = true

function getUsernameFromLocalStorage() {
    return window.localStorage.getItem("quick-mate::username");
}
function setUsernameToLocalStorage(username) {
    return window.localStorage.setItem("quick-mate::username", username);
}

window.easyrtc.setSocketUrl(":8484");

function callEverybodyElse(roomName, otherPeople) {
    console.log("callEverybodyElse() roomName=" + roomName + "; ortherPeople=" + otherPeople)
    window.easyrtc.setRoomOccupantListener(null); // so we're only called once.

    var list = [];
    var connectCount = 0;
    for (var easyrtcid in otherPeople) {
        list.push(easyrtcid);
    }
    //
    // Connect in reverse order. Latter arriving people are more likely to have
    // empty slots.
    //
    function establishConnection(position) {
        function callSuccess() {
            connectCount++;
            if (connectCount < maxCALLERS && position > 0) {
                establishConnection(position - 1);
            }
        }
        function callFailure(errorCode, errorText) {
            window.easyrtc.showError(errorCode, errorText);
            if (connectCount < maxCALLERS && position > 0) {
                establishConnection(position - 1);
            }
        }
        window.easyrtc.call(list[position], callSuccess, callFailure);

    }
    if (list.length > 0) {
        establishConnection(list.length - 1);
    }
}


function messageListener(easyrtcid, msgType, content) {
    for (var i = 0; i < maxCALLERS; i++) {
        if (window.easyrtc.getIthCaller(i) === easyrtcid) {
            console.log(">> easyrtcid", easyrtcid, " | msgType", msgType, " | content", content);
        }
    }
}

function loginSuccess() {
    console.log("=>> loginSuccess!");

}


export const connectToRoom = (roomCode, roomParameters, username) => {
    console.log("Connecting to room " + roomCode + " (" + username + ")...")
    setUsernameToLocalStorage(username)

    window.easyrtc.hangupAll();
    window.easyrtc.dontAddCloseButtons(true);
    window.easyrtc.enableDebug(false);

    ok = window.easyrtc.setUsername(username)
    if (!ok) {
        console.error("Username '" + username + "' invalid")
    }

    window.easyrtc.easyApp("quick-mate", "box0", ["box1"], loginSuccess);
    window.easyrtc.setRoomOccupantListener(callEverybodyElse);
    window.easyrtc.joinRoom(roomCode, roomParameters, function (roomCode) {
        console.log("Joined room " + roomCode + " successfully")
    }, function (errorCode, errorText, roomCode) {
        console.log("Failed to join room " + roomCode + ". code=" + errorCode + "; error=" + errorText)
    })
    window.easyrtc.setPeerListener(messageListener);
    window.easyrtc.setDisconnectListener(function () {
        window.easyrtc.showError("LOST-CONNECTION", "Lost connection to signaling server");
    });

    window.easyrtc.setOnCall(function (easyrtcid, slot) {
        console.log("getConnection count=" + window.easyrtc.getConnectionCount());
    });


    window.easyrtc.setOnHangup(function (easyrtcid, slot) {
        console.log("Hangup...!!!");
    });
}
