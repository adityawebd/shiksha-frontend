import React from 'react'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <section className="testimonials pb-5">
            <div className="testimonials_wrapper container pb-5">
                <h2 data-aos="fade-up" className='mb-4'>Testimonials</h2>
                <div className="testimonial_body">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="XYZ Name"
                                about="Creative Designer"
                                sub_about="ABC"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
