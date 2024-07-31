import React from 'react'
import './studyabroad.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import CollectionIMG from '../../assets/images/topcollection/college1.jpg'

import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import StudyAbroadCard from './StudyAbroadCard';

import Aus from '../../assets/images/Study-abroad/study-aus.png'
import Canada from '../../assets/images/Study-abroad/study-canada.png'
import France from '../../assets/images/Study-abroad/study-france.png'
import Germany from '../../assets/images/Study-abroad/study-germany.png'
import hongKong from '../../assets/images/Study-abroad/study-hongkong.png'
import Ireland from '../../assets/images/Study-abroad/study-ireland.png'
import Malaysia from '../../assets/images/Study-abroad/study-malaysia.png'
import Netherlands from '../../assets/images/Study-abroad/study-netherlands.png'
import NZ from '../../assets/images/Study-abroad/study-nz.png'
import Singapore from '../../assets/images/Study-abroad/study-singapore.png'
import Sweden from '../../assets/images/Study-abroad/study-sweden.png'
import UAE from '../../assets/images/Study-abroad/study-uae.png'
import UK from '../../assets/images/Study-abroad/study-uk.png'
import USA from '../../assets/images/Study-abroad/study-usa.png'

const StudyAbroad = () => {
    return (
        <section className="topcollection studyabroad pb-5">
            <div className="topcollection_wrapper container pt-5">
                <h2 data-aos="zoom-in" className='mb-4'>Study Abroad</h2>
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
                            slidesPerView: 3.5,
                        },
                    }}
                    // navigation={true}
                    //  modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Navigation, A11y]}
                    className="swiper-wrapper mx-auto mb-4"
                >
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={USA}
                            college_name="Best B.Tech College in USA"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={UK}
                            college_name="Best B.Tech College in UK"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={Canada}
                            college_name="Best B.Tech College in Canada"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={Aus}
                            college_name="Best B.Tech College in Australia"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>s
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={Germany}
                            college_name="Best B.Tech College in Germany"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={Ireland}
                            college_name="Best B.Tech College in Ireland"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={NZ}
                            college_name="Best B.Tech College in New Zealand"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudyAbroadCard
                            imgSrc={Netherlands}
                            college_name="Best B.Tech College in Netherlands"
                            noofcoolleges="5506"
                            check_no_of_colleges="1100"
                            avg_study_cost="33.12 K "
                            question_1="Why Study in the USA"
                            question_1_link=""
                            question_2="Why Study in the USA"
                            question_2_link=""
                            question_3="Why Study in the USA"
                            question_3_link=""
                            learn_more_link=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default StudyAbroad
