import React, { useState } from "react";
import './info.css'
import './table.css'

// icons import
import { IoIosNotifications } from "react-icons/io";
//image import
import AuthorIMG from '../../../../assets/images/college_imgs/college_logo.webp'


const InfoDynamic = () => {
    const [showMore, setShowMore] = useState(true);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

  return (
        <div className="info_section">
            {/* 1st section */}
            <div className="quick_updates">
                <div className="quick_updates_wrapper">
                    <h5>IIT Kharagpur Quick Updates</h5>
                    <p>IIT Kharagpur B.Tech Admission 2024 is based on JEE Advanced scores. The result of JEE Advanced for B.Tech admission at IIT Kharagpur will be released on June 09, 2024.  </p>
                    <p className="d-flex align-items-center"> 
                        <span className="mr-5">Other major updates of IIT Kharagpur are as follows:</span>
                        <button className="ml-5" onClick={toggleReadMore} id="myBtn"> {/* to toggle read more and less */}
                            {showMore ? "...Read more" : "Read less"}
                        </button>
                    </p>
                    <ul style={{ display: showMore ? "none" : "inline" }}>
                        <li>For the IIT Kharagpur M.Tech admission, the GATE COAP (Round 4) Seat Allotment will be released on June 2, 2024 (10 AM).</li>
                        <li>IIT Kharagpur JAM Cutoff 2024 Round 1 has been released for M.Sc course. Selected candidates must pay the online seat booking fee by June 4, 2024 (5 PM). Further, IIT JAM Round 2 admission list is expected to be out on June 12, 2024. (Tentatively). </li>
                        <li>UCEED 2024 Round 3 Seat Allotment for IIT Kharagpur admission to B.Des course will be announced on June 10, 2024.</li>
                    </ul>

                   

                    <div className="notification_div">
                        <div className="notification_div_wrapper">
                            <div className="notification_header">
                                <span><IoIosNotifications /></span>
                                <p>Notification</p>
                            </div>
                                <ul>
                                    <li>
                                        <span>31 May, 2024:</span> <a href="">JEE Advanced 2024 Result on June 9; Check Qualifying Cutoff for IITs Here</a>
                                    </li>
                                    <li>
                                        <span>31 May, 2024:</span> <a href=""> IIT Kharagpur MTech Registrations through COAP Portal on Basis of GATE 2024 Scores Open; Apply till June 30</a>
                                    </li>
                                    <li>
                                        <span>31 May, 2024:</span>  <a href="">IIT JAM First Admission List 2024 Out @jam.iitm.ac.in, Get Direct Link Here</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd section */}
            <div className="about_college">
                <div className="about_college_wrapper">
                    <h5>About IIT Kharagpur</h5>
                    <small>
                        <img src={AuthorIMG} alt="author-image" />
                        <p>Written By - <i>vidhi sharma</i> on, Jun 1, 2024</p>
                    </small>
                    <p>IIT Kharagpur was the first IIT to be established in 1951. IIT KGP is recognized as an Institute of National Importance, ranking 6th among the Top Engineering Colleges in India according to the NIRF 2023 report. Indian Institute of Technology, Kharagpur has 16,590+ students and 950+ staff members. The campus area of IIT Kharagpur is spread across 2100 acres. </p>
                    <p>IIT Kharagpur is popular for its 4-year B.Tech program offered via JEE Advanced score followed by JoSAA counselling. The B.Tech course is offered in 15 streams and the cutoff for B.Tech at IIT KGP ranges from 261 to 19542 for the general category students. IIT Kharagpur Fees is INR 2.24 Lakhs for the first-year B.Tech program.</p>
                    <p>IIT Kharagpur Placements 2024 (Second Phase) is over now and 6 students have already received an annual CTC exceeding INR 1 Crore. Some of the top recruiters of IIT KGP are Apple, Airbus, McKinsey, EXL Services, Google, DE Shaw, and others. </p>
                    <p>Indian Institute of Technology Kharagpur has collaborated with various international universities for Training Programs, Semester Exchange Programs, Joint Doctoral Programs, etc. The institute has signed 10 academic collaborations with organizations like ONGC Limited, Tata Medical Centre Kolkata, DRDO, etc. </p>
                </div>
            </div>

            {/* 3rd section */}
                <div className="highlights">
                <div className="highlights_wrapper">
                    <h5>IIT Kharagpur Highlights</h5>
                    <p>Some of the major highlights of IIT Kharagpur are as follows: </p>
                    <div className="table_wrapper">
                        <table>   {/* Table styling is in table.css */}
                            <thead> 
                                <tr>
                                    <th>Particulars </th>
                                    <th>IIT Kharagpur Highlights 2024 </th>   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Established Year	</td>
                                    <td>1951</td>
                                </tr>   
                                <tr>
                                    <td>Location	</td>
                                    <td>Kharagpur, West Bengal </td>
                                </tr>   
                                <tr>
                                    <td>Campus Area	</td>
                                    <td>2100 Acres</td>
                                </tr>   
                                <tr>
                                    <td>Institute Type	</td>
                                    <td>Public </td>
                                </tr>   
                                <tr>
                                    <td>NIRF Ranking 2023</td>
                                    <td>
                                        <ul>
                                            <li>Engineering: 6th</li>
                                            <li>Overall: 7th </li>
                                            <li>Architecture: 3rd</li>
                                            <li>Law: 9th </li>
                                        </ul>
                                    </td>
                                </tr>   
                                <tr>
                                    <td>Top Courses</td>
                                    <td>	B.Tech, M.Tech </td>
                                </tr>   
                                <tr>
                                    <td>Students</td>
                                    <td>16,590+</td>
                                </tr>   
                                <tr>
                                    <td>Faculty</td>
                                    <td>	760+</td>
                                </tr>   
                                <tr>
                                    <td>Staff</td>
                                    <td>950+</td>
                                </tr>   
                                <tr>
                                    <td>Official Website</td>
                                    <td><a href="https://www.iitkgp.ac.in/" target="_blank">https://www.iitkgp.ac.in/ </a></td>
                                </tr>      
                            </tbody> 
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default InfoDynamic
