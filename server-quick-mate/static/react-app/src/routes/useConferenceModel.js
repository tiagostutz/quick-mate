import { useState } from "react";

export default () => {

    const notifyIllBeRightBack = () => {
        for (var i = 0; i < 6; i++) {
            var easyrtcid = window.easyrtc.getIthCaller(i);
            if (easyrtcid && easyrtcid != "") {
                window.easyrtc.sendPeerMessage(easyrtcid, "command", "right-back");
            }
        }
    }

    const sendMerchandisingURL = (merchandisingURL) => {
        for (var i = 0; i < 6; i++) {
            var easyrtcid = window.easyrtc.getIthCaller(i);
            if (easyrtcid && easyrtcid != "") {
                window.easyrtc.sendPeerMessage(easyrtcid, "merchan", merchandisingURL);
            }
        }
    }

    return {
        notifyIllBeRightBack,
        sendMerchandisingURL
    }
}