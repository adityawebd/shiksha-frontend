import React from 'react'
import './footer.css'
import FooterBrand from '../../assets/images/RDG-logo-1.png'

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer_wrapper">
            <div className="footer_body">
                <div className="col-md-2 footer_brand">
                    <img src={FooterBrand} alt="footer-logo" />
                    <p>Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>
                </div>
                <div className="col-md-2 footer_links">
                    <h5>Top Colleges</h5>
                    <ul>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                    </ul>
                </div>
                <div className="col-md-2 footer_links">
                    <h5>Top Universities</h5>
                    <ul>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                    </ul>
                </div>
                <div className="col-md-2 footer_links">
                    <h5>Top Colleges</h5>
                    <ul>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                    </ul>
                </div>
                <div className="col-md-2 footer_links">
                    <h5>Top Colleges</h5>
                    <ul>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                    </ul>
                </div>
                <div className="col-md-2 footer_links">
                    <h5>Top Colleges</h5>
                    <ul>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                        <li><a href="">Saas Company</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_footer mt-5">
                <div className="footer_buttons">
                    <ul className='d-flex justify-content-center align-items-center'>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer_social_media_links d-flex flex-column justify-content-center align-items-start">
                    <div className="icons d-flex flex-row justify-content-center align-items-start">
                        <span><a href=""><FaFacebookF /></a></span>
                        <span><a href=""><FaLinkedinIn /></a></span>
                        <span><a href=""><FaInstagram /></a></span>
                        <span><a href=""><FaTwitter /></a></span>
                    </div>
                    <div className="copyright">&copy; 2024 TailGrids</div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
