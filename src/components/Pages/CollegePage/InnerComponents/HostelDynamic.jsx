import React from 'react'
import './hostel.css'

const HostelDynamic = () => {


  const fixedData = [
    {
      id: 1,
      page_title: "IIT Kharagpur Gallery",

    },
  ]
  return (
    <div className="hostel_section">
      <div className="hostel_section_wrapper">

        {/* 1st section */}
        <div className="hostel_div">
          <div className="header"></div>
        </div>
      </div>
    </div>
  )
}

export default HostelDynamic
