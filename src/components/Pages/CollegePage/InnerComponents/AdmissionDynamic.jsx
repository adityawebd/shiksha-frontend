import React, { useEffect, useState } from 'react';
import './admission.css';
import { FaSearch } from "react-icons/fa";
import DecisionICON from '../../../../assets/images/decision.png'
import axios from 'axios';

const AdmissionDynamic = () => {



    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [datas, setData] = useState([])

    

    // const items = [
    //     {
    //         id: 1,
    //         name: 'B.tech',
    //         className: 'be_btech',         // This classname will be changed according to the button class and filterSelection in all the array
    //         h5_1: 'Important Events',

    //         importantEventsTableData: [
    //             {
    //                 event_name: 'Declaration of Second Admission List [IIT JAM]',
    //                 event_tag: 'Upcoming',
    //                 event_date: 'Jun 12, 2024'
    //             },
    //             {
    //                 event_name: 'Display of Mock Seat Allocation 1 [JoSAA Counselling] [B.Tech]',
    //                 event_tag: 'Tentaive',
    //                 event_date: 'Jun 18, 2024'
    //             },
    //             {
    //                 event_name: 'Display of Mock Seat Allocation 1 [JoSAA Counselling] [B.Tech]',
    //                 event_tag: 'Ongoing',
    //                 event_date: 'Jun 18, 2024'
    //             },
    //         ],

    //         h5_2: 'Expired Events',
    //         expiredEventsTableData: [
    //             {
    //                 event_name: 'CAT 2023 Result Date',
    //                 event_date: 'Dec 21, 2023'
    //             },
    //             {
    //                 event_name: 'JEE-Advanced counselling',
    //                 event_date: 'Jan 10, 2024'
    //             },
    //             {
    //                 event_name: 'CAT 2023 Exam Date',
    //                 event_date: 'Nov 26, 2023'
    //             },
    //         ],


    //         cutOffData: [
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "124",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //         ],

    //     },















    //     {
    //         id: 2,
    //         name: 'M.tech',
    //         // This classname will be changed according to the button class and filterSelection in all the array
    //         className: 'msc', // This classname will be changed according to the button class and filterSelection in all the array
    //         h5_1: 'Important Events',
    //         importantEventsTableData: [
    //             {
    //                 event_name: 'Declaration of Second Admission List [IIT JAM]',
    //                 event_tag: 'Upcoming',
    //                 event_date: 'Jun 01, 2024'
    //             },
    //             {
    //                 event_name: 'Last Date for Online Payment of Seat Booking Fee for Second Admission List [IIT JAM]',
    //                 event_tag: 'Ongoing',
    //                 event_date: 'Jun 25, 2024'
    //             },
    //         ],
    //         h5_2: 'Expired Events',
    //         expiredEventsTableData: [
    //             {
    //                 event_name: 'Last Date for Online Payment of Seat Booking Fee for First Admission List [IIT JAM]',
    //                 event_date: 'Jun 04, 2024'
    //             },
    //             {
    //                 event_name: 'Declaration of First Admission List [IIT JAM]',
    //                 event_date: 'May 31, 2024'
    //             },
    //             {
    //                 event_name: 'IIT-JAM counselling',
    //                 event_date: 'Apr 10, 2024 - Apr 29, 2024'
    //             },
    //         ],
    //         cutOffData: [
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //         ],

    //     },

    //     {
    //         id: 3,
    //         name: 'M.tech',
    //         className: 'me_mtech', // This classname will be changed according to the button class and filterSelection in all the array
    //         h5_1: 'Important Events',
    //         importantEventsTableData: [
    //             {
    //                 event_name: 'Declaration of Second Admission List [IIT JAM]',
    //                 event_tag: 'Upcoming',
    //                 event_date: 'Jun 12, 2024'
    //             },
    //             {
    //                 event_name: 'Display of Mock Seat Allocation 1 [JoSAA Counselling] [B.Tech]',
    //                 event_tag: 'Ongoing',
    //                 event_date: 'Jun 18, 2024'
    //             },
    //         ],
    //         h5_2: 'Expired Events',
    //         expiredEventsTableData: [
    //             {
    //                 event_name: 'CAT 2023 Result Date',
    //                 event_date: 'Dec 21, 2023'
    //             },
    //             {
    //                 event_name: 'JEE-Advanced counselling',
    //                 event_date: 'Jan 10, 2024'
    //             },
    //             {
    //                 event_name: 'CAT 2023 Exam Date',
    //                 event_date: 'Nov 26, 2023'
    //             },
    //         ],
    //         cutOffData: [
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "124",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //         ],

    //     },

    //     {
    //         id: 4,
    //         name: 'MA',
    //         className: 'ma',  // This classname will be changed according to the button class and filterSelection in all the array
    //         h5_1: 'Important Events',
    //         importantEventsTableData: [
    //             {
    //                 event_name: 'Declaration of Second Admission List [IIT JAM]',
    //                 event_tag: 'Upcoming',
    //                 event_date: 'Jun 01, 2024'
    //             },
    //             {
    //                 event_name: 'Last Date for Online Payment of Seat Booking Fee for Second Admission List [IIT JAM]',
    //                 event_tag: 'Ongoing',
    //                 event_date: 'Jun 25, 2024'
    //             },
    //         ],
    //         h5_2: 'Expired Events',
    //         expiredEventsTableData: [
    //             {
    //                 event_name: 'Last Date for Online Payment of Seat Booking Fee for First Admission List [IIT JAM]',
    //                 event_date: 'Jun 04, 2024'
    //             },
    //             {
    //                 event_name: 'Declaration of First Admission List [IIT JAM]',
    //                 event_date: 'May 31, 2024'
    //             },
    //             {
    //                 event_name: 'IIT-JAM counselling',
    //                 event_date: 'Apr 10, 2024 - Apr 29, 2024'
    //             },
    //         ],
    //         cutOffData: [
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //         ],

    //     },

    //     {
    //         id: 5,
    //         name: 'M.Phill in Arts',
    //         className: 'mphil_arts',  // This classname will be changed according to the button class and filterSelection in all the array
    //         h5_1: 'Important Events',
    //         importantEventsTableData: [
    //             {
    //                 event_name: 'Declaration of Second Admission List [IIT JAM]',
    //                 event_tag: 'Upcoming',
    //                 event_date: 'Jun 12, 2024'
    //             },
    //             {
    //                 event_name: 'Display of Mock Seat Allocation 1 [JoSAA Counselling] [B.Tech]',
    //                 event_tag: 'Ongoing',
    //                 event_date: 'Jun 18, 2024'
    //             },
    //         ],
    //         h5_2: 'Expired Events',
    //         expiredEventsTableData: [
    //             {
    //                 event_name: 'CAT 2023 Result Date',
    //                 event_date: 'Dec 21, 2023'
    //             },
    //             {
    //                 event_name: 'JEE-Advanced counselling',
    //                 event_date: 'Jan 10, 2024'
    //             },
    //             {
    //                 event_name: 'CAT 2023 Exam Date',
    //                 event_date: 'Nov 26, 2023'
    //             },
    //         ],
    //         cutOffData: [
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //             {
    //                 title: "IIT Madras, JEE Advanced Cutoff 2023",
    //                 para: "IIT Madras, JEE Advanced Cutoff 2023 for General Category is listed below. The overall cutoff rank for JEE Advanced is 144 - 10060 for round 1.",
    //                 cutOffDataTable: [
    //                     {
    //                         courses: "B.Tech Computer Science Engineering",
    //                         cutoff_2023: "144",
    //                         cutoff_2022: "167",
    //                         cutoff_2021: "163",
    //                         cutoff_2020: "157",
    //                     },
    //                     {
    //                         courses: "B.Tech Electrical Engineering",
    //                         cutoff_2023: "908",
    //                         cutoff_2022: "985",
    //                         cutoff_2021: "1007",
    //                         cutoff_2020: "818",
    //                     }
    //                 ],
    //                 exam_name: "JEE Advanced",
    //                 year: "2023"
    //             },
    //         ],

    //     },

    // ];








    const filterSelection = (filter) => {
        setFilter(filter);
    };

    const handleCutOffFilterChange = (e) => {
        setSearchQuery(e.target.value.toUpperCase());
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/admissions`)
                setData(response.data)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, []);

    console.log("data is ", datas)

    return (
        <div className="admission_section">
            <div className="upcoming_application">
                <div className="upcoming_application_wrapper">
                    <h5>IIT Kharagpur Upcoming Application Dates 2024</h5>

                    <div id="filterBtnWrapper" >

                        <button

                            className={`btn ${filter === "All" ? 'active' : ''}`}
                            onClick={() => filterSelection('all')}
                        >
                            All
                        </button>

                        {datas.map(info => (
                            <button
                                key={info.id}
                                className={`btn ${filter === info.className ? 'active' : ''}`}
                                onClick={() => filterSelection(info.className)}
                            >
                                {info.name}
                            </button>
                        ))}


                    </div>





                    <div className="filterContentWrapper">
                        {datas.map(item => (
                            <div
                                key={item.id}
                                className={`filterDiv ${item.className.split(' ').some(c => filter === 'all' || filter === c) ? 'show' : ''}`}
                            >
                                <h5 className='mt-4'>{item.h5_1}</h5>
                                <div className="table_wrapper width_50">
                                    {item.importantEventsTableData && (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Events</th>
                                                    <th>Dates</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.importantEventsTableData.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row.event_name}</td>
                                                        <td>
                                                            <div className={`upcoming ${row.event_tag === 'Upcoming' ? 'upcoming' : row.event_tag === 'Ongoing' ? 'ongoing' : 'tentative'}`}>
                                                                <small>{row.event_tag}</small>
                                                            </div>
                                                            <p>{row.event_date}</p>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>

                                <h5 className='mt-4'>{item.h5_2}</h5>
                                <div className="table_wrapper width_50">
                                    {item.expiredEventsTableData && (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Events</th>
                                                    <th>Dates</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.expiredEventsTableData.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row.event_name}</td>
                                                        <td>
                                                            <p>{row.event_date}</p>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>

                                <div className="cut_off">
                                    <div className="cut_off_wrapper">
                                        <h5>IIT Kharagpur Cutoff 2024</h5>

                                        {/* search filter */}
                                        <div className="cut_off_search">
                                            <div className="search_input">
                                                <span><FaSearch /></span>
                                                <input
                                                    type="text"
                                                    id="myInput"
                                                    onChange={handleCutOffFilterChange}
                                                    placeholder="Search College Cutoff..."
                                                    title="Type in a name"
                                                />
                                            </div>
                                            <ul id="myUL">
                                                <div className="cut_off_card_container">
                                                    {item.cutOffData.length > 0 ? (
                                                        item.cutOffData.filter(cutoff => cutoff.title.toUpperCase().includes(searchQuery)).map((cutoff, index) => (
                                                            <li key={index} className="cut_off_card">
                                                                <h5>{cutoff.title}</h5>
                                                                <div className="cut_off_card_content">
                                                                    <p>{cutoff.para}</p>

                                                                    {/* table */}
                                                                    <div className="table_wrapper">
                                                                        {item.expiredEventsTableData && (
                                                                            <table>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Courses</th>
                                                                                        <th>2023</th>
                                                                                        <th>2022</th>
                                                                                        <th>2021</th>
                                                                                        <th>2020</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {cutoff.cutOffDataTable.map((row, index) => (
                                                                                        <tr key={index}>
                                                                                            <td>
                                                                                                {row.courses}
                                                                                                <div className="compare_div">
                                                                                                    <input type="button" value="Comapre" />
                                                                                                    <img src={DecisionICON} alt="" />
                                                                                                </div>
                                                                                            </td>
                                                                                            <td>{row.cutoff_year1}</td>
                                                                                            <td>{row.cutoff_year2}</td>
                                                                                            <td>{row.cutoff_year3}</td>
                                                                                            <td>{row.cutoff_year4}</td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </tbody>
                                                                            </table>
                                                                        )}
                                                                    </div>
                                                                    <div className="view_exam_btn">
                                                                        <input type="button" value={`View ${cutoff.exam_name} ${cutoff.year} Cutoff`} />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <div className="no_results_message">No results found.</div>
                                                    )}
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdmissionDynamic;
