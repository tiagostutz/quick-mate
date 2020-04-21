import { useState } from "react"
import { makeid } from './common/utils.js'

export default () => {

    const [roomCode, setRoomCode] = useState(null)

    const createRoom = () => {
        let auxRoomCode = makeid(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        auxRoomCode += makeid(4, '0123456789')
        setRoomCode(auxRoomCode)

        connectToRoom(roomCode, {
            sample: "created"
        }, username)
    }

    return {
        roomCode,
        createRoom
    }
}