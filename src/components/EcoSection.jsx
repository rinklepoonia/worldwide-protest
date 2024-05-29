import React from 'react'
import EcoBoyImg from '../assets/images/png/eco-boy-img.png'
import DexImg from '../assets/images/svg/dextool-about.svg'
import horseImg from '../assets/images/svg/horse-about.svg'
import TwitterImg from '../assets/images/svg/twitter-about.svg'
import telImg from '../assets/images/svg/tewt-about.svg'
import lastlogo from '../assets/images/svg/about-last-logo.svg'
import EcoNewsImg from '../assets/images/svg/eco-news-svg.svg'
import specksImg from '../assets/images/svg/specks-img.svg'
function EcoSection() {
    return (
        <div className='eco_bg_img pt_xl_200_110 pt_lg_145_53 pt_0_30 position-relative'>
            <div className='position-absolute specks_pos d-lg-block d-none'><img src={specksImg} alt="specksImg" /></div>
            <div className='position-absolute pos_EcoNews d-lg-block d-none z-1'><img src={EcoNewsImg} alt="EcoNewsImg" /></div>
            <div className="container">
                <div className="row justify-content-between">
                    <div data-aos="fade-up" className="col-lg-5 d-flex justify-content-center">
                        <img className='w_100 max_w_md_565 max_w_265' src={EcoBoyImg} alt="EcoBoyImg " />
                    </div>
                    <div data-aos="fade-up" className="col-lg-6 d-flex justify-content-center pt-lg-0 pt-3">
                        <div className='blank'>
                            <div className='d-flex flex-wrap align-items-center gap-md-4 gap-2 mb-2 '>
                                <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img className='max_w_lg_60 max_w_40 zoom transition' src={DexImg} alt="DexImg" /></a>
                                <a href="https://www.google.co.in/" target='_blank'> <img className='max_w_lg_60 max_w_40 zoom transition' src={horseImg} alt="horseImg" /></a>
                                <a href="https://x.com/?lang=en" target='_blank'> <img className='max_w_lg_60 max_w_40 zoom transition' src={TwitterImg} alt="TwitterImg" /></a>
                                <a href="https://telegram.org/" target='_blank'><img className='max_w_lg_60 max_w_40 zoom transition' src={telImg} alt="telImg" /></a>
                                <a href="https://www.google.co.in/" target='_blank'> <img className='max_w_lg_60 max_w_40 zoom transition' src={lastlogo} alt="lastlogo" /></a>
                            </div>
                            <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 mt-lg-0 mt-sm-3 mt-0 mb_lg_20 mb_0'>ECOSYSTEM</h3>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black max_w_550 opacity_80 mb-sm-4 mb-0 pb-2'>The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme.</p>
                            <button className='ff_inter fw-semibold text16_sm lh_19 color_black bg_orange btn_padding btn_borderRadius border_transparent fit_content btn_hover transition'>Buy $GrayGensler</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcoSection