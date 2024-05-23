import React from 'react'
import DextoolImg from '../assets/images/svg/dextools_logo.svg'
import telegramImg from '../assets/images/svg/telegram_symbol.svg'
import twitterImg from '../assets/images/svg/x_logo.svg'
import DocImg from '../assets/images/svg/btn-svg.svg'

function HeroSection() {
    return (
        <div className='bg-black hero_bg_img min_vh_100 h_754 d-flex flex-column'>
            <div className='pt_40'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='ff_inter fw-extrabold text40_xl lh_48 color_white mb-0'>Gxxx Gxxxxxx</p>
                        <input type='checkbox' id='menuIcon' hidden />
                        <ul className='d-flex align-items-center gap_46 menuList ps-0'>
                            <ul className='d-flex flex_column gap-5 ps-0'>
                                <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img src={DextoolImg} alt="DextoolImg" /></a>
                                <a href="https://x.com/?lang=en" target='_blank'><img src={twitterImg} alt="twitterImg" /></a>
                                <a href="https://telegram.org/" target='_blank'><img src={telegramImg} alt="telegramImg" /></a>
                            </ul>
                            <button className='ff_inter fw-semibold text16_sm lh_19 color_white bg-transparent btn_border btn_borderRadius btn_padding text-nowrap'>Buy On Uniswap</button>
                        </ul>
                        <label for='menuIcon' className='d- xl -none d- flex'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='position-relative flex-grow-1 d-flex align-items-center'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='ff_inter fw-extrabold text108_5xl lh_130 color_white mb-0'>G<span className='color_orange'>G</span></h1>
                            <p className='ff_inter fw-semibold text20_md lh_24 max_w_538 color_white opacity_80 mb-0'>Join The <span className='color_orange'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
                            <div className='d-flex flex_wrap align-items-center gap-lg-5 gap-sm-3 gap-2 py_62_32'>
                                <button className='ff_inter fw-semibold text16_sm lh_19 color_black bg_orange border_transparent btn_borderRadius btn_padding text-nowrap'>Buy $GrayGensler</button>
                                <button className='ff_inter fw-semibold text16_sm lh_19 color_white bg-transparent btn_border btn_borderRadius btn_padding text-nowrap'>How To Buy?</button>
                            </div>
                            <button className='ff_inter fw-normal text20_md lh_30 color_white bg-transparent btn_border radius_102 padding_btn text-nowrap'>dwqjddj324dnewdne3dewrrets
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