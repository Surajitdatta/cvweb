
import Button from 'react-bootstrap/Button';
import cv1 from "./cv1.png";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sign from './Sign';
import Expcv from './Expcv';
const Template = (props) => {
  const navigate = useNavigate();
  const myData = localStorage.getItem('myName');
 
  const validation=()=>{
    myData.length===0?navigate("/Sign"): navigate("/Form");
    
  }
  const validation1=()=>{
    myData.length===0?navigate("/Sign"): navigate("/Expcv");
    
  }
 
  return (
    <>
      <div className="template">
        <div className="template-h1">
          <h1><b>Job-winning template</b></h1>

        </div>
        <div className="template-i">
        <i><p>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p></i>
        <Button variant="primary" onClick={validation}>Create my resume</Button>

        </div>
        <div className="temp-pic1">
          <div className="cv">
         
          <img src="https://i.pinimg.com/originals/d0/3f/08/d03f08807280eb77c093fc278215fc39.jpg" height="350px" width="100%" onClick={validation}/>
          
          </div>
          <div className="cv">
          <img src="https://i.pinimg.com/originals/d0/3f/08/d03f08807280eb77c093fc278215fc39.jpg" height="350px" width="100%" onClick={validation1}/>

          </div>
          <div className="cv">
          <img src="https://i.pinimg.com/originals/d0/3f/08/d03f08807280eb77c093fc278215fc39.jpg" height="350px" width="100%" onClick={validation}/>

          </div>
          
          {/* <img src="https://i.pinimg.com/originals/d0/3f/08/d03f08807280eb77c093fc278215fc39.jpg" height="400px" width="30%"/>
          <img src="https://i.pinimg.com/originals/d0/3f/08/d03f08807280eb77c093fc278215fc39.jpg" height="400px" width="30%"/> */}
        </div>

        
        
      </div>








      
      
      
    </>
  )
}

export default Template;