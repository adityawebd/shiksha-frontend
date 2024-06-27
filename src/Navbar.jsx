'use client'
import {React, useState, useEffect} from 'react'
import LOGO from './assets/images/RDG-logo-1.png'
import DarkLOGO from './assets/images/rapid-logo.webp'
import './navbar.css'
import { NavLink } from 'react-router-dom';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { FaGraduationCap } from "react-icons/fa6";


const Navbar = () => {
    
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) => {
      setActiveItem(itemName === activeItem ? null : itemName);
    };
    const IconStyling = {
        color: '#fff'
    }

    useEffect(() => {
        const handleScroll = () => {
        //   const scrollPosition = window.scrollY;
        //   const windowHeight = window.innerHeight;
        //   const scrollThreshold = windowHeight * 0.5; // 10% of window height
    
        //   const isScrolled = scrollPosition > scrollThreshold;
        //   if (isScrolled !== scrolled) {
        //     setScrolled(isScrolled);
        //   }
          const scrollPosition = window.scrollY;
            const scrollThreshold = 50; // Adjust as needed

            setScrolled(scrollPosition > scrollThreshold);
        };
    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    // <nav class={color ? 'navbar navbar-expand-lg navbar_fixed navbar_dark' : 'navbar_fixed navbar_dark'}>
    <nav className={`navbar navbar-expand-lg  ${ scrolled ? 'navbar_fixed navbar_dark' : '' }`}>
        {/* <a className={`navbar-brand ${scrolled ? DarkLOGO : LOGO} `} href="#"> */}
        <NavLink className={`navbar-brand` }    to="/">
            <img src={scrolled ? DarkLOGO : LOGO} alt="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {
            scrolled ? (
                <div className="search_widget navbar_search_widget">
                    <input type="text" placeholder='Search for Colleges, Exams, Courses, and More...' />
                    <NavLink href=""><FaSearch /></NavLink>
                </div>
            ) :
            (
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#"  onClick={() => handleItemClick('item1')} 
            style={{ color: activeItem === 'item1' ? '#fff' : '', background: activeItem === 'item1' ? '#3D52A0' : '' }}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={() => handleItemClick('item2')} 
            style={{ color: activeItem === 'item2' ? '#fff' : '', background: activeItem === 'item2' ? '#3D52A0' : '' }}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={() => handleItemClick('item3')} 
            style={{ color: activeItem === 'item3' ? '#fff' : '', background: activeItem === 'item3' ? '#3D52A0' : '' }}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={() => handleItemClick('item4')} 
            style={{ color: activeItem === 'item4' ? '#fff' : '', background: activeItem === 'item4' ? '#3D52A0' : '' }}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={() => handleItemClick('item5')} 
            style={{ color: activeItem === 'item5' ? '#fff' : '', background: activeItem === 'item5' ? '#3D52A0' : '' }}>Pages</NavLink>
                    </li>
                </ul>
            )
        }

            
            <div className="social_media_links ms-auto">
                <div className="icon_div">
                    <FaTwitter style={IconStyling} />
                </div>
                <div className="icon_div">
                    <FaFacebookF style={IconStyling} />
                </div>
                <div className="icon_div">
                    <FaLinkedinIn style={IconStyling} />
                </div>
                <div className="icon_div">
                    <FaInstagram style={IconStyling} />
                </div>
            </div>

            {
            scrolled ? (
                <div className="nav_btns ms-auto">
                    <div className="contact_button common_new_btn text-center mt-4 mb-5">
                        <span><FaGraduationCap /></span>
                        <a href="">Login/Signup</a>
                    </div>
                    <div className="contact_button common_new_btn text-center mt-4 mb-5">
                        <span><FaGraduationCap /></span>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            ) :
            (
                <div className="nav_btns ms-auto not_scrolled_nav_btns">
                    <div className="contact_button common_new_btn text-center mt-4 mb-5">
                        <span><FaGraduationCap /></span>
                        <a href="">Login/Signup</a>
                    </div>
                    <div className="contact_button common_new_btn text-center mt-4 mb-5">
                        <span><FaGraduationCap /></span>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            )
        }

            
            
        </div>
    </nav>
  )
}

export default Navbar
