import React from 'react'
import UtlityBoy from '../assets/images/png/utlity-boy-img.png'
import diaryImg from '../assets/images/svg/diary-paper-svg.svg'
import loveFuding1 from '../assets/images/svg/fuding1.svg'
import loveFuding2 from '../assets/images/svg/fuding2.svg'
import loveFuding3 from '../assets/images/svg/fuding3.svg'

function Utlity() {
    return (
        <div className='utility_bg_img pt_xl_198 position-relative'>
            <div className='position-absolute pos_diaryPaper d-lg-block d-none'><img src={diaryImg} alt="diaryImg" /></div>
            <div className='position-absolute pos_fuding1 d-xl-block d-none'><img src={loveFuding1} alt="loveFuding1" /></div>
            <div className='position-absolute pos_fuding2 d-lg-block d-none '><img src={loveFuding2} alt="loveFuding2" /></div>
            <div className='position-absolute pos_fuding3 d-lg-block d-none'><img src={loveFuding3} alt="loveFuding3" /></div>
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                        <div className='blank'>
                            <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_black mb_lg_20 mb_0 mt-lg-0 mt-3'>UTILITY</h3>
                            <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550 mb-lg-4 mb-md-2 mb-1'>The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth.</p>
                            <button className='ff_inter fw-semibold text16_sm lh_19 color_black bg_orange btn_padding btn_borderRadius border_transparent fit_content black_btn_hover transition'>Buy $GrayGensler</button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img className='w-100 max_w_md_441 max_w_200' src={UtlityBoy} alt="UtlityBoy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utlity