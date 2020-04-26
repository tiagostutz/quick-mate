import { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';

import { connectToRoom } from "../common/webrtc";

export default () => {

    const query = new URLSearchParams(useLocation().search)
    const { roomCode } = useParams()

    const [userName, setUserName] = useState(query.get("user"))
    const [participants, setParticipants] = useState(["1", "2"])
    const [merchandisingURL, setMerchandisingURL] = useState("")

    console.log("===>>>", userName, roomCode);

    useEffect(() => {
        if (roomCode) {
            connectToRoom(roomCode, {
                sample: userName == "Julia" ? "joined" : "created"
            }, userName, ["box1"], (msgType, content) => {
                console.log("--@@@@", msgType);
                window.document.querySelector("#box1").style.display = "none"
                window.document.querySelector("#box1Coffee").style.display = "none"
                if (msgType === "merchan") {
                    setMerchandisingURL(content.match(/(\?v=)(.*)/i)[2])
                } else {
                    window.document.querySelector("#box1Coffee").style.display = "block"
                }
            })
        }
    }, [roomCode, setUserName])


    return {
        userName,
        roomCode,
        participants,
        merchandisingURL
    }
}