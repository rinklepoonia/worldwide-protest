import React from 'react'
import DexImg from '../assets/images/svg/dextool-about.svg'
import horseImg from '../assets/images/svg/horse-about.svg'
import TwitterImg from '../assets/images/svg/twitter-about.svg'
import telImg from '../assets/images/svg/tewt-about.svg'
import lastlogo from '../assets/images/svg/about-last-logo.svg'
import specksImg from '../assets/images/svg/specks-img.svg'
import AboutImg2 from '../assets/images/png/about-seel-img.png'
import fudingAbout1 from '../assets/images/svg/about-Fouding1.svg'
import fudingAbout3 from '../assets/images/svg/about-fouding3.svg'

function AboutSection() {
    return (
        <div className='about_bg_img py_xl_134_104 py_sm_50 py_20 position-relative'>
            <div className='position-absolute pos_fudingAbout1 d-lg-block d-none'><img src={fudingAbout1} alt="fudingAbout1" /></div>
            <div className='position-absolute pos_fudingAbout3 d-lg-block d-none'><img src={fudingAbout3} alt="fudingAbout3" /></div>
            <div className='position-absolute specks_about_Pos d-xl-block d-none'><img src={specksImg} alt="specksImg" /></div>
            <div className='container custam_container'>
                <div className="d- flex row justify-content-between">
                    <div data-aos="fade-up" className="col-lg-6  d-flex align-items-center justify-content-center">
                        <img className='w-100' src={AboutImg2} alt="AboutImg2" />
                    </div>
                    <div className="col-lg-6  pt_lg_84 pt_20 mr_ 35">
                        <div className='d-flex flex-wrap align-items-center gap-md-4 gap-2 mb-xl-4 mb-2 '>
                            <a href="https://www.dextools.io/app/en/pairs" target='_blank'><img className='max_w_lg_60 max_w_40 zoom transition' src={DexImg} alt="DexImg" /></a>
                            <a href="https://www.google.co.in/" target='_blank'> <img className='max_w_lg_60 max_w_40 zoom transition' src={horseImg} alt="horseImg" /></a>
                            <a href="https://x.com/?lang=en" target='_blank'> <img className='max_w_lg_60 max_w_40 zoom transition' src={TwitterImg} alt="TwitterImg" /></a>
                            <a href="https://telegram.org/" target='_blank'><img className='max_w_lg_60 max_w_40 zoom transition' src={telImg} alt="telImg" /></a>
                            <a href="https://www.google.co.in/" target='_blank'> <img className='max_w_lg_60 max_w_40 zoom transition' src={lastlogo} alt="lastlogo" /></a>
                        </div>
                        <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_black mb_xl_20 mb_0'>ABOUT US</h3>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</p>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</p>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'>ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, "If you sell your BTC, we'll  let you hug GG from behind so tightly," embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market.</p>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550 mb-0'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection