import React from 'react';
import { useTranslation } from 'react-i18next';


function Conference() {
    const { t } = useTranslation();
    return <div>

        <nav class="bottom-navbar">
            <div class="container">
                <ul class="nav page-navigation">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="link-icon" data-feather="file-plus"></i>
                            <span class="menu-title">{t("Send File")}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="link-icon" data-feather="video"></i>
                            <span class="menu-title">{t("Conference")}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    </div >
}

export default Conference