import {React, useState, useEffect} from 'react'
import './collegerecommendations.css'
import CollegeCard from './CollegeCard';
import CollegeBg from '../../assets/images/topcollection/college1.jpg'
import Alliance from '../../assets/images/recommended-college/alliance.png'
import Bhuvneshwaer from '../../assets/images/recommended-college/bhuvneshwaer.png'
import BML from '../../assets/images/recommended-college/bml.png'
import ITM from '../../assets/images/recommended-college/itm.png'
import JML from '../../assets/images/recommended-college/jmlpuria.png'
import MDI from '../../assets/images/recommended-college/mdi-uni.png'
import NDIM from '../../assets/images/recommended-college/ndim.png'
import Praxis from '../../assets/images/recommended-college/praxis.png'
import Soil from '../../assets/images/recommended-college/soil.png'
import UBS from '../../assets/images/recommended-college/ubs.png'
import Woxsen from '../../assets/images/recommended-college/woxsen.png'

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
        name: 'MDI Murshidabad',
        image: MDI,
        courses: ['Estd 2014', 'Murshidaba, West Bengal', 'PGDM 1st Yr Fees:₹788,110'],
      },
      {
        name: 'IMI Bhuneshwar ',
        image: Bhuvneshwaer,
        courses: ['Estd 2011', 'Bhubaneswar, Odisha Science', 'PGDM Total Fees:₹1,320,000'],
      },
      {
        name: 'BML Munjal University ',
        image: BML,
        courses: ['Estd 2014', 'Gurgaon, Haryana', '₹6.7 Lakhs (1st Year Fees)(pgdm)'],
      },
      {
        name: 'SOIL Institute of Management ',
        image: Soil,
        courses: ['Estd 2008', 'Gurgaon, Haryana', '1st Yr Fees:₹1,533,226(pgdm)'],
      },
      {
        name: 'Alliance University Bangalore ',
        ranking: 2,
        image: Alliance,
        courses: ['Estd 2010', 'Bangalore, Karnataka', 'Total Fees:₹115,500(pgdm)'],
      },
      {
        name: 'Jaipuria institute of Management Noida ',
        image: JML,
        courses: ['Estd 2004', 'Noida, Uttar Pradesh', '1st Yr Fees:₹740,000 (pgdm)'],
      },
      {
        name: 'Woxsyn University Hyderabad ',
        image: Woxsen,
        courses: ['Estd 2014', 'Hyderabad, Telangana', '1st Yr Fees:₹770,000 (MBA)'],
      },
      {
        name: 'NDIM new Delhi ',
        image: NDIM,
        courses: ['Estd 1992', 'New Delhi, Delhi NCR', '1st Yr Fees:₹575,000'],
      },
      {
        name: ' ITM Navi Mumbai ',
        image: ITM,
        courses: ['Estd 1991', 'Navi Mumbai, Maharashtra', 'Total Fees:₹1,195,000 (MBA)'],
      },
      {
        name: 'Universal Business School Mumbai ',
        image: BML,
        courses: ['Estd 2009', 'Karjat, Maharashtra', 'PGDM ₹11.98 Lakhs (Total Fees)'],
      },
      {
        name: 'Praxis School of Business Kolkata ',
        image: Praxis,
        courses: ['Estd 2007', 'Kolkata, West Bengal', '[PGDM] Total Fees:₹951,000'],
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
                                
                                <SwiperSlide key={index}>
                                    {/* <TopCollectionCard noofcoolleges="5516" /> */}
                                    <CollegeCard  college={college} />
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
