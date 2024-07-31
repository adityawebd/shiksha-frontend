import { React, useEffect } from 'react'
import './topexams.css'

import Bitsat from '../../assets/images/TOP exams n signs/bitsat-exam.png'
import CAT from '../../assets/images/TOP exams n signs/bitsat-exam.png'
import CUET from '../../assets/images/TOP exams n signs/cuet-exam.png'
import GATE from '../../assets/images/TOP exams n signs/gate-exam.png'
import IITJAM from '../../assets/images/TOP exams n signs/iitjam.png'
import JEEMAIN from '../../assets/images/TOP exams n signs/jee mains.png'
import JEEADVANCE from '../../assets/images/TOP exams n signs/jee-adv.png'
import MAT from '../../assets/images/TOP exams n signs/mat-exam.png'
import NEET from '../../assets/images/TOP exams n signs/neet-exam.png'
import NMAT from '../../assets/images/TOP exams n signs/nmat-exam.png'
import XAT from '../../assets/images/TOP exams n signs/xat-exam.png'
import BitsatLogo from '../../assets/images/TOP exams n signs/bitsat-exam-logo.png'
import CATLogo from '../../assets/images/TOP exams n signs/cat-symbol.png'
import CUETLogo from '../../assets/images/TOP exams n signs/cuet-symbol.png'
import GATELogo from '../../assets/images/TOP exams n signs/gate-logo.png'
import IITJAMLogo from '../../assets/images/TOP exams n signs/iitjam-logo.png'
import JEEMAINLogo from '../../assets/images/TOP exams n signs/jee-mains-logo.png'
import JEEADVANCELogo from '../../assets/images/TOP exams n signs/jee-advance-symbol.png'
import MATLogo from '../../assets/images/TOP exams n signs/mat-logo.png'
import NEETLogo from '../../assets/images/TOP exams n signs/neet.png'
import NMATLogo from '../../assets/images/TOP exams n signs/nmat-logo.png'
import XATLogo from '../../assets/images/TOP exams n signs/xat-symbol.png'

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import TopExamsCard from './TopExamsCard';
import AOS from "aos";
import "aos/dist/aos.css";

const TopExams = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <section className="topexam pb-5">
            <div className="topexam_wrapper container">
                <h2 className='mb-4'>Top Exams</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    // navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2.4,
                        },
                        780: {
                            slidesPerView: 3.8,
                        },
                        1300: {
                            slidesPerView: 3.4,
                        },
                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={NEET}
                            examLogo={NEETLogo}     
                            organization="Neet"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={CAT}
                            examLogo={CATLogo}    
                            organization="Cat"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={JEEADVANCE}
                            examLogo={JEEADVANCELogo}    
                            organization="JEE Advance"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={JEEMAIN}
                            examLogo={JEEMAINLogo}    
                            organization="JEE Main"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={NMAT}
                            examLogo={NMATLogo}    
                            organization="NMAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={MAT}
                            examLogo={MATLogo}    
                            organization="MAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={GATE}
                            examLogo={GATELogo}    
                            organization="Gate"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={XAT}
                            examLogo={XATLogo}    
                            organization="XAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={Bitsat}
                            examLogo={BitsatLogo}    
                            organization="BISAT"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={IITJAM}
                            examLogo={IITJAMLogo}    
                            organization="IIT JAM"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={CAT}
                            examLogo={CATLogo}    
                            organization="Cat"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            imgSrc={CUET}
                            examLogo={CUETLogo}    
                            organization="CUET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default TopExams
