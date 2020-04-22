import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ClickFeedbackIconTooltip from '../components/ClickFeedbackIconTooltip';
import { useParams, useLocation } from 'react-router-dom';

function Header() {

    const { t } = useTranslation();

    const query = new URLSearchParams(useLocation().search)
    const { roomCode } = useParams()

    const [userName, setUserName] = useState(query.get("user"))

    return <>
        <nav className="navbar top-navbar">
            <div className="container-fluid">
                <div className="row col-12 navbar-content align-items-center justify-content-between">
                    <a href="/" className="navbar-brand">
                        <img alt="QuickMate Logo" src="../../assets/images/logo.png" height="40px" className="mr-2" />Quick<span>MATE</span>
                    </a>
                    <span> <i data-feather="smile" style={{ height: "1rem" }} ></i> {userName}</span>
                    <span>{t("Meeting Code")}: <strong className="ml-1">{roomCode}
                        <ClickFeedbackIconTooltip hoverText={t("Copy meeting URL")} clickedText={t("Meeting URL copied")} />
                    </strong>
                    </span>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </div>
        </nav>

    </>
}

export default Header