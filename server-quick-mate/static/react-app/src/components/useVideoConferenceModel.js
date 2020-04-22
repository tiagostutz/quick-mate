import { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';

import { connectToRoom } from "../common/webrtc";

export default () => {

    const query = new URLSearchParams(useLocation().search)
    const { roomCode } = useParams()

    const [userName, setUserName] = useState(query.get("user"))
    const [participants, setParticipants] = useState(["1", "2", "3", "4", "5", "6"])

    console.log("===>>>", userName, roomCode);

    useEffect(() => {
        if (roomCode) {
            connectToRoom(roomCode, {
                sample: "created"
            }, userName)
        }
    }, [roomCode, setUserName])


    return {
        userName,
        roomCode,
        participants
    }
}