import React from 'react'
import DextoolLogo from '../assets/images/svg/dextools_logo.svg'
import telegramLogo from '../assets/images/svg/telegram_symbol.svg'
import twitterLogo from '../assets/images/svg/x_logo.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AppsSection() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,

                }
            }
        ]
    };
    return (
        <div className='bg_orange h_lg_136 h_100 d-flex align-items-center mt_33'>
            <div className='container'>
                <Slider className='appslider' {...settings}>
                    <div className='d-flex align-items-center justify-content-center gap_sm_22 gap_10'>
                        <img src={twitterLogo} alt=" twitterLogo" />
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>twitter</h2>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap_sm_22 gap_10'>
                        <img src={telegramLogo} alt="telegramLogo" />
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>Telegram</h2>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap_sm_22 gap_10'>
                        <img src={DextoolLogo} alt="DextoolLogo" />
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>DEXTOOLS</h2>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap_sm_22 gap_10'>
                        <img src={telegramLogo} alt="telegramLogo" />
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>Telegram</h2>
                    </div>
                </Slider>
            </div>
        </div>




    )
}

export default AppsSection