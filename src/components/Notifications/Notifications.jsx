import React from 'react'
import './notifications.css'
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar';




const Notifications = () => {
    const { notificationName } = useParams();

    const contentPara = [
        {
            id: 1,
            para: "Indian Institute of Technology, Roorkee released the GATE syllabus for the 2025 examination at their website, gate2025.iitr.ac.in. Candidates can check and download the syllabus for all 30 subjects. Each of the papers consists of 100 marks. The Data Science and Artificial Intelligence (DA) syllabus was added in 2024 by IISc Bangalore."
        },
        {
            id: 2,
            para: "Along with each subject, candidates need to appear in the General Aptitude paper. The authority has set 85% weightage for the core subjects and 15% weightage in the General Aptitude (GA) paper. The GA paper includes topics of verbal, quantitative, analytical, and spatial aptitude. There is also a compulsory section of Engineering Mathematics in XE paper, Reasoning and Comprehension in XH, and Chemistry in XL paper."
        },
        {
            id: 3,
            para: "From 2024 onwards, a new two-paper combination has been introduced in GATE examination. According to this, students appearing for a particular paper can attempt other eligible papers as well. For example, students preparing for Agricultural Engineering (AG) paper, have the option to appear in the Civil Engineering (CE) syllabus as well. Read the article to get the list of eligible subjects for each paper."
        },
    ]

    return (
        <div>
            <div className="notification_page">
                <Navbar />

                <div className="contact_us_wrapper">
                    <div className="hero_notifications">
                        <h2>Notifications</h2>
                    </div>
                    <div className="container py-5">
                        <div className="d-flex align-items-center">
                            <img src="" alt="notification-image" className='main_noti_img' />
                            <div className="noti_page_title ml-2">{notificationName}</div>
                        </div>
                        <div className="noti_page_author mt-5">
                            <img src="" alt="author-image   " />
                            <div className='noti_page_author_content pl-3'>
                                <p>Rishav Upadhyay</p>{/* author name from backend */}
                                <small>Content Curator | Updated On - Aug 5, 2024</small> {/* change date and author desc here from backend */}
                            </div>
                        </div>

                        <div className="noti_page_latest_noti mt-3">
                            <h6>GATE Latest Notifications </h6>
                            <p><span>06 August, 2024 :</span> <a href="">GATE 2025 Registration To Start From August 24, Check Deadline Here</a></p>
                        </div>

                        <div className="noti_page_main_content_para mt-3">
                            {contentPara.map((data, index) => (
                                <p key={index}>{data.para}</p>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Notifications
