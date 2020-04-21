import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div class="page-content">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-9 col-sm-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="row card-body main-content align-items-center justify-content-center">
                            <div className="form-group  w-90  pt-3">
                                <input className="form-control" placeholder="Código da reunião. Ex.: XKO9A" autoFocus />
                            </div>
                            <div className="form-group w-90">
                                <input className="form-control" placeholder="Seu nome na reunião" />
                            </div>
                            <div className="form-group  w-90">
                                <button className="btn btn-primary btn-lg w-100 pt-2 pb-2">{t("Join an existing meeting")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-9 col-sm-12 grid-margin">
                    <div style={{ display: "flex" }} className="align-items-center justify-content-center">
                        <hr style={{ flex: 1 }} />
                        <span className="ml-3 mr-3">or</span>
                        <hr style={{ flex: 1 }} />
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-9 col-sm-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="row card-body main-content align-items-center justify-content-center">
                            <div className="form-group  w-90 pt-3">
                                <input className="form-control" placeholder="Seu nome na reunião" />
                            </div>
                            <div className="form-group  w-90">
                                <button className="btn btn-primary btn-lg w-100 pt-2 pb-2">{t("Start a new meeting")}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
