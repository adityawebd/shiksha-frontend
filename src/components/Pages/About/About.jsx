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
import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa6";

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
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique illum soluta enim dolore nostrum at, alias quibusdam minus quisquam molestias libero a quasi blanditiis deleniti! Atque explicabo aliquid, mollitia blanditiis provident amet, rerum quae perferendis voluptates quasi vero? Corporis.</p> */}
                        </div>
                        <div data-aos="fade-up" className="shiksha-helpline">
                            <h2>Siksha Helpline</h2>
                            <p>Founded in 2019, Siksha Helpline stands as India's most trusted educational consultancy firm. Our mission is to illuminate the path to higher education with transparency and personalized support.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos totam et in odit ipsum est tempora sint error temporibus blanditiis, reiciendis vel rerum distinctio aut necessitatibus enim numquam iure, omnis dolorum. Placeat, rem ullam doloremque cumque, error, alias quaerat sint deserunt cum voluptas incidunt amet veniam quasi accusantium sit?</p>
                        </div>
                        <div data-aos="fade-up-left" className="m_s_div mission">
                            <figure>
                                <img src={missionIMG} alt="" />
                            </figure>
                            <h3>Mission</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique illum soluta enim dolore nostrum at, alias quibusdam minus quisquam molestias libero a quasi blanditiis deleniti! Atque explicabo aliquid, mollitia blanditiis provident amet, rerum quae perferendis voluptates quasi vero? Corporis.</p> */}
                        </div>
                    </div>
                </div>

                <div className="bg_reddish">
                    <div className="container about_for">
                        <div className="aobut_for_wrapper gap-4">
                            <div data-aos="zoom-in-right" className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Admission Counseling</h4>
                                <h4 data-aos="fade-up">Siksha Helpline for Students</h4>
                                <img data-aos="fade-up" className='mt-4' src={StudentIMG} alt="student-image" />
                                <p data-aos="fade-up" className='mt-3'>Clear, step-by-step guidance through the admission maze.</p>
                            </div>
                            <div className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Career Counseling</h4>
                                <h4 data-aos="fade-up">Siksha Helpline for Intitutions</h4>
                                <img data-aos="fade-up" className='mt-4' src={CollegeIMG} alt="institution-image" />
                                <p data-aos="fade-up" className='mt-3'> Align your passions with the right educational path. Placement Assistance: Connect with opportunities that match your qualifications.</p>
                            </div>
                            <div data-aos="zoom-in-left" className="about_for_card bg-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 data-aos="fade-up">Internship Assistance</h4>
                                <h4 data-aos="fade-up">Siksha Helpline for Parents</h4>
                                <img data-aos="fade-up" className='mt-4' src={ParentsIMG} alt="parent-image" />
                                <p data-aos="fade-up" className='mt-3'>Gain practical experience to boost your academic journey. Loan Assistance: Navigate financial options to fund your education.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_long_way py-4 my-5">
                    <h3 data-aos="fade-up" className='text-center'>Our Milestones</h3>
                    <div className="container about_long_way_wrapper mt-4">
                        <div className="long_way_card">
                            <span><LiaUniversitySolid size={60} /></span>
                            {/* <div className="no_of_colleges">20,000+</div> */}
                            {/* <div className="title">COLLEGES</div> */}
                        </div>
                        <div className="long_way_card">
                            <span><FaBookReader size={60} /></span>
                            {/* <div className="no_of_colleges">180+</div> */}
                            {/* <div className="title">EXAMS</div> */}
                        </div>
                        <div className="long_way_card">
                            <span><IoIosPeople size={60} /></span>
                            {/* <div className="no_of_colleges">10,00,000+</div> */}
                            {/* <div className="title">MONTHLY VISITS</div> */}
                        </div>
                        <div className="long_way_card">
                            <span><FaMugHot size={60} /></span>
                            {/* <div className="no_of_colleges">1,50,000+</div> */}
                            {/* <div className="title">TEA/COFFEE CONSUMED</div> */}
                            <div className="bg_reddish about_long_way py-4">
                                <h3 data-aos="fade-up" className='text-center'>Our Milestones</h3>
                                <div className="container about_long_way_wrapper mt-4">
                                    <div className="long_way_card">
                                        <LiaUniversitySolid size={60} />
                                        <div className="no_of_colleges  mt-3">18,000+</div>
                                        <div className="title">COLLEGES</div>
                                    </div>
                                    <div className="long_way_card">
                                        <FaBookOpenReader size={60} />
                                        <div className="no_of_colleges  mt-3">420</div>
                                        <div className="title">EXAMS</div>
                                    </div>
                                    <div className="long_way_card">
                                        <IoIosPeople size={60} />
                                        <div className="no_of_colleges  mt-3">1,00,000+</div>
                                        <div className="title">MONTHLY VISITS</div>
                                    </div>
                                    <div className="long_way_card">
                                        <GiCoffeeCup size={60} />
                                        <div className="no_of_colleges  mt-3">3,00,000+</div>
                                        <div className="title">COFFEE/TEA CONSUMED</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team_img">
                                <h3 data-aos="fade-up">Why Choose Siksha Helpline?</h3>
                                <p data-aos="fade-up">Thousands of students trust Siksha Helpline for our commitment to clarity and personalized service. Our success stories are testament to our dedication.</p>
                                <h3 data-aos="fade-up">Meet Our Team!</h3>
                                <p data-aos="fade-up">From athletes to musicians and philosophers — we're a pretty lively bunch here at Siksha-Helpline!</p>
                            </div>

                            <div className="bg_reddish about_advertise py-5">
                                <div className="container">
                                    <h3 data-aos="fade-up">Let Us Guide Your Admission Journey</h3>
                                    <p data-aos="fade-up">Whether you're applying for undergraduate or postgraduate programs, Siksha Helpline ensures you're informed and prepared for success.</p>
                                    <h3 data-aos="fade-up">Advertise With Us</h3>
                                    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis vel exercitationem libero maiores similique deserunt et reiciendis architecto porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo! Minima provident ullam labore hic exercitationem culpa sapiente consequuntur.</p>

                                    <a data-aos="fade-up" href="">Mail Us</a>
                                </div>
                            </div>

                            <div className="bg_reddish about_advertise py-5">
                                <div className="container">
                                    <h3 data-aos="fade-up">Contact With Us</h3>
                                    <p data-aos="fade-up">"Ready to embark on your educational journey? Contact Siksha Helpline today for personalized admission guidance.

                                        Enhance the webpage with visuals that highlight the journey from admission confusion to clarity and success."</p>

                                    <a data-aos="fade-up" href="/contact-us">Contact Us</a>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
