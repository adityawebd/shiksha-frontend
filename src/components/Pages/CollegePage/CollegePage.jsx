import React, {useState,useEffect} from 'react'
import './collegepage.css'
import Navbar from '../../../Navbar'
// import Footer from '../../Footer/Footer.jsx'
import { useParams, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import collegeLOGO from '../../../assets/images/college_imgs/college_logo.webp'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import CollegeIMG from '../../../assets/images/college_imgs.jpg' //college img
import Info from './InnerComponents/Info.jsx'
import Courses from './InnerComponents/Courses.jsx'
import Admission from './InnerComponents/Admission.jsx'
import Reviews from './InnerComponents/Reviews.jsx'
import Department from './InnerComponents/Department.jsx'
import CutOff from './InnerComponents/CutOff.jsx'
import Placement from './InnerComponents/Placement.jsx'
import Ranking from './InnerComponents/Ranking.jsx'
import Gallery from './InnerComponents/Gallery.jsx'
import Scholarship from './InnerComponents/Scholarship.jsx'
import Faculty from './InnerComponents/Faculty.jsx'
import NewsArticles from './InnerComponents/NewsArticles.jsx'
import Hostel from './InnerComponents/Hostel.jsx'
import CollegeCompare from './InnerComponents/CollegeCompare.jsx'
import axios from 'axios';

const CollegePage = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const { collegeName } = useParams();
 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  useEffect(() => {
    const fetchData = async () => {
        try {
          
            const srver = process.env.REACT_APP_SERVER;
            console.log("server data is ",srver)
            const response = await axios.get(`${srver}:5000/api/collegelist/`+collegeName) //localhost
            
            setData(response.data)

        }
        catch (error) {
            console.log(error)
        }
    }
    fetchData()
}, []);


console.log("data for upper navifation",data)
  return (

    <div className='college_page_responsive'>
      
        <section className="collegepage_section">
          <figure className='college_img'>
            <img src={CollegeIMG} alt="" />
          </figure>
          <Navbar />

          {data.map((data,index) =>(
          <div className="collegepage_section_wrapper" key={index}>
            <div className="collegepage_section_about">
              {/* ----- left div ---- */}
              <div className="college_about_body">
                <div className="college_about_body_head">
                  <img src={data.collageIcon[data.collageIcon.length-1]} alt="college-logo" />
                  <div className="body">
                    <h4> {collegeName}</h4>
                    <h5>{data.shortDiscription}</h5>
                    <div className="body_points">
                      <p>{data.shortAddress}</p>
                      <p>
                        <span><FaRegNewspaper /></span>
                        {data.universitytype}
                      </p>
                      <p>
                        <span><FaCalendarAlt /></span>
                        {data.Estd}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="college_about_body_foot"></div>
              </div>
              {/* ----- right div ---- */}
              <div className="college_about_footer">
                <div className="rating">
                  <h2 className="number">{data.rating}</h2>
                  <div className="reviews">
                    <div className="star_box">
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                    </div>
                    <div className="no_of_reviews">(74 Reviews)</div>
                  </div>
                </div>

                <div className="will_you_get_btn">
                  <NavLink href="">Will You get In</NavLink>
                </div>

                <div className="will_you_get_btn">
                  <NavLink href="">Get Contact Details</NavLink>
                </div>
                <NavLink className="claim_this_college">
                  <span><GoDotFill /></span>
                  <p>Claim this college</p>
                  <div className="claim_this_college_tooltip">
                    <ul>
                      Claim this college if you are:
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                </NavLink>
                
              </div>
            </div>
          </div>
          ))}

        </section>
        

        {/* -- tab ---- */}
        <section className="collegepage_content">
          <div className="collegepage_tab_wrapper">
                {/* <div className="col-md-2 mb-3 sidebar"> */}
                <div className="sidebar-toggler" onClick={toggleSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <div className={`col-md-2 mb-3 sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <ul className="nav nav-pills flex-column" id="experienceTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">
                            <span> </span> Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="courses-tab" data-toggle="tab" href="#courses" role="tab" aria-controls="courses" aria-selected="false">
                            <span></span> Courses & Fees</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" id="distance-edu-tab" href={`/collegepage/${collegeName}/distance-education/`}>
                            <span></span> Distance Education</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" id="admission-tab" data-toggle="tab" href="#admission" role="tab" aria-controls="admission" aria-selected="false">
                            <span></span> Admission 2024</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
                            <span></span> Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="department-tab" data-toggle="tab" href="#department" role="tab" aria-controls="department" aria-selected="false">
                            <span></span> Department</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="cutoff-tab" data-toggle="tab" href="#cutoff" role="tab" aria-controls="cutoff" aria-selected="false">
                            <span></span> CutOff</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="placement-tab" data-toggle="tab" href="#placement" role="tab" aria-controls="placement" aria-selected="false">
                            <span></span> Placement</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="ranking-tab" data-toggle="tab" href="#ranking" role="tab" aria-controls="ranking" aria-selected="false">
                            <span></span> Ranking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="gallery-tab" data-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false">
                            <span></span> Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="scholarship-tab" data-toggle="tab" href="#scholarship" role="tab" aria-controls="scholarship" aria-selected="false">
                            <span></span> Scholarship</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="faculty-tab" data-toggle="tab" href="#faculty" role="tab" aria-controls="faculty" aria-selected="false">
                            <span></span> Faculty</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="newsArticles-tab" data-toggle="tab" href="#newsArticles" role="tab" aria-controls="newsArticles" aria-selected="false">
                            <span></span> News & Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="hostel-tab" data-toggle="tab" href="#hostel" role="tab" aria-controls="hostel" aria-selected="false">
                            <span></span> Hostel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="collegeCompare-tab" data-toggle="tab" href="#collegeCompare" role="tab" aria-controls="collegeCompare" aria-selected="false">
                            <span></span> College Compare</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="q&a-tab" href={`/collegepage/${collegeName}/qna/`}>
                            <span></span> Q&A</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- /.col-md-4 --> */}
                <div className="col-md-10">
                    <div className="tab-content" id="experienceTabContent">

                        <div className="tab-pane fade show active text-left text-light" id="info" role="tabpanel" aria-labelledby="info-tab">
                            <Info />
                        </div>

                        <div className="tab-pane fade text-left text-light" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                            <Courses />
                        </div>

                        <div className="tab-pane fade text-left text-light" id="distance-edu" role="tabpanel" aria-labelledby="distance-edu-tab">
                            {/* <ExploreStudy /> */}
                        </div>
                        <div className="tab-pane fade text-left text-light" id="admission" role="tabpanel" aria-labelledby="admission-tab">
                            <Admission />
                        </div>

                        <div className="tab-pane fade text-left text-light" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <Reviews />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="department" role="tabpanel" aria-labelledby="department-tab">
                            <Department />
                        </div>

                        <div className="tab-pane fade text-left text-light" id="cutoff" role="tabpanel" aria-labelledby="cutoff-tab">
                            <CutOff />
                        </div>
                        
                        <div className="tab-pane fade text-left text-light" id="placement" role="tabpanel" aria-labelledby="placement-tab">
                            <Placement />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="ranking" role="tabpanel" aria-labelledby="ranking-tab">
                            <Ranking />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                            <Gallery />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="scholarship" role="tabpanel" aria-labelledby="scholarship-tab">
                            <Scholarship />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="faculty" role="tabpanel" aria-labelledby="faculty-tab">
                            <Faculty />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="newsArticles" role="tabpanel" aria-labelledby="newsArticles-tab">
                            <NewsArticles />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="hostel" role="tabpanel" aria-labelledby="hostel-tab">
                            <Hostel />
                        </div>
                        <div className="tab-pane fade text-left text-light" id="collegeCompare" role="tabpanel" aria-labelledby="collegeCompare-tab">
                            <CollegeCompare />
                        </div>
                    </div>
                    {/* <!--tab content end--> */}
                </div>
                {/* <!-- col-md-8 end --> */}
          </div>
        </section>

        {/* <Footer /> */}
    </div>
  )
}

export default CollegePage
