import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Service = () => {
  return (
    <>
    <div className="service">
      <div className='serviceContent'>
        <div className="empower">
          <div>
            <h3>YOUTH EMPOWERING SERVICE </h3>
          </div>
          <div className="line">
            <div className="circle"></div>
            <div className="circleLine"></div>
          </div>
          <div>
            <p>In India, the Telugu speaking states of Andhra Pradesh and Telangana consist of almost 85 million people of which a vast majority are young. Most of the youth living in rural, semi-urban and urban slum areas encounter the harsh realities of poverty, lack of education, unemployment, casteism, gender discrimination and social inequality. We exist to bring social, psychological, spiritual and practical help to young people in need, irrespective of their caste, religion and social background.In India, the Telugu speaking states of Andhra Pradesh and Telangana consist of almost 85 million people of which a vast majority are young. Most of the youth living in rural, semi-urban and urban slum areas encounter the harsh realities of poverty, lack of education, unemployment, casteism, gender discrimination and social inequality. We exist to bring social, psychological, spiritual and practical help to young people in need, irrespective of their caste, religion and social background. </p>
          
          </div>
        
        </div>
        <div className="goal">
          <div className="social">
            <img src="https://yesj.org/assets/images/h1.png" height="65px" width="67px"/>
          </div>
          <div className="socialContent">
            <h2>OUR GOAL</h2>
            <p>To reform our youth to be men and women of Conscience, Compassion, Competence and Commitment and be active agents of change in the society they live in. <a href="#">Read more <AiOutlineArrowRight/></a></p>
          </div>

        </div>
        <div className="approach">
          <div className="social">
            <img src="https://yesj.org/assets/images/h2.png" height="65px" width="67px"/>
          </div>
          <div className="socialContent">
            <h2>OUR APPROACH</h2>
            <p>At YES-J, we value RELATIONSHIPS. We, along with our target groups, want to have a vital relationship with God and His creation. <a href="#">Read more <AiOutlineArrowRight/></a></p>
          </div>

        </div>
        <div className="roots">
          <div className="social">
            <img src="https://yesj.org/assets/images/h3.png" height="65px" width="67px"/>
          </div>
          <div className="socialContent">
            <h2>OUR ROOTS</h2>
            <p>We are a part of the Society of Jesus, popularly known as Jesuits, which is an international Religious Order of men within the Catholic Church. <a href="#">Read more <AiOutlineArrowRight/></a></p>
          </div>

        </div>
      </div>


      {/* image section */}
      <div className='serviceImage'>
        <NavLink to="/Template"><img src="https://i.pinimg.com/originals/5d/4c/4b/5d4c4b8ab77511a2ae6af6c862dcdc6a.png" width="90%" style={{margin:"auto"}} height="300px"  className="img1"/></NavLink>
        <NavLink to="/Template"><img src="https://cdn-images.zety.com/pages/modern_resume_templates_011.jpg" width="95%" height="300px" className="img2"/></NavLink>
      </div>

    </div>
      
    </>
  )
}

export default Service;