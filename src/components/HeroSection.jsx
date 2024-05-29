import React, { useState } from 'react'
import DextoolImg from '../assets/images/png/dextools.png'
import telegramImg from '../assets/images/svg/telegram_symbol.svg'
import twitterImg from '../assets/images/svg/x_logo.svg'
import DocImg from '../assets/images/svg/btn-svg.svg'
import HeroboyImg from '../assets/images/png/hero-boy-img.png'

function HeroSection() {

    const [nav, setnav] = useState(false)
    if (nav === true) {
        document.body.classList.add("overflow_hidden");
    } else {
        document.body.classList.remove("overflow_hidden");
    }
    return (
        <div className='bg-black hero_bg_img bg_100_100 min_vh_100 h_754 d-flex flex-column position-relative'>
            <div className='position-absolute pos_hero_boy'><img className='opacity_30' src={HeroboyImg} alt="HeroboyImg " /></div>
            <div className='pt_40'>
                <div className='custam_container container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a href="">
                            <p className='ff_inter fw-extrabold text40_xl lh_48 color_white mb-0'>Gxxx Gxxxxxx</p>
                        </a>
                        <ul className={`${nav ? "end-0" : "right_100"} mobile-view  d-flex align-items-center gap_46 ps-0 overFlowHidden`}>
                            <ul className='d-flex flex_column gap_20 ps-0'>
                                <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img className='zoom transition max_w_48' src={DextoolImg} alt="DextoolImg" /></a>
                                <a href="https://x.com/?lang=en" target='_blank'><img className='zoom transition' src={twitterImg} alt="twitterImg" /></a>
                                <a href="https://telegram.org/" target='_blank'><img className='zoom transition' src={telegramImg} alt="telegramImg" /></a>
                            </ul>
                            <button className='ff_inter fw-semibold text16_sm lh_19 color_white bg_transparent btn_border btn_borderRadius btn_padding text-nowrap btn_hover transition'>Buy On Uniswap</button>
                        </ul>
                        <div className='menu d-lg-none z_6' onClick={() => setnav(!nav)}>
                            <span className=''></span>
                            <span className='my-2'></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-relative flex-grow-1 d-flex align-items-center'>
                <div className='container custam_container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='ff_inter fw-extrabold text108_5xl lh_130 color_white mb-0'>G<span className='color_orange'>G</span></h1>
                            <p className='ff_inter fw-semibold text20_md lh_24 max_w_538 color_white opacity_80 mb-0'>Join The <span className='color_orange'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
                            <div className='d-flex flex_wrap align-items-center gap_20 py_xl_62_32 py_30'>
                                <button className='ff_inter fw-semibold text16_sm lh_19 color_black bg_orange border_transparent btn_borderRadius btn_padding text-nowrap btn_hover transition '>Buy $GrayGensler</button>
                                <button className='ff_inter fw-semibold text16_sm lh_19 color_white bg_transparent btn_border btn_borderRadius btn_padding text-nowrap btn_hover transition '>How To Buy?</button>
                            </div>
                            <button className='ff_inter fw-normal text20_md lh_30 color_white bg_transparent btn_border radius_102 padding_btn text-nowrap transition'>dwqjddj324dnewdne3dewrrets
                                <img className='ms-4' src={DocImg} alt="DocImg" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection