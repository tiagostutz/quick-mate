import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../partials/Header';
import VideoConference from '../components/VideoConference';


function Conference() {

    const { t } = useTranslation();

    return <>
        <div className="page-wrapper">

            <Header />
            <div className="video-wrapper m-0 p-0">

                <VideoConference />

            </div >
            <div className="horizontal-menu">
                <nav className="bottom-navbar">
                    <div className="container">
                        <ul className="nav page-navigation">
                            <li className="nav-item">
                                <span className="nav-link actionable">
                                    <i className="link-icon" data-feather="file-plus"></i>
                                    <span className="menu-title">{t("Send File")}</span>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link actionable">
                                    <i className="link-icon" data-feather="video"></i>
                                    <span className="menu-title">{t("Conference")}</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>
}

export default Conference