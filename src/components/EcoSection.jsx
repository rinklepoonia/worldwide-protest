import React from 'react'
import EcoBoyImg from '../assets/images/png/eco-boy-img.png'
import DexImg from '../assets/images/svg/dextool-about.svg'
import horseImg from '../assets/images/svg/horse-about.svg'
import TwitterImg from '../assets/images/svg/twitter-about.svg'
import telImg from '../assets/images/svg/tewt-about.svg'
import lastlogo from '../assets/images/svg/about-last-logo.svg'
function EcoSection() {
    return (
        <div className='eco_bg_img pt_107'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <img className='w-100 max_w_md_565 max_w_265' src={EcoBoyImg} alt="EcoBoyImg " />
                    </div>
                    <div className="col-lg-6">
                        <div className='d-flex flex-wrap align-items-center gap-md-4 gap-2 mb-2 '>
                            <img className='max_w_lg_60 max_w_40' src={DexImg} alt="DexImg" />
                            <img className='max_w_lg_60 max_w_40' src={horseImg} alt="horseImg" />
                            <img className='max_w_lg_60 max_w_40' src={TwitterImg} alt="TwitterImg" />
                            <img className='max_w_lg_60 max_w_40' src={telImg} alt="telImg" />
                            <img className='max_w_lg_60 max_w_40' src={lastlogo} alt="lastlogo" />
                        </div>
                        <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 mt-lg-0 mt-3'>ECOSYSTEM</h3>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black max_w_550 opacity_80 mb-4 pb-2'>The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme.</p>
                        <button className='ff_inter fw-semibold text16_sm lh_19 color_black bg_orange btn_padding btn_borderRadius border_transparent fit_content'>Buy $GrayGensler</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcoSection