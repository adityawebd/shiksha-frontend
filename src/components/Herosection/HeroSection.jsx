import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../Navbar';
import './herosection.css';
import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import HeroBG from '../../assets/videos/college1-crop.mp4';
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onloadeddata = () => {
        setVideoLoaded(true);
      };
    }
  }, []);

  return (
    <div>
      <section className="herosection">
        {!videoLoaded && (
          <div className="video-placeholder">
            <img src="path_to_low_quality_image.jpg" alt="Loading..." />
          </div>
        )}
        <LazyLoadComponent>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="video_bg"
            preload="metadata"
          >
            <source src={HeroBG} type="video/mp4" />
          </video>
        </LazyLoadComponent>
        <Navbar />
        <div className="herosection_wrapper">
          <h2>
            <span className='fixed_h'>Find Over</span> {' '}
            <span style={{ color: '#00f1ff', fontWeight: 'bold', marginLeft: '150px' }}>
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
            <NavLink to=""><FaSearch /></NavLink>
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
  );
}

export default HeroSection;
