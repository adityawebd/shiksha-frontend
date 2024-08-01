import React, { useEffect, useState } from 'react'
import './top10colleges.css'
import HeroBG from '../../assets/videos/college1-crop.mp4'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Top10CollegeCard from './Top10CollegeCard';
import axios from 'axios';



const Top10Colleges = () => {
    const [tabData, setTabData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://157.173.221.48:5000/api/top10colleges`)
                setTabData(response.data)

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
