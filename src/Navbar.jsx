'use client'
import { React, useState, useEffect } from 'react'
import LOGO from './assets/logo.png'
import DarkLOGO from './assets/logo.png'
import './navbar.css'
import { NavLink } from 'react-router-dom';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [notificationType, setNotificationType] = useState('normal'); // State for dropdown selection
    // const [notifications, setNotifications] = useState([]); // State to store notifications
    const [notifications, setNotifications] = useState([  // demo data for notifications
        {
            id: 1,
            type: 'normal',
            image: 'path/to/image1.jpg',
            title: 'Notification 1',
            message: 'This is the first notification message.',
            date: '2023-07-24',
            link: '#'
        },
        {
            id: 2,
            type: 'live',
            image: 'path/to/image2.jpg',
            title: 'Live Notification 1',
            message: 'This is the first live notification message.',
            date: '2023-07-24',
            link: '#'
        },
        {
            id: 3,
            type: 'normal',
            image: 'path/to/image3.jpg',
            title: 'Notification 2',
            message: 'This is the second notification message.',
            date: '2023-07-25',
            link: '#'
        },
        {
            id: 4,
            type: 'live',
            image: 'path/to/image4.jpg',
            title: 'Live Notification 2',
            message: 'This is the second live notification message.',
            date: '2023-07-25',
            link: '#'
        }
    ]);



    const handleItemClick = (itemName) => {
        setActiveItem(itemName === activeItem ? null : itemName);
    };
    const IconStyling = {
        color: '#fff'
    }


    const openModal = () => {   //function to open modal
        setIsOpen(true);
    };

    const closeModal = () => {  //function to close modal
        setIsOpen(false);
    };

    const fetchNotifications = async () => {         //for notifications
        // Replace with backend API endpoint
        const response = await fetch('YOUR_BACKEND_API_ENDPOINT');
        const data = await response.json();
        setNotifications(data);
    };

    useEffect(() => {
        if (modalIsOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [modalIsOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 50; // Adjust as needed

            setScrolled(scrollPosition > scrollThreshold);
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => { //for notifications
        if (modalIsOpen) {
            fetchNotifications();
        }
    }, [modalIsOpen]);

    return (
        // <nav class={color ? 'navbar navbar-expand-lg navbar_fixed navbar_dark' : 'navbar_fixed navbar_dark'}>
        <nav className={`navbar navbar-expand-lg  ${scrolled ? 'navbar_fixed navbar_dark' : ''}`}>
            {/* <a className={`navbar-brand ${scrolled ? DarkLOGO : LOGO} `} href="#"> */}
            <NavLink className={`navbar-brand`} to="/">
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
                                    <NavLink className="nav-link" to="/" onClick={() => handleItemClick('item1')}
                                        style={{ color: activeItem === 'item1' ? '#fff' : '', background: activeItem === 'item1' ? '#3D52A0' : '' }}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#" onClick={() => handleItemClick('item2')}
                                        style={{ color: activeItem === 'item2' ? '#fff' : '', background: activeItem === 'item2' ? '#3D52A0' : '' }}>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about-us" onClick={() => handleItemClick('item3')}
                                        style={{ color: activeItem === 'item3' ? '#fff' : '', background: activeItem === 'item3' ? '#3D52A0' : '' }}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact-us" onClick={() => handleItemClick('item4')}
                                        style={{ color: activeItem === 'item4' ? '#fff' : '', background: activeItem === 'item4' ? '#3D52A0' : '' }}>Contact</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link" onClick={() => handleItemClick('item5')}
                                        style={{ color: activeItem === 'item5' ? '#fff' : '', background: activeItem === 'item5' ? '#3D52A0' : '' }}>Pages</NavLink>
                                    <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                                        <li class="dropdown_item-1"><a href="">Page 1</a></li>
                                        <li class="dropdown_item-2"><a href="">Page 2</a></li>
                                        <li class="dropdown_item-3"><a href="">Page 3</a></li>
                                        <li class="dropdown_item-4"><a href="">Page 4</a></li>
                                        <li class="dropdown_item-5"><a href="">Page 5</a></li>
                                    </ul>
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
                    <div className="noti">
                        <button className="notification_icons" onClick={openModal}>
                            <IoMdNotifications />
                        </button>
                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <div className="notification_modal_wrapper">
                                <h5>Notification</h5>

                                <div className="noti_content mt-3">
                                    <select
                                        value={notificationType}
                                        onChange={(e) => setNotificationType(e.target.value)}
                                    >
                                        <option value="normal">Notification</option>
                                        <option value="live">Live Notification</option>
                                    </select>
                                    <div className="notifications mt-3">
                                        {notifications.filter(notification => notification.type === notificationType).map(notification => (
                                            <div className="nav_notification_div" key={notification.id}>
                                                <div className="d-flex align-items-center">
                                                    <img src={notification.image} alt="" />
                                                    <div className="nav_notification_title ml-2">{notification.title}</div>
                                                </div>
                                                <p className='nav_notification_para'>{notification.message}</p>
                                                <div className="d-flex justify-content-between">
                                                    <div className='nav_noti_date'>{notification.date}</div>
                                                    <a href={notification.link} className='nav_noti_readMore'>Read More</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Modal>
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
                                <NavLink to="/contact-us">Contact Us</NavLink>
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
                                    <NavLink to="/contact-us">Contact Us</NavLink>
                                </div>
                            </div>
                        )
                }



            </div>
        </nav>
    )
}

export default Navbar
