import React from 'react' 

import CollectionIMG from '../../assets/images/topcollection/college1.jpg'
import College1 from '../../assets/images/topcollection/collegelogo1.webp'
import College2 from '../../assets/images/topcollection/collegelogo2.gif'
import College3 from '../../assets/images/topcollection/collegelogo3.webp'

const TopCollectionCard = (props) => {
  return (
    <div className='img_wrapper'>
        <img className='img_wrapper_bg' src={CollectionIMG} alt='top-collection-img' />
        {/* <div className="overlay1"></div> */}
        <div className="img_wrapper_container">
            <div className="img_wrapper_body">
                <h5  data-aos="fade-up">{props.college_name}</h5>
                <div data-aos="fade-up" className='small_colleges_icon'>
                    <img src={College1} alt="" />
                    <img src={College2} alt="" />
                    <img src={College3} alt="" />
                    <p>+ {props.noofcoolleges} more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCollectionCard
