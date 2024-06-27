import React from 'react'
import './App.css';
import './assets/css/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection/HeroSection';

import 'bootstrap/dist/css/bootstrap.css'
// import Navbar from './Navbar';
import SetYourGoal from './components/SetYourGoal/SetYourGoal';
import TopCollection from './components/TopCollection/TopCollection';
import Top10Colleges from './components/Top10Colleges/Top10Colleges';
import ExploreStudy from './components/ExploreStudy/ExploreStudy';
import ClassExam from './components/ClassExam/ClassExam';
import LatestNews from './components/LatestNews/LatestNews';
import StudyAbroad from './components/StudyAbroad/StudyAbroad';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import TopExams from './components/TopExams/TopExams';
import CollegeRecommendations from './components/CollegeRecommendations/CollegeRecommendations';
import CollegePage from './components/Pages/CollegePage/CollegePage';

const App = () => {
  return (
    <BrowserRouter>
      {/* <SetYourGoal />
      <TopCollection />
      <CollegeRecommendations />
      <Top10Colleges />
      <ExploreStudy />
      <ClassExam />
      <TopExams />
      <LatestNews />
      <StudyAbroad />
      <Testimonials /> */}
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/collegepage' element={<CollegePage />} />

        {/* <Route path='*' element={<Error />} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App