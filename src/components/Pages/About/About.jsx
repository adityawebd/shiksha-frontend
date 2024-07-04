import React, { useEffect } from 'react'
import './about.css'
import AOS from 'aos';
import Navbar from '../../../Navbar'

import missionIMG from '../../../assets/images/mission.svg'
import visionIMG from '../../../assets/images/vision.svg'
import StudentIMG from '../../../assets/images/about/students.svg'
import ParentsIMG from '../../../assets/images/about/parents.svg'
import CollegeIMG from '../../../assets/images/about/college.svg'
import TeamIMG from '../../../assets/images/about/group-people-working-out-business-plan-office.jpg'

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className="about_us">
                <Navbar />

                <div className="about_us_wrapper bg_reddish">
                    <div className="hero_about_us">
                        <h2>About Us</h2>
                    </div>

                    <div className="mission_vision py-5">
                        <div data-aos="fade-up-right" className="m_s_div vision">
                            <figure>
                                <img src={visionIMG} alt="" />
                            </figure>
                            <h3>Vision</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique illum soluta enim dolore nostrum at, alias quibusdam minus quisquam molestias libero a quasi blanditiis deleniti! Atque explicabo aliquid, mollitia blanditiis provident amet, rerum quae perferendis voluptates quasi vero? Corporis.</p>
                        </div>
                        <div data-aos="fade-up" className="shiksha-helpline">
                            <h2>Shiksha Helpline</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos totam et in odit ipsum est tempora sint error temporibus blanditiis, reiciendis vel rerum distinctio aut necessitatibus enim numquam iure, omnis dolorum. Placeat, rem ullam doloremque cumque, error, alias quaerat sint deserunt cum voluptas incidunt amet veniam quasi accusantium sit?</p>
                        </div>
                        <div data-aos="fade-up-left" className="m_s_div mission">
                            <figure>
                                <img src={missionIMG} alt="" />
                            </figure>
                            <h3>Mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique illum soluta enim dolore nostrum at, alias quibusdam minus quisquam molestias libero a quasi blanditiis deleniti! Atque explicabo aliquid, mollitia blanditiis provident amet, rerum quae perferendis voluptates quasi vero? Corporis.</p>
                        </div>
                    </div>
                </div>

                <div className="bg_reddish">
                    <div className="container about_for">
                        <div className="aobut_for_wrapper gap-4">
                            <div data-aos="zoom-in-right" className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Shiksha Helpline for Students</h4>
                                <img data-aos="fade-up" className='mt-4' src={StudentIMG} alt="student-image" />
                                <p data-aos="fade-up" className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet iusto, totam consequatur sint vel aliquid officia repellat perferendis doloremque!</p>
                            </div>
                            <div className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Shiksha Helpline for Intitutions</h4>
                                <img data-aos="fade-up" className='mt-4' src={CollegeIMG} alt="institution-image" />
                                <p data-aos="fade-up" className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet iusto, totam consequatur sint vel aliquid officia repellat perferendis doloremque!</p>
                            </div>
                            <div data-aos="zoom-in-left" className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Shiksha Helpline for Students</h4>
                                <img data-aos="fade-up" className='mt-4' src={ParentsIMG} alt="parent-image" />
                                <p data-aos="fade-up" className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet iusto, totam consequatur sint vel aliquid officia repellat perferendis doloremque!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg_reddish about_long_way py-4">
                    <h3 data-aos="fade-up" className='text-center'>We've Come a Long Way</h3>
                    <div className="container about_long_way_wrapper mt-4">
                        <div className="long_way_card">
                            <img src="" alt="" />
                            <div className="no_of_colleges">25,000</div>
                            <div className="title">COLLEGES</div>
                        </div>
                        <div className="long_way_card">
                            <img src="" alt="" />
                            <div className="no_of_colleges">250</div>
                            <div className="title">EXAMS</div>
                        </div>
                        <div className="long_way_card">
                            <img src="" alt="" />
                            <div className="no_of_colleges">30,000,000</div>
                            <div className="title">MONTHLY VISITS</div>
                        </div>
                        <div className="long_way_card">
                            <img src="" alt="" />
                            <div className="no_of_colleges">2,00,000</div>
                            <div className="title">CUPS OF COFFEE CONSUMED</div>
                        </div>
                    </div>
                </div>
                <div className="team_img">
                    <h3 data-aos="fade-up">So, who's behind CollegeDunia?</h3>
                    <p data-aos="fade-up">From athletes to musicians and philosophers — we're a pretty lively bunch here at CollegeDunia!</p>
                </div>
                <div className="bg_reddish about_advertise py-5">
                    <div className="container">
                        <h3 data-aos="fade-up">Advertise With Us</h3>
                        <p data-aos="fade-up">With more than 90,000,000 pageviews and 20,000,000 unique visitors a month, CollegeDunia offers advertisers integrated advertising and promotional programs to reach our highly affluent audience of students and parents.</p>

                        <a data-aos="fade-up" href="">Mail Us</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
