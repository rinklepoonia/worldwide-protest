import React from 'react'
function TokenSection() {
    return (
        <div className='token_bg_img bg_100 bg_no_repeat bg_black h_xl_1114 h_lg_800 position-relative'>
            <div className="container">
                <div className='row pt_xl_220 pt_lg_106 py_30'>
                    <div className='col-lg-6'>
                        <h3 className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_white mb_xl_20 mb_10 '>TOKENOMICS</h3>
                        <p className='ff_inter fw-normal text16_sm lh_30 color_white opacity_80 mb_xl_20 mb_06 max_w_453'>Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin.  With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the  circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of  transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders.</p>
                        <div className='token_box'>
                            <p className='ff_inter fw-normal text20_md lh_30 color_white max_w_278 d-flex justify-content-between mb_sm_12 mb_0'>Token Name:<span className='fw-bold'>  Let’s Hug GG</span></p>
                            <p className='ff_inter fw-normal text20_md lh_30 color_white max_w_223 d-flex justify-content-between mb_sm_12 mb_0'>Token Symbol:<span className='fw-bold'>$LHGG</span></p>
                            <p className='ff_inter fw-normal text20_md lh_30 color_white max_w_300 d-flex justify-content-between mb_sm_12 mb_0'>Total Supply:<span className='fw-bold'>1 Billion $LHGG</span></p>
                            <p className='ff_inter fw-normal text20_md lh_30 color_white max_w_324 d-flex justify-content-between mb_sm_12 mb_0'>Total Type:<span className='fw-bold'>Solana SPL Token</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-sm-4 mt-3">
                        <div className='d-flex gap_sm_18 gap_10 mb_sm_18 mb_10 token_flex_wrap justify-content-center'>
                            <div className='token_orangeBox py_xl_16 py_5 px_xl_22 px_10'>
                                <p className='ff_inter fw-semibold text20_md lh_30 color_black mb-sm-2 mb-0 text-nowrap'> Marketing & Partnerships</p>
                                <p className='ff_inter fw-semibold text32_3md lh_30 color_black mb-0 text-center'>5%</p>
                            </div>
                            <div className='token_orangeBox py_xl_16 py_5 px_xl_26 px_10'>
                                <p className='ff_inter fw-semibold text20_md lh_30 color_black mb-sm-2 mb-0'>Reserve</p>
                                <p className='ff_inter fw-semibold text32_3md lh_30 color_black mb-0 text-center'>5%</p>
                            </div>
                            <div className='token_orangeBox py_xl_16 py_5 px_xl_22 px_10'>
                                <p className='ff_inter fw-semibold text20_md lh_30 color_black mb-sm-2 mb-0 text-nowrap'>Public Sale</p>
                                <p className='ff_inter fw-semibold text32_3md lh_30 color_black mb-0 text-center'>45%</p>
                            </div>
                        </div>
                        <div className='d-flex token_flex_wrap gap_sm_18 gap_10 mb_sm_18 mb_10 justify-content-center'>
                            <div className='token_orangeBox py_xl_16 py_5 px_xl_22 px_10'>
                                <p className='ff_inter fw-semibold text20_md lh_30 color_black mb-sm-2 mb-0 text-nowrap'>Community Development</p>
                                <p className='ff_inter fw-semibold text32_3md lh_30 color_black mb-0 text-center'>15%</p>
                            </div>
                            <div className='token_orangeBox py_xl_16 py_5 px_xl_68 px_46'>
                                <p className='ff_inter fw-semibold text20_md lh_30 color_black mb-sm-2 mb-0 text-nowrap'>Ecosystem Fund</p>
                                <p className='ff_inter fw-semibold text32_3md lh_30 color_black mb-0 text-center'>10%</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='token_orangeBox py_xl_16 py_5 px_xl_72 px_50'>
                                <p className='ff_inter fw-semibold text20_md lh_30 color_black mb-sm-2 mb-0 text-nowrap'>Team & Adisors</p>
                                <p className='ff_inter fw-semibold text32_3md lh_30 color_black mb-0 text-center'>20%</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TokenSection