import { React, useState, useEffect } from 'react'
import './latestnews.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css'; // Import Swiper CSS

import SliderBG from '../../assets/images/engineering.webp'
import LatestNewsCard from './LatestNewsCard';
import { Navigation } from 'swiper/modules';


const LatestNews = () => {

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
    modules: { Navigation },
    slidesPerView: isMobile ? 2.5 : 3.5,
    spaceBetween: isMobile ? 10 : 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 4000, // 3 seconds delay between slides
      disableOnInteraction: false // Enables autoplay even if user interacts with the swiper
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    observer: true,
    observeParents: true
  }

  return (
    <section className="setgoalsection latest_news">
      <div className="setgoalsection_wrapper container">
        <h2 data-aos="zoom-in" className='mb-4'>Latest News & Notifications</h2>

        {/* <button onClick={toggleSwiping}>Toggle Swiping</button> */}
        {/* Should swipe: {shouldNotSwipe.toString()} */}
        <Swiper {...params}>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestNewsCard
              sliderbg={SliderBG}
              news_title="AEEE 2024 Phase 2 Admit Card Released"
              location="New Delhi"
              news_para="Amrita Vishwa Vidyapeetham has released the AEEE 2024 Phase 2 Admit Card on April 29, 2024. Candidates who have successfully registered ..."
              read_more_link=""
            />
          </SwiperSlide>

          {/* <div className="swiper-button-prev"></div>  */}
          {/* Previous button */}
          {/* <div className="swiper-button-next"></div>  */}
          {/* Next button */}
          {/* <div className="swiper-button-prev"></div> Previous button
          <div className="swiper-button-next"></div> Next button */}
        </Swiper>
      </div>
    </section>
  )
}

export default LatestNews
