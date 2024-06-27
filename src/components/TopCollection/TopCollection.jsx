import {React,useEffect} from "react";
import './topcollection.css'

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay,Navigation,  A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import TopCollectionCard from './TopCollectionCard';



const TopCollection = () => {
    useEffect(() => {   
        AOS.init();
      }, [])

  return (
    <section className="topcollection pb-5">
        <div className="topcollection_wrapper topcollection_outanimate container">
            <h2 data-aos="fade-up" className='mb-4'>Top Collection</h2>
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
                        slidesPerView: 4.6,
                    },
                }}
                // navigation={true}
                //  modules={[Autoplay, Pagination, Navigation]}
                modules={[Autoplay,Navigation, A11y ]}
                className="swiper-wrapper mx-auto mb-4"
            >
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="5516" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
            </Swiper>
        
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
                          slidesPerView: 4.6,
                      },
                  
                    }}
                // navigation={true}
                //  modules={[Autoplay, Pagination, Navigation]}
                modules={[Autoplay,Navigation, A11y ]}
                  className="swiper-wrapper mx-auto mb-4"
            >
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="5516" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCollectionCard college_name="Best B.Tech College in India" noofcoolleges="2303" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default TopCollection
