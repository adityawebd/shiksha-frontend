import React from 'react'
import './hostel.css'
import ReviewDynamic from './ReviewsDynamic'

const HostelDynamic = () => {

  return (
    <div className="hostel_section">
      <div className="hostel_section_wrapper">

        {/* 1st section */}
        <div className="hostel_div">
          <div className="header">
            <h5> IIT Kharagpur Hostel For Male </h5>
            <div className="fee">Fee: ₹24,180</div>
          </div>
          <ul>
            <li>Hostel Overhead - Rs. 880</li>
            <li>Hall Establishment Charges - Rs. 18300</li>
            <li>Mess Charges - Rs. 14000</li>
            <li>Hostel Admission Fee – Rs.1000</li>
            <li>Hostel Caution Deposit – Rs 4000</li>
          </ul>
        </div>

        <div className="hostel_div mt-3">
          <div className="header">
            <h5> IIT Kharagpur Hostel For Male </h5>
            <div className="fee">Fee: ₹24,180</div>
          </div>
          <ul>
            <li>Hostel Overhead - Rs. 880</li>
            <li>Hall Establishment Charges - Rs. 18300</li>
            <li>Mess Charges - Rs. 14000</li>
            <li>Hostel Admission Fee – Rs.1000</li>
            <li>Hostel Caution Deposit – Rs 4000</li>
          </ul>
        </div>

      </div>

      <div className="mt-3"></div>
      <ReviewDynamic />
    </div>
  )
}

export default HostelDynamic
