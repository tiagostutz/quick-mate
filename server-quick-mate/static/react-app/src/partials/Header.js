import React from 'react';
import { useTranslation } from 'react-i18next';

import useGlobals from '../common/useGlobals';
import ClickFeedbackIconTooltip from '../components/ClickFeedbackIconTooltip';

function Header() {

    const { t } = useTranslation();

    const { roomCode } = useGlobals()

    return <>
        <nav className="navbar top-navbar">
            <div className="container">
                <div className="row navbar-content align-items-center justify-content-between">
                    <a href="/" className="navbar-brand">
                        <img alt="QuickMate Logo" src="../../assets/images/logo.png" height="40px" className="mr-2" />Quick<span>MATE</span>
                    </a>
                    <span>Código da reunião: <strong className="ml-1">{roomCode}
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