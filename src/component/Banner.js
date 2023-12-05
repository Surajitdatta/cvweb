import React from 'react'
import { NavLink } from 'react-router-dom';
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="bannerInner">
            <div className="bannerImg">
                <img src="https://yesj.org/assets/images/group-3.jpg" height="300px" width="100%" />

            </div>
            <div className="bannerContent">
                <h2>BECOME A VOLUNTEER</h2>
                <p>Our Voluntary Immersion Programme enables you to challenge yourself, experience another culture and develop an attitude of being grateful.</p>
                <br/>
                <p><b>Come and immerse yourself to change your world.</b></p>
                <NavLink to="/Sign"><button className="btnn">SIGN-UP NOW</button></NavLink><br/>
                <i>Already sign up? <NavLink to="/SignIn">Sign in</NavLink></i>
            </div>
           
        </div>

      </div>
    </>
  )
}

export default Banner;