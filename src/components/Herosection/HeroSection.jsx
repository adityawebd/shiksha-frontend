import React from 'react'
import Navbar from '../../Navbar';
import './herosection.css'
import { Typewriter } from 'react-simple-typewriter'
// import '../assets/css/global.css'
import { NavLink } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";

import HeroBG from  '../../assets/videos/college1-crop.mp4'
import SetYourGoal from '../SetYourGoal/SetYourGoal';
import TopCollection from '../TopCollection/TopCollection';
import CollegeRecommendations from '../CollegeRecommendations/CollegeRecommendations';
import Top10Colleges from '../Top10Colleges/Top10Colleges';
import ExploreStudy from '../ExploreStudy/ExploreStudy';
import ClassExam from '../ClassExam/ClassExam';
import TopExams from '../TopExams/TopExams';
import LatestNews from '../LatestNews/LatestNews';
import StudyAbroad from '../StudyAbroad/StudyAbroad';
import Testimonials from '../Testimonials/Testimonials';

const HeroSection = () => {
  return (
    <div>
      <section className="herosection">
        <video autoPlay loop muted playsInline className="video_bg">
              <source src={HeroBG} type="video/mp4" />
        </video>
        <Navbar />
        <div className="herosection_wrapper">
          <h2><span className='fixed_h'>Find Over</span> {' '} 
            <span style={{ color: '#00f1ff', fontWeight: 'bold', marginLeft: '150px' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['3500+ Colleges in India', '500+ Exams in India', '1100+ Exams in India', '1 Lakh Reviews in India!']}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
          
              />
            </span>
          </h2>
          
          <div className="search_widget">
              <input type="text" placeholder='Search for Colleges, Exams, Courses, and More...' />
              <NavLink href=""><FaSearch /></NavLink>
          </div>
        </div>
      </section>
      <SetYourGoal />
      <TopCollection />
      <CollegeRecommendations />  
      <Top10Colleges />
      <ExploreStudy />
      <ClassExam />
      <TopExams />
      <LatestNews />
      <StudyAbroad />
      <Testimonials />
    </div>
  )
}

export default HeroSection
