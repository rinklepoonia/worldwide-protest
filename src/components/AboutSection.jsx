import React from 'react'
import AboutImg from '../assets/images/png/sell-img.png'
import DexImg from '../assets/images/svg/dextool-about.svg'
import horseImg from '../assets/images/svg/horse-about.svg'
import TwitterImg from '../assets/images/svg/twitter-about.svg'
import telImg from '../assets/images/svg/tewt-about.svg'
import lastlogo from '../assets/images/svg/about-last-logo.svg'
import specksImg from '../assets/images/svg/specks-img.svg'

function AboutSection() {
    return (
        <div className='about_bg_img py_134_104 position-relative'>
            <div className='position-absolute specks_about_Pos'><img src={specksImg} alt="specksImg" /></div>
            <div className='container'>
                <div className="row justify-content-between">
                    <div className="max_w_688 w_50 d-flex justify-content-center">
                        <img className='w-100 max_w_940 h-100 object-fit-contain' src={AboutImg} alt="AboutImg" />
                    </div>
                    <div className="max_w_571 w_50 pt_104">
                        <div className='d-flex flex-wrap align-items-center gap-md-4 gap-2 mb-xl-4 mb-2 '>
                            <img className='max_w_lg_60 max_w_40' src={DexImg} alt="DexImg" />
                            <img className='max_w_lg_60 max_w_40' src={horseImg} alt="horseImg" />
                            <img className='max_w_lg_60 max_w_40' src={TwitterImg} alt="TwitterImg" />
                            <img className='max_w_lg_60 max_w_40' src={telImg} alt="telImg" />
                            <img className='max_w_lg_60 max_w_40' src={lastlogo} alt="lastlogo" />
                        </div>
                        <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_black mb_lg_20  mb_0'>ABOUT US</h3>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</p>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</p>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'>ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, "If you sell your BTC, we'll  let you hug GG from behind so tightly," embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market.</p>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection