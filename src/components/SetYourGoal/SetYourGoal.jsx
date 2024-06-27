import { React, useState, useEffect } from 'react'
import './setyourgoal.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'; // Import Swiper CSS

import SliderCard from './SliderCard';
import SliderBG from '../../assets/images/engineering.webp'


const SetYourGoal = () => {

  // const [shouldNotSwipe, setShouldNotSwipe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device width is less than or equal to 768px (tablet size)
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  }

  // Listen to window resize events to update the isMobile state
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const params = {
    slidesPerView: isMobile ? 2.5 : 3.5,
    spaceBetween: isMobile ? 10 : 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <section className="setgoalsection pb-5">
      <div className="setgoalsection_wrapper container pt-5">
        <h2 data-aos="fade-up" className='mb-4'>Select Your Goal</h2>

        {/* <button onClick={toggleSwiping}>Toggle Swiping</button> */}
        {/* Should swipe: {shouldNotSwipe.toString()} */}
        <Swiper {...params}>
          <SwiperSlide>
            <SliderCard
              heading="Engineering"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="MBBS"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="Law"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="Fashion Designing"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="Engineering"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              heading="MBBS"
              sliderbg={SliderBG}
              no_of_colleges="6182"
              degree_name_1="BE/B.TECH"
              specialization="Diploma in Engineering"
              degree_name_2="ME/M.TECH"
            />
          </SwiperSlide>

          <div className="swiper-button-prev"></div> {/* Previous button */}
          <div className="swiper-button-next"></div> {/* Next button */}
        </Swiper>
      </div>
    </section>
  )
}

export default SetYourGoal
