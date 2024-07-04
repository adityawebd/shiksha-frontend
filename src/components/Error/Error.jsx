import React from 'react'
import Navbar from '../../Navbar'

const Error = () => {
  return (
    <div>
      <div className="error">
        <Navbar />

        <div className="error_wrapper bg_reddish">
            <h2>Page Not Found!</h2>
        </div>
      </div>
    </div>
  )
}

export default Error
