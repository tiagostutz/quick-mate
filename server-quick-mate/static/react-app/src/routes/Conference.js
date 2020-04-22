import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../partials/Header';


function Conference() {

    const { t } = useTranslation();

    return <>
        <div className="page-wrapper">

            <Header />
            <div className="page-content">

                <div>
                    <video id="box0" className="transit boxCommon thumbCommon easyrtcMirror"
                        muted="muted"
                        volume="0"
                        autoPlay="autoplay"
                        playsInline="playsinline"></video>
                </div>

            </div >
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
    </>
}

export default Conference