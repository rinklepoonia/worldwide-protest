import React from 'react'
import footerLogo from '../assets/images/svg/footer-logo.svg'
import DextoolImg from '../assets/images/svg/dextools_logo.svg'
import telegramImg from '../assets/images/svg/telegram_symbol.svg'
import twitterImg from '../assets/images/svg/x_logo.svg'

function Footer() {
    return (
        <div className='py_xl_150 py_lg_90 py_45 bg-black'>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-3 col-6">
                        <img className='mb_sm_40 mb_15' src={footerLogo} alt="footerLogo" />
                        <p className='ff_inter fw-normal text16_sm lh_25 color_white'>@copyright2024</p>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className='orange_line position-relative d-flex '>
                            <ul className='mb-0 ps_lg_66 ps_30 '>
                                <li className='ff_inter fw_bold text16_sm lh_25 color_white mb_30 text-nowrap'>QUICK LINKS</li>
                                <li className='mb-3'><a href="" className='ff_inter fw-normal text16_sm lh_25 color_white'>Twitter</a></li>
                                <li className='mb-3'><a href="" className='ff_inter fw-normal text16_sm lh_25 color_white'>Telegram</a></li>
                                <li className='mb-2'><a href="" className='ff_inter fw-normal text16_sm lh_25 color_white'>DexTools</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center mt-lg--0 mt-5">
                        <div className='d-flex gap-4'>
                            <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img className='zoom transition' src={DextoolImg} alt="DextoolImg" /></a>
                            <a href="https://x.com/?lang=en" target='_blank'><img className='zoom transition' src={twitterImg} alt="twitterImg" /></a>
                            <a href="https://telegram.org/" target='_blank'><img className='zoom transition' src={telegramImg} alt="telegramImg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer