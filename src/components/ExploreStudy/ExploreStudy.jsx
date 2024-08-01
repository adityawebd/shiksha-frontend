import React from 'react'
import './explorestudy.css'

import HeroBG from  '../../assets/videos/college1-crop.mp4'

import StateIMG from '../../assets/images/explorestudy/delhi.webp'
import Delhi from '../../assets/images/explore-places/delhi.png'
import Chennai from '../../assets/images/explore-places/chennai.png'
import Bombay from '../../assets/images/explore-places/gateway of india.png'
import Kolkata from '../../assets/images/explore-places/kolakata.png'
import Ahemdabad from '../../assets/images/explore-places/ahemdabad.png'
import Punjab from '../../assets/images/explore-places/golden-temple.png'
import Banglore from '../../assets/images/explore-places/bengalore.png'
import WestBengal from '../../assets/images/explore-places/West-bengal.png'

import ExploreStudyCard from './ExploreStudyCard'

import { FaGraduationCap } from "react-icons/fa6";



const ExploreStudy = () => {
  return (
    <section className="explorestudy">
        <div className="explorestudy_wrapper">
            <video autoPlay loop muted playsInline className="">
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
                                <ExploreStudyCard src={Delhi} name="Delhi" />
                                <ExploreStudyCard src={Banglore} name="Bangalore" />
                            </div>  
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={Bombay} name="Mumbai" />
                                <ExploreStudyCard src={WestBengal} name="West Bengal" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={Chennai} name="Chennai" />
                                <ExploreStudyCard src={Ahemdabad} name="Ahmedabad" />
                            </div>
                            <div className="col-md-6 explore_div">
                                <ExploreStudyCard src={Kolkata} name="Kolkata" />
                                <ExploreStudyCard src={Punjab} name="Punjab" />
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
