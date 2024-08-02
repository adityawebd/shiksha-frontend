import React, { useEffect, useState } from 'react'
import './top10colleges.css'
import HeroBG from '../../assets/videos/college1-crop.mp4'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Top10CollegeCard from './Top10CollegeCard';
import axios from 'axios';

import CollegeIMG from '../../assets/images/college_imgs.jpg'


import IIMCalcutta from '../../assets/images/TOP 10 Colleges/iim-calcuta.png'
import IIMKozhikode from '../../assets/images/TOP 10 Colleges/iim-kozhikode.png'
import IIMLucknow from '../../assets/images/TOP 10 Colleges/iim-lucknow.png'
import IIMA from '../../assets/images/TOP 10 Colleges/iima.png'
import IITBHU from '../../assets/images/TOP 10 Colleges/iit-bhu.png'
import IITBombay from '../../assets/images/TOP 10 Colleges/iit-bombay.png'
import IITDelhi from '../../assets/images/TOP 10 Colleges/iit-delhi.png'
import IITGuwa from '../../assets/images/TOP 10 Colleges/iit-guwa.png'
import IITHyd from '../../assets/images/TOP 10 Colleges/iit-hyd.png'
import IITKanpur from '../../assets/images/TOP 10 Colleges/iit-kanpur.png'
import IITMadras from '../../assets/images/TOP 10 Colleges/iit-madras.png'
import IITRoorkee from '../../assets/images/TOP 10 Colleges/iit-roorkee.png'
import IITKharagpur from '../../assets/images/TOP 10 Colleges/khrgpr.png'

const collegeImages = {
    "IIM Calcutta - Indian Institute of Management": IIMCalcutta,
    "IIM Kozhikode - Indian Institute of Management": IIMKozhikode,
    "IIM Lucknow - Indian Institute of Management": IIMLucknow,
    "IIMA - Indian Institute of Management": IIMA,
    "IIT BHU - Indian Institute of Technology - [IITBHU]": IITBHU,
    "IIT Bombay - Indian Institute of Technology - [IITB]": IITBombay,
    "IIT Delhi - Indian Institute of Technology [IITD]": IITDelhi,
    "IIT Guwahati - Indian Institute of Technology - [IITG]": IITGuwa,
    "IIT Hyderabad - Indian Institute of Technology - [IITH]": IITHyd,
    "IIT Kanpur - Indian Institute of Technology [IITK]": IITKanpur,
    "IIT Madras - Indian Institute of Technology - [IITM]": IITMadras,
    "IIT Roorkee - Indian Institute of Technology - [IITR]": IITRoorkee,
    "IIT Kharagpur - Indian Institute of Technology - [IITKGP]": IITKharagpur
};


const Top10Colleges = () => {
    const [tabData, setTabData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://157.173.221.48:5000/api/top10colleges`)
                setTabData(response.data)
                console.log(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);


    return (
        <section className="top10colleges pb-5">
            <div className="top10colleges_wrapper container">

                <h2 className='mb-4'>Top 10 Colleges</h2>

                <Tabs defaultActiveKey="BE/B.Tech" id="uncontrolled-tab-example" className="mb-3 tabs">


                    {tabData.map((info) => (
                        <Tab key={info._id} eventKey={info.eventkey} className={info.classname} title={info.title}>
                            {info.colleges.map((college, index) => (
                                <Top10CollegeCard
                                    key={index}
                                    id={college.college_name}
                                    imgSrc={collegeImages[college.college_name] || CollegeIMG} // Default to CollegeIMG if not found
                                    ranking={college.ranking}
                                    college_name={college.college_name}
                                    cut_off={college.cut_off}
                                    deadline={college.deadline}
                                    college_fees={college.college_fees}
                                />
                            ))}
                        </Tab>
                    ))}

                </Tabs>
            </div>
        </section>
    )
}

export default Top10Colleges
