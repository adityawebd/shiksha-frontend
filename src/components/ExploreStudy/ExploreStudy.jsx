import React from 'react'
import './explorestudy.css'

import HeroBG from  '../../assets/videos/college1-crop.mp4'

import StateIMG from '../../assets/images/explorestudy/delhi.webp'
import ExploreStudyCard from './ExploreStudyCard'

import { FaGraduationCap } from "react-icons/fa6";



const ExploreStudy = () => {
  return (
    <section className="explorestudy">
        <div className="explorestudy_wrapper">
            <video autoPlay loop muted playsInline class="">
                <source src={HeroBG} type="video/mp4" />
            </video>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 data-aos="fade-up">Explore Top Study Places with Siksha Helpline</h2>
                <p data-aos="fade-up">Creating new benchmarks in learning experiences</p>
            </div>
            <div className="explorestudy_body">
                <p data-aos="fade-up">Find all Study Place here</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={StateIMG} name="Delhi" />
                                <ExploreStudyCard src={StateIMG} name="Banglore" />
                            </div>  
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={StateIMG} name="Mumbai" />
                                <ExploreStudyCard src={StateIMG} name="West bengal" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={StateIMG} name="Chennai" />
                                <ExploreStudyCard src={StateIMG} name="Ahmedabad" />
                            </div>
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={StateIMG} name="Kolkata" />
                                <ExploreStudyCard src={StateIMG} name="Punjab" />
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="contact_button common_new_btn text-center mt-4 mb-5">
                    <span><FaGraduationCap /></span>
                    <a href="">View More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExploreStudy
