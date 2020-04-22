import { useParams, useLocation } from "react-router";

export default () => {

    const { roomCode } = useParams()
    const { pathname } = useLocation()

    console.log("roomCode", roomCode);
    console.log("pathname", pathname);


    return { roomCode }
}