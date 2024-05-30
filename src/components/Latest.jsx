import React from 'react'
import LatestImg from '../assets/images/svg/latest-img.svg'
import commentImg from '../assets/images/svg/message-svg.svg'
import upDownArrow from '../assets/images/svg/up-down-svg.svg'
import heartImg from '../assets/images/svg/herat-svg.svg'
import sentImg from '../assets/images/svg/send-svg.svg'
import BlueTik from '../assets/images/svg/blue-tik-svg.svg'
import laptopImg from '../assets/images/svg/latest-laptop-img.svg'
import PhnImg from '../assets/images/svg/latest-phn-img.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Latest() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };
    return (
        <div className='bg_img_latest bg_no_repeat py_xl_125_140 pt_lg_30_100 py_30_70 position-relative'>

            <div className='position-absolute latestLaptop_pos d-lg-block d-none'><img src={laptopImg} alt="laptopImg" /></div>
            <div className='position-absolute latestPhn_pos d-lg-block d-none'><img src={PhnImg} alt="PhnImg" /></div>
            <div className="container custam_container">
                <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_black  text-center pb_xl_96 pb_lg_30 pb_15 mb-0'>LATEST NEWS</h3>

                <div className='row latest_row_gap'>
                    <div className='col-xl-4 col-sm-6 d-flex justify- content-center d-lg-block d-none'>
                        <div data-aos="fade-up" className='latest_box mw_367'>
                            <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                <img src={LatestImg} alt="LatestImg" />
                                <div className='blank'>
                                    <div className='d-flex align-items-center mb-1 gap-1'>
                                        <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                        <img src={BlueTik} alt="BlueTik" />
                                    </div>
                                    <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4 max_w_321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={commentImg} alt="commentImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={upDownArrow} alt="upDownArrow" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={heartImg} alt="heartImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                </div>
                                <img src={sentImg} alt="sentImg" />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-sm-6 d-flex justify- content-center d-lg-block d-none'>
                        <div data-aos="fade-up" className='latest_box mw_367'>
                            <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                <img src={LatestImg} alt="LatestImg" />
                                <div className='blank'>
                                    <div className='d-flex align-items-center mb-1 gap-1'>
                                        <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                        <img src={BlueTik} alt="BlueTik" />
                                    </div>
                                    <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4 max_w_321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={commentImg} alt="commentImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={upDownArrow} alt="upDownArrow" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={heartImg} alt="heartImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                </div>
                                <img src={sentImg} alt="sentImg" />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-sm-6 d-flex justify- content-center d-lg-block d-none'>
                        <div data-aos="fade-up" className='latest_box mw_367'>
                            <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                <img src={LatestImg} alt="LatestImg" />
                                <div className='blank'>
                                    <div className='d-flex align-items-center mb-1 gap-1'>
                                        <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                        <img src={BlueTik} alt="BlueTik" />
                                    </div>
                                    <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4 max_w_321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={commentImg} alt="commentImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={upDownArrow} alt="upDownArrow" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={heartImg} alt="heartImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                </div>
                                <img src={sentImg} alt="sentImg" />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-sm-6 d-flex justify- content-center d-lg-block d-none'>
                        <div data-aos="fade-up" className='latest_box mw_367'>
                            <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                <img src={LatestImg} alt="LatestImg" />
                                <div className='blank'>
                                    <div className='d-flex align-items-center mb-1 gap-1'>
                                        <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                        <img src={BlueTik} alt="BlueTik" />
                                    </div>
                                    <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4 max_w_321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={commentImg} alt="commentImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={upDownArrow} alt="upDownArrow" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={heartImg} alt="heartImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                </div>
                                <img src={sentImg} alt="sentImg" />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-sm-6 d-flex justify- content-center d-lg-block d-none'>
                        <div data-aos="fade-up" className='latest_box mw_367'>
                            <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                <img src={LatestImg} alt="LatestImg" />
                                <div className='blank'>
                                    <div className='d-flex align-items-center mb-1 gap-1'>
                                        <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                        <img src={BlueTik} alt="BlueTik" />
                                    </div>
                                    <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4 max_w_321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={commentImg} alt="commentImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={upDownArrow} alt="upDownArrow" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={heartImg} alt="heartImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                </div>
                                <img src={sentImg} alt="sentImg" />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-sm-6 d-flex justify- content-center d-lg-block d-none'>
                        <div data-aos="fade-up" className='latest_box mw_367'>
                            <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                <img src={LatestImg} alt="LatestImg" />
                                <div className='blank'>
                                    <div className='d-flex align-items-center mb-1 gap-1'>
                                        <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                        <img src={BlueTik} alt="BlueTik" />
                                    </div>
                                    <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4 max_w_321'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={commentImg} alt="commentImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={upDownArrow} alt="upDownArrow" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <img src={heartImg} alt="heartImg" />
                                    <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                </div>
                                <img src={sentImg} alt="sentImg" />
                            </div>
                        </div>
                    </div>

                    <Slider dir="rtl" className='d-lg-none d-block latestSlider' {...settings}>
                        <div className='col-xl-4 col-sm-6 d-flex justify- content-center'>
                            <div data-aos="fade-up" className='latest_box mw_367'>
                                <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                    <img src={LatestImg} alt="LatestImg" />
                                    <div className='blank'>
                                        <div className='d-flex align-items-center mb-1 gap-1'>
                                            <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                            <img src={BlueTik} alt="BlueTik" />
                                        </div>
                                        <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={commentImg} alt="commentImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={upDownArrow} alt="upDownArrow" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={heartImg} alt="heartImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                    </div>
                                    <img src={sentImg} alt="sentImg" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-sm-6 d-flex justify- content-center'>
                            <div data-aos="fade-up" className='latest_box mw_367'>
                                <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                    <img src={LatestImg} alt="LatestImg" />
                                    <div className='blank'>
                                        <div className='d-flex align-items-center mb-1 gap-1'>
                                            <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                            <img src={BlueTik} alt="BlueTik" />
                                        </div>
                                        <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={commentImg} alt="commentImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={upDownArrow} alt="upDownArrow" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={heartImg} alt="heartImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                    </div>
                                    <img src={sentImg} alt="sentImg" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-sm-6 d-flex justify- content-center'>
                            <div data-aos="fade-up" className='latest_box mw_367'>
                                <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                    <img src={LatestImg} alt="LatestImg" />
                                    <div className='blank'>
                                        <div className='d-flex align-items-center mb-1 gap-1'>
                                            <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                            <img src={BlueTik} alt="BlueTik" />
                                        </div>
                                        <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={commentImg} alt="commentImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={upDownArrow} alt="upDownArrow" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={heartImg} alt="heartImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                    </div>
                                    <img src={sentImg} alt="sentImg" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-sm-6 d-flex justify- content-center'>
                            <div data-aos="fade-up" className='latest_box mw_367'>
                                <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                    <img src={LatestImg} alt="LatestImg" />
                                    <div className='blank'>
                                        <div className='d-flex align-items-center mb-1 gap-1'>
                                            <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                            <img src={BlueTik} alt="BlueTik" />
                                        </div>
                                        <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={commentImg} alt="commentImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={upDownArrow} alt="upDownArrow" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={heartImg} alt="heartImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                    </div>
                                    <img src={sentImg} alt="sentImg" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-sm-6 d-flex justify- content-center'>
                            <div data-aos="fade-up" className='latest_box mw_367'>
                                <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                    <img src={LatestImg} alt="LatestImg" />
                                    <div className='blank'>
                                        <div className='d-flex align-items-center mb-1 gap-1'>
                                            <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                            <img src={BlueTik} alt="BlueTik" />
                                        </div>
                                        <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={commentImg} alt="commentImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={upDownArrow} alt="upDownArrow" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={heartImg} alt="heartImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                    </div>
                                    <img src={sentImg} alt="sentImg" />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-sm-6 d-flex justify- content-center'>
                            <div data-aos="fade-up" className='latest_box mw_367'>
                                <div className='d-flex gap-3 align-items-center mb_lg_20'>
                                    <img src={LatestImg} alt="LatestImg" />
                                    <div className='blank'>
                                        <div className='d-flex align-items-center mb-1 gap-1'>
                                            <p className='ff_inter fw-extrabold text16_sm lh_19 color_black mb-0'>Joe Bidenn</p>
                                            <img src={BlueTik} alt="BlueTik" />
                                        </div>
                                        <p className='ff_inter fw-normal text14_xxxs lh_25 color_black opacity_80 text-nowrap mb-0'>I am giving back in the community.</p>
                                    </div>
                                </div>
                                <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 mb-4'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={commentImg} alt="commentImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>28</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={upDownArrow} alt="upDownArrow" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>5</p>
                                    </div>
                                    <div className='d-flex gap-1 align-items-center'>
                                        <img src={heartImg} alt="heartImg" />
                                        <p className='ff_pro fw-normal text15_xxs lh_17 color_black color_lightBlack mb-0'>21</p>
                                    </div>
                                    <img src={sentImg} alt="sentImg" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
        </div >
    )
}

export default Latest