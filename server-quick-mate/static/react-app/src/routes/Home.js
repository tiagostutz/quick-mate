import React from 'react';
import { useTranslation } from 'react-i18next';
import useCreateRoom from './useCreateRoom';

function Home() {
    const { t } = useTranslation();

    const {
        createRoom
    } = useCreateRoom()

    return (
        <div className="page-content">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-12 grid-margin stretch-card">
                    <div className="card">
                        <form className="w-100">
                            <div className="row card-body main-content align-items-center justify-content-center">
                                <div className="form-group w-90 pt-3">
                                    <input className="form-control" placeholder={t("Meeting code eg XKO9A")} autoFocus required />
                                </div>
                                <div className="form-group w-90">
                                    <input className="form-control" placeholder={t("Your name")} required />
                                </div>
                                <div className="form-group  w-90">
                                    <button type="submit" className="btn btn-primary btn-lg w-100 pt-2 pb-2">{t("Join an existing meeting")}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-12 grid-margin">
                    <div style={{ display: "flex" }} className="align-items-center justify-content-center">
                        <hr style={{ flex: 1 }} />
                        <span className="ml-3 mr-3">or</span>
                        <hr style={{ flex: 1 }} />
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-12 grid-margin stretch-card">
                    <div className="card">
                        <form className="w-100">
                            <div className="row card-body main-content align-items-center justify-content-center">
                                <div className="form-group  w-90 pt-3">
                                    <input className="form-control" placeholder={t("Your name")} required />
                                </div>
                                <div className="form-group  w-90">
                                    <button type="submit" className="btn btn-primary btn-lg w-100 pt-2 pb-2" onClick={_ => createRoom()}>
                                        {t("Start a new meeting")}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
