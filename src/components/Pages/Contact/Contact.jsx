import React, { useState } from 'react'
import './contact.css'
import Navbar from '../../../Navbar'

import ContactSVG from '../../../assets/images/contact.svg'

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";



const Contact = () => {

    // / State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // State to hold form submission status
    const [formStatus, setFormStatus] = useState('');

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to validate form data
    const validateForm = () => {
        const { name, email } = formData;

        if (name.length < 3 || name.length > 50) {
            return 'Name must be between 3 and 50 characters.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return 'Please enter a valid email address ending in .com.';
        }

        return null;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        const error = validateForm();
        if (error) {
            setFormStatus(error);
            return;
        }

        // Log the form data to the console
        console.log('Form Data:', formData);

        // Set form status (for demo purposes)
        setFormStatus('Form submitted successfully!');

        // Clear the form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        // Reset the form status after a while
        setTimeout(() => {
            setFormStatus('');
        }, 3000);

        // In a real application, you would send the form data to your backend here
        // Example: await axios.post('/api/form', formData);
    };
    return (
        <div>
            <div className="contact_us">
                <Navbar />

                <div className="contact_us_wrapper">
                    <div className="hero_contact_us">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="container py-5">
                        <div className="row contact_us_main">
                            <div className="contact_form col-md-6 col-lg-6 col-sm">
                                <h3>Get in Touch</h3>
                                <p>We are here for you! How can we help?</p>

                                <form onSubmit={handleSubmit} className="form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder='Enter you name'
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder='Enter you email'
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder='Enter you mobile no.'
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder='Go ahead, we are listening...'
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit">Submit</button>

                                    {formStatus && <p className="form-status">{formStatus}</p>}
                                </form>
                            </div>
                            <div className="contact_details col-md-6 col-lg-6 col-sm">
                                <figure>
                                    <img src={ContactSVG} alt="contact-svg" />
                                </figure>
                                <div className="details mt-5">
                                    <div className="items">
                                        <span> <FaLocationDot />  </span>
                                        <p>

                                            AHIKSHA HELPLINE
                                            XTH Floor,  Xyz Tower, XYZ Place
                                            New Delhi, Delhi, 110058
                                        </p>
                                    </div>
                                    <div className="items">
                                        <span> <IoCall /> </span>
                                        <p>
                                            <a href="">+91 123 456 7890</a>
                                        </p>
                                    </div>

                                    <div className="items">
                                        <span> <IoIosMail /> </span>
                                        <p>
                                            <a href="">contact@shiksha-helpline.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map_integration">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.748683318805!2d77.1513475!3d28.691526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0302948a64a9%3A0xb00c6662e07ddf21!2sRapid%20Digital%20Growth%20-%20Best%20Digital%20Marketing%20Agency%20in%20Delhi!5e0!3m2!1sen!2sin!4v1719922569450!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            // style="border:0;"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
