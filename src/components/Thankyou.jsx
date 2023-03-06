import React, { useEffect } from 'react'
import "../styles/Thankyou.css";
import ReactGA from 'react-ga';


const Thankyou = () => {
  useEffect(()=>{
    ReactGA.initialize('AW-11099289492');
    ReactGA.pageview(window.location.pathname + window.location.search);

  })
  return (
    <div className="thankyou_body">
        <h2>Thank You for submitting the form.</h2>
        <div>
            <a href="/">Go to Home</a>
        </div>
        
    </div>
  )
}

export default Thankyou