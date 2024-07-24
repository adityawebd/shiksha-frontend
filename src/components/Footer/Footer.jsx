import React from 'react'
import './footer.css'
import FooterBrand from '../../assets/logo.png'

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer_wrapper py-5">
             <div className="footer_body row pt-5">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6">
                                <a href="/"><img src={FooterBrand} alt="footer-logo" /></a>
                                <p>Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui iusto nemo minima enim? um et!</p>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6">
                                <h6>Quick Links</h6>
                                <ul>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/t&c">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6">
                                <h6>Top Universities</h6>
                                <ul>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6">
                                <h6>Top Colleges</h6>
                                <ul>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6">
                                <h6>Top Universities</h6>
                                <ul>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6">
                                <h6>Top Colleges</h6>
                                <ul>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                    <li><a href="">Saas Company</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="footer_footer mt-5">
                <div className="footer_buttons">
                    <ul className='d-flex justify-content-center align-items-center'>
                        <li><a href="">Link 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                        <li><a href="">Link 4</a></li>
                    </ul>
                </div>
                <div className="footer_social_media_links d-flex flex-column justify-content-center align-items-start">
                    <div className="icons d-flex flex-row justify-content-center align-items-start">
                        <span><a href=""><FaFacebookF /></a></span>
                        <span><a href=""><FaLinkedinIn /></a></span>
                        <span><a href=""><FaInstagram /></a></span>
                        <span><a href=""><FaTwitter /></a></span>
                    </div>
                    <div className="copyright">&copy; 2024 Shiksha-Helpline</div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
