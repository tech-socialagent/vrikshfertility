import React from 'react'
import "../styles/Pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className='pagenotfound'>
        <h1>OOPS!</h1>
        <h3>404 -  THE PAGE CAN'T BE FOUND</h3>
        <a href="/" className="gotohome">GO TO HOMEPAGE</a>
    </div>
  )
}

export default PageNotFound