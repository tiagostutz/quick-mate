import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';
import Header from '../partials/Header';

function Home() {
    const { t } = useTranslation();

    return (
        <div class="page-wrapper">

            <Header />
            <div className="page-content">

                <CreateRoom autoFocus />

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9 col-sm-12 grid-margin">
                        <div style={{ display: "flex" }} className="align-items-center justify-content-center">
                            <hr style={{ flex: 1 }} />
                            <span className="ml-3 mr-3">{t("or")}</span>
                            <hr style={{ flex: 1 }} />
                        </div>
                    </div>
                </div>

                <JoinRoom />


            </div>
        </div>
    );
}

export default Home;
