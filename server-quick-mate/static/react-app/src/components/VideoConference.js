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

    return <div className="row row-no-gutters">

        <div className="row row-no-gutters">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 video-container">
                <video autoPlay loop>
                    <source src="/assets/video/baking.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 video-container">
                <video autoPlay loop>
                    <source src="/assets/video/swimming-pool.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 video-container">
                <video autoPlay loop>
                    <source src="/assets/video/city-tour.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 video-container">
                <video autoPlay loop>
                    <source src="/assets/video/coffee-work.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 video-container">
                <video autoPlay loop>
                    <source src="/assets/video/browsing-mac.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 video-container">
                <video autoPlay loop>
                    <source src="/assets/video/times-square.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        {/* <video id="box0" className="col-4"
                muted="muted"
                volume="0"
                autoPlay="autoplay"
                playsInline="playsinline"></video> */}

    </div>
}

export default VideoConference