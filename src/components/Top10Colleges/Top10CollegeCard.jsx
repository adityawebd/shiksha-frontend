import React from 'react'
import { NavLink } from 'react-router-dom'

const Top10CollegeCard = (props) => {
  return (
    <div data-aos="fade-up" className="top10college_card">
      <div data-aos="fade-up" className="ranking">
        <span>{props.ranking}</span>
      </div>
      <NavLink to={`/collegepage/${props.college_name}`} data-aos="fade-up" className="card_body">
        <ul>
          <li data-aos="fade-up">College</li>
          <li data-aos="fade-up">Cut Off</li>
          <li data-aos="fade-up">Application Deadline</li>
          <li data-aos="fade-up">Fees</li>
        </ul>
        <ul>
          <li data-aos="fade-up" className='college_name'>{props.college_name}</li>
          <li data-aos="fade-up" className='cut_offf'>{props.cut_off}</li>
          <li data-aos="fade-up" className='deadline'>{props.deadline}</li>
          <li data-aos="fade-up">
            {props.college_fees}
            <span>1st Year Fees</span>
          </li>
        </ul>
      </NavLink>
    </div>
  )
}

export default Top10CollegeCard
