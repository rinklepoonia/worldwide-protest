import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Roadmap1 from '../assets/images/png/roadmap1.png'
import Roadmap2 from '../assets/images/png/roadmap2.png'
import Roadmap3 from '../assets/images/png/rooadmap3.png'
import Roadmap4 from '../assets/images/png/roadmap4.png'
import Roadmap5 from '../assets/images/png/roadmap5.png'
import Slider from 'react-slick';

function RoadmapSection() {
    var setting = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };
    return (
        <div className='roadmap_bg_img bg_no_repeat  pt_xl_280 pt_lg_155 pt_md_50 pt_30 h_xl_1274 h_lg_1031 bg_black'>
            <div className="container custam_container">
                <h3 data-aos="zoom-in" className='ff_inter fw-extrabold text64_3xl lh_lg_77 lh_sm_60 lh_43 color_white mb_lg_20 mb_0 text-center'>ROADMAP</h3>
                <p data-aos="zoom-in" className='ff_inter fw-normal text16_sm lh_30 color_white opacity_70 text-center pb_xl_153 pb_lg_90 pb_40 mb-0 max_w_894 text-center mx-auto'>Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty of  laughs along the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)</p>
            </div>
            <Slider className='roadmap' {...setting}>
                <div className='d-flex gap-2 justify-content-center'>
                    <img className='ms-md-0 ms-2' src={Roadmap1} alt="Roadmap1" />
                    <div className='d-flex flex-column justify-content-end'>
                        <h4 className='ff_inter fw-extrabold text24_2md lh_29 color_white max_w_185 mb-md-2 mb-0'>Token Launch (Q1 2024)</h4>
                        <p className='ff_inter fw-semibold text16_sm lh_30 color_white opacity_70 max_w_196 mb_lg_20 mb_0'>Launch $LHGG token, establish initial  liquidity.</p>
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-center'>
                    <img className='ms-md-0 ms-2' src={Roadmap2} alt="Roadmap2" />
                    <div className='d-flex flex-column justify-content-center'>
                        <h4 className='ff_inter fw-extrabold text24_2md lh_29 color_white max_w_237 mb-md-2 mb-0'>Community Building (Q2 2024)</h4>
                        <p className='ff_inter fw-semibold text16_sm lh_30 color_white opacity_70 max_w_196'>Grow vibrant community  through humor and engagement.</p>
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-center'>
                    <img className='ms-md-0 ms-2' src={Roadmap3} alt="Roadmap3" />
                    <div className='d-flex flex-column justify-content-start'>
                        <h4 className='ff_inter fw-extrabold text24_2md lh_29 color_white max_w_237 mb-md-2 mb-0 mt-3'>Governance Implementation (Q3 2024)</h4>
                        <p className='ff_inter fw-semibold text16_sm lh_30 color_white opacity_70 max_w_199'>Introduce community  governance mechanisms.</p>
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-center'>
                    <img className='mb_30 ms-md-0 ms-2' src={Roadmap4} alt="Roadmap4" />
                    <div className='d-flex flex-column justify-content-end'>
                        <h4 className='ff_inter fw-extrabold text24_2md lh_29 color_white max_w_237 mb-md-2 mb-0 mt-3'> Partnerships and Influencer Collaborations (Q4 2024)</h4>
                        <p className='ff_inter fw-semibold text16_sm lh_30 color_white opacity_70 max_w_237 mb-0'> Forge  strategic partnerships and collaborations.</p>
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-center'>
                    <img className='mb_30 ms-md-0 ms-2' src={Roadmap5} alt="Roadmap5" />
                    <div className='d-flex flex-column justify-content-center'>
                        <h4 className='ff_inter fw-extrabold text24_2md lh_29 color_white max_w_237 mb-md-2 mb-0'> Utility Expansion (Q1 2025)</h4>
                        <p className='ff_inter fw-semibold text16_sm lh_30 color_white opacity_70 max_w_237 mb-0'>Explore new use cases and  integrations for $LHGG.</p>
                    </div>
                </div>
                <div className='d-flex gap-2 justify-content-center'>
                    <img className='ms-md-0 ms-2' src={Roadmap3} alt="Roadmap3" />
                    <div className='d-flex flex-column justify-content-start'>
                        <h4 className='ff_inter fw-extrabold text24_2md lh_29 color_white max_w_237 mb-md-2 mb-0 mt-3'>Governance Implementation (Q3 2024)</h4>
                        <p className='ff_inter fw-semibold text16_sm lh_30 color_white opacity_70 max_w_199'>Introduce community  governance mechanisms.</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default RoadmapSection