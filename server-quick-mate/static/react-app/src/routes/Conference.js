import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../partials/Header';
import VideoConference from '../components/VideoConference';
import useConferenceModel from './useConferenceModel';


function Conference() {

    const { t } = useTranslation();

    const { notifyIllBeRightBack, sendMerchandisingURL } = useConferenceModel()

    const showMerchandisingDialog = async () => {
        const { value: ipAddress } = await window.Swal.fire({
            title: 'URL do anúncio',
            input: 'text',
            inputValue: e => console.log(e.target.value),
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor informe a URL do anúncio!'
                } else {
                    sendMerchandisingURL(value);
                }
            }
        })
    }

    return <>
        <div className="page-wrapper">

            <Header />
            <div className="video-wrapper m-0 p-0">

                <VideoConference />

            </div>
            <div className="horizontal-menu">
                <nav className="bottom-navbar">
                    <div className="container">
                        <ul className="nav page-navigation">

                            <li className="nav-item" onClick={_ => notifyIllBeRightBack()}>
                                <span className="nav-link actionable">
                                    <i className="link-icon" data-feather="coffee"></i>
                                    <span className="menu-title">{t("I'll be right back")}</span>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link actionable">
                                    <i className="link-icon" data-feather="file-plus"></i>
                                    <span className="menu-title">{t("Send file")}</span>
                                </span>
                            </li>
                            <li className="nav-item" onClick={_ => showMerchandisingDialog()}>
                                <span className="nav-link actionable">
                                    <i className="link-icon" data-feather="airplay"></i>
                                    <span className="menu-title">{t("Send Merchandising")}</span>
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