import React from 'react';
import { useTranslation } from 'react-i18next';
import useCreateRoomModel from './useCreateRoomModel';

function CreateRoom({ autoFocus }) {
    const { t } = useTranslation();


    const {
        userName,
        setUserName,
        roomCode,
        createRoom
    } = useCreateRoomModel()

    const submitCreateRoom = (e) => {
        createRoom()
        e.preventDefault();
        return false
    }

    if (roomCode) {
        setTimeout(_ => {
            window.location.href = "/" + roomCode + "?user=" + userName
        }, 2000)
    }

    return (

        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 grid-margin stretch-card">
                <div className="card">
                    <form className="w-100" onSubmit={submitCreateRoom}>
                        <div className="row card-body main-content align-items-center justify-content-center">
                            {!roomCode &&
                                <>
                                    <div className="form-group  w-90 pt-3">
                                        <input defaultValue={userName} onChange={e => setUserName(e.target.value)} className="form-control" autoFocus={autoFocus} placeholder={t("Your name")} required />
                                    </div>
                                    <div className="form-group  w-90">
                                        <button type="submit" className="btn btn-primary btn-lg w-100 pt-2 pb-2">
                                            {t("Start a new meeting")}
                                        </button>
                                    </div>
                                </>
                            }
                            {roomCode &&
                                <div className="col">
                                    <h2 className="row align-items-center justify-content-center">
                                        {roomCode}
                                    </h2>
                                    <div className="row align-items-center justify-content-center">{t("Meeting created opening room")}</div>
                                </div>

                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateRoom;
