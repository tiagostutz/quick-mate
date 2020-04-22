import { useState } from "react"
import { makeid } from '../common/utils.js'
import globalStore from "../common/globalStore.js"

export default () => {

    const [userName, setUserName] = useState(globalStore.username)
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