import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';
import Header from '../partials/Header';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className="page-wrapper">

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

            <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
                <p className="text-muted text-center text-md-left">2020 <a href="https://github.com/flaviostutz/quick-mate" rel="noopener noreferrer" target="_blank">QuickMATE</a>. MIT License</p>
                <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">Spread the <i className="mb-1 text-primary ml-1 icon-small" data-feather="heart"></i></p>
            </footer>

        </>
    );
}

export default Home;
