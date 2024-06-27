import React from 'react'

import ExamCardBg from '../../assets/images/TopExam/neet.jpeg'
import ExamLogo from '../../assets/images/TopExam/neet-logo.webp'

const TopExamsCard = (props) => {
  return (
    <div className='img_wrapper topexam_card'>
        <article class="card">
            <header class="card__thumb">
                <a href="#">
                    <img src={ExamCardBg} alt='' />
                </a>
            </header>
            <date class="card__date">
                <img src={ExamLogo} alt="" />
            </date>
            <div class="card__body">
                <div class="card__category"><a href="#">{props.organization}</a></div>
                <ul>
                    <li>
                        <div className="right_side">Participating Colleges</div>
                        <div className="left_side">{props.participating_colleges}</div>
                    </li>
                    <li>
                        <div className="right_side">Exam Date</div>
                        <div className="left_side"> {props.exam_date}</div>
                    </li>
                    <li>
                        <div className="right_side">Exam Level</div>
                        <div className="left_side">{props.exam_level} </div>
                    </li>
                </ul>
                <div className="card__buttons">
                    <a href={props.application_process_link}>Application Process</a>
                    <a href={props.exam_info_link}>Exam Info</a>
                </div>
            </div>
        </article>
    </div>
  )
}

export default TopExamsCard
