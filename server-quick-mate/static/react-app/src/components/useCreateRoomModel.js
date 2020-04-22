import { useState, useEffect } from "react"
import { makeid } from '../common/utils.js'

export default () => {

    const [userName, setUserName] = useState(null)
    const [roomCode, setRoomCode] = useState(null)

    const createRoom = () => {
        let auxRoomCode = makeid(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        auxRoomCode += makeid(4, '0123456789')
        setRoomCode(auxRoomCode)
    }

    return {
        userName,
        roomCode,
        setUserName,
        createRoom
    }
}