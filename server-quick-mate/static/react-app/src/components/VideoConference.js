import React from 'react';
import { useTranslation } from 'react-i18next';
import useVideoConferenceModel from './useVideoConferenceModel';

function VideoConference() {

    const { t } = useTranslation()

    const {
        roomCode,
        userName,
        participants
    } = useVideoConferenceModel()

    const colMD = participants.length > 2 ? "col-md-6" : "col-md-12"
    const colLG = participants.length > 4 ? "col-lg-4" : "col-lg-6"

    return <div className="row row-no-gutters">

        <div className="row row-no-gutters">
            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                {/* <video autoPlay loop>
                    <source src="/assets/video/baking.mp4" type="video/mp4" />
                </video> */}
                <video id="box0"
                    muted="muted"
                    volume="0"
                    autoPlay="autoplay"
                    playsInline="playsinline"></video>
            </div>
            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/swimming-pool.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/city-tour.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/coffee-work.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/browsing-mac.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/times-square.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

    </div>
}

export default VideoConference