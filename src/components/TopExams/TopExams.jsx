import { React, useEffect } from 'react'
import './topexams.css'


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
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
                            participating_colleges="9987"
                            exam_date="May 05, 2024"
                            exam_level="National"
                            application_process_link=""
                            exam_info_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopExamsCard
                            organization="NEET"
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
