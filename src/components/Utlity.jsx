import React from 'react'
import UtlityBoy from '../assets/images/png/utlity-boy-img.png'

function Utlity() {
    return (
        <div className='utility_bg_img pt_40'>
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse">
                    <div className="col-lg-6 d-flex justify-content-center flex-column">
                        <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_black mb_lg_20 mb_0 mt-lg-0 mt-3'>UTILITY</h3>
                        <p className='ff_inter fw-normal text16_sm lh_25 color_black opacity_80 max_w_550 mb-lg-4 mb-md-2 mb-1'>The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth.</p>
                        <button className='ff_inter fw-semibold text16_sm lh_19 color_black bg_orange btn_padding btn_borderRadius border_transparent fit_content'>Buy $GrayGensler</button>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-xl-end justify-content-center">
                        <img className='w-100 max_w_md_441 max_w_200' src={UtlityBoy} alt="UtlityBoy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utlity