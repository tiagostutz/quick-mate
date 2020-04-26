import React from 'react';
import { useTranslation } from 'react-i18next';
import useVideoConferenceModel from './useVideoConferenceModel';

function VideoConference() {

    const { t } = useTranslation()

    const {
        roomCode,
        userName,
        participants,
        merchandisingURL
    } = useVideoConferenceModel()

    const colMD = participants.length > 2 ? "col-md-6" : "col-md-12"
    const colLG = participants.length > 4 ? "col-lg-4" : "col-lg-6"

    const rightBackVideos = ["/assets/video/swimming-pool.mp4", "/assets/video/coffee-work.mp4", "/assets/video/browsing-mac.mp4", "/assets/video/times-square.mp4", "/assets/video/browsing-mac.mp4"]
    const rightBackVideo = rightBackVideos[Math.round(Math.random() * 3)]

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
                {!merchandisingURL && <>
                    <video id="box1Coffee" autoPlay loop style={{ display: "none", filter: "grayscale(1)" }}>
                        <source src={rightBackVideo} type="video/mp4" />
                    </video>
                    <video id="box1"></video>
                </>
                }
                {merchandisingURL &&
                    <iframe width="460" height="315" src={`https://www.youtube.com/embed/${merchandisingURL}?controls=0;autoplay=1;mute=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                }
            </div>
            {/* <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/city-tour.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/coffee-work.mp4" type="video/mp4" />
                </video>
            </div> */}
            {/* <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/browsing-mac.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`col-xs-12 col-sm-6 ${colMD} ${colLG} video-container`}>
                <video autoPlay loop>
                    <source src="/assets/video/times-square.mp4" type="video/mp4" />
                </video>
            </div> */}
        </div>

    </div>
}

export default VideoConference