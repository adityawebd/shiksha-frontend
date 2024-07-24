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
                                name="Testimonial Name 1"
                                about="Testimonial About 1"
                                sub_about="Testimonial Sub About 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 2"
                                about="Testimonial About 2"
                                sub_about="Testimonial Sub About 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 3"
                                about="Testimonial About 3"
                                sub_about="Testimonial Sub About 3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 4"
                                about="Testimonial About 4"
                                sub_about="Testimonial Sub About 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 5"
                                about="Testimonial About 5"
                                sub_about="Testimonial Sub About 5"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 6"
                                about="Testimonial About 6"
                                sub_about="Testimonial Sub About 6"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 7"
                                about="Testimonial About 7"
                                sub_about="Testimonial Sub About 7"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard
                                testimonial_body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod odit omnis ipsum autem, explicabo nisi temporibus libero quae quo."
                                testimonial_img_link=""
                                name="Testimonial Name 8"
                                about="Testimonial About 8"
                                sub_about="Testimonial Sub About 8"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
