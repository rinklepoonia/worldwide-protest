import React from 'react'
import DextoolLogo from '../assets/images/png/dextools.png'
import telegramLogo from '../assets/images/svg/telegram_symbol.svg'
import twitterLogo from '../assets/images/svg/x_logo.svg'

function AppsSection() {
    return (
        <div className='bg_orange h_136 mt_23 z-1 position-relative d-flex align-items-center h_136'>
            <div className='container custam_container'>
                <div className="d-flex justify-content-between flex-wrap">
                    <div className='d-flex align-items-center gap_sm_22 gap_10'>
                        <a href="https://x.com/?lang=en" target='_blank'><img className='max_w_46 max_w_35' src={twitterLogo} alt="twitterLogo" /></a>
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>twitter</h2>
                    </div>
                    <div className='d-flex align-items-center gap_sm_22 gap_10'>
                        <a href="https://telegram.org/" target='_blank'><img className='max_w_46 max_w_35' src={telegramLogo} alt="telegramLogo" /></a>
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>Telegram</h2>
                    </div>
                    <div className='d-flex align-items-center gap_sm_22 gap_10'>
                        <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img className='max_w_46 max_w_35' src={DextoolLogo} alt="DextoolLogo" /></a>
                        <h2 className='ff_inter fw-semibold text48_xxl lh_58 color_white mb-0'>DEXTOOLS</h2>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AppsSection