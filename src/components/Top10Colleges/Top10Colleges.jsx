import React from 'react'
import './top10colleges.css'
import HeroBG from  '../../assets/videos/college1-crop.mp4'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Top10CollegeCard from './Top10CollegeCard';

const Top10Colleges = () => {
  return (
    <section className="top10colleges pb-5">
        <div className="top10colleges_wrapper container">
            {/* <video autoPlay loop muted playsInline class="top10colleges_video_bg">
                <source src={HeroBG} type="video/mp4" />
            </video> */}
            <h2 className='mb-4'>Top 10 Colleges</h2>
            
            <Tabs
                defaultActiveKey="BCA"
                id="uncontrolled-tab-example"
                className="mb-3 tabs"
            >
                <Tab eventKey="BE/B.Tech" className='tab' title="BE/B.Tech">
                    <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="7" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="8" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="ME/M.Tech" className='tab' title="ME/M.Tech">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="BCA" className='tab' title="BCA">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="7" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="8" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="MCA" className='tab' title="MCA">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="8" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="BCOM" className='tab' title="BCOM">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="7" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="xyz" className='tab' title="xyz">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="7" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="8" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="abc" className='tab' title="abc">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="7" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="8" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="lps" className='tab' title="lps">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="8" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
                <Tab eventKey="mno" className='tab' title="mno">
                <Top10CollegeCard ranking="1" college_name="IIT Madras - Indian Institute of Technology - [IITM]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="2" college_name="IIT Kharagpur - Indian Institute of Technology - [IITKGP]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="3" college_name="IIMA - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="4" college_name="IIM Bangalore - Indian Institute of Management" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="5" college_name="IIT Delhi - Indian Institute of Technology [IITD]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                    <Top10CollegeCard ranking="6" college_name="IIT Bombay - Indian Institute of Technology - [IITB]" cut_off="CAT 2023 Cut off 85" deadline="Mar - 31 Mar 2024" college_fees="₹209,550 " />
                </Tab>
            </Tabs>
        </div>
    </section>
  )
}

export default Top10Colleges
