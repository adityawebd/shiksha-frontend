import {React, useState, useEffect} from 'react'
import './collegerecommendations.css'
import CollegeCard from './CollegeCard';
import CollegeBg from '../../assets/images/topcollection/college1.jpg'

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay,Navigation,  A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';

const CollegeRecommendations = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInterests, setUserInterests] = useState([]);
  const [recommendedColleges, setRecommendedColleges] = useState([]);

  useEffect(() => {
    // Simulate fetching user data (login status and interests) from backend
    // For demonstration purposes, let's use dummy data
    const user = {
      isLoggedIn: true, // Set to true if the user is logged in
      interests: ['Engineering', 'Computer Science'], // User's interests
    };

    setIsLoggedIn(user.isLoggedIn);
    setUserInterests(user.interests);
  }, []);

  useEffect(() => {
    // Fetch recommended colleges based on user's login status and interests
    // For demonstration purposes, let's assume we have a function to fetch recommendations
    fetchRecommendedColleges();
  }, [isLoggedIn, userInterests]);

  const fetchRecommendedColleges = () => {
    // Simulate fetching recommended colleges based on user's interests
    // Replace this with actual logic to fetch recommendations from backend
    // For demonstration purposes, let's use dummy data
    const recommendations = [
      {
        name: 'College A',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science', 'Business'],
      },
      {
        name: 'College B',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
      {
        name: 'College C',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
      {
        name: 'College D',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
      {
        name: 'College E',
        ranking: 2,
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
      {
        name: 'College F',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
      {
        name: 'College G',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
      {
        name: 'College H',
        image: CollegeBg,
        courses: ['Engineering', 'Computer Science'],
      },
    ];
    setRecommendedColleges(recommendations);
  };

    return (
        <section className="collegerecommmendations pb-5">
            <div className="collegerecommendations_wrapper container">
                <h2 className='pb-3'>Recommended Colleges</h2>

                <div className="college_list">
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
                        

                        {
                            recommendedColleges.map((college, index) => (
                                
                                <SwiperSlide>
                                    {/* <TopCollectionCard noofcoolleges="5516" /> */}
                                    <CollegeCard key={index} college={college} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CollegeRecommendations
