import React from 'react'
import { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import "./formCv.css";
import "./Expformcv.css";
import { Link } from 'react-router-dom';
const Expformcv = (props) => {
    
    const name = localStorage.getItem('cvName');
    const state = localStorage.getItem('cvState');
    const email = localStorage.getItem('cvEmail');
    const phone = localStorage.getItem('cvPhone');
    const linkedin = localStorage.getItem('cvLinkedin');
    const portfolio = localStorage.getItem('cvPortfolio');
    const career = localStorage.getItem('cvCareer');
    const secondary = localStorage.getItem('cvSecondary');
    const higher = localStorage.getItem('cvHigher');
    const graduation = localStorage.getItem('cvGraduation');
    const master = localStorage.getItem('cvMaster');
    const skills = localStorage.getItem('cvSkills');
    const declare = localStorage.getItem('cvDeclare');
    const project = localStorage.getItem('cvProject');
    const projectlink = localStorage.getItem('cvProjectlink');
    const exp = localStorage.getItem('cvExp');
    const des = localStorage.getItem('cvDes');
    
    const myRef = useRef();
    const print =()=>{
      if (myRef && myRef.current) {
        // Use react-to-print to trigger printing
        myRef.current.print();
      }

    }
  return (
    <div className="formCv exp_formCv print-background"  >
        <div  ref={myRef} className="print">

          <div className="vitae ">
            <h2><u>CURRICULUM VITAE</u></h2>
          </div>

          <div className='personal'>
            <ul>
              <li>{name}</li>
              <li>{state}</li>
              <li>{email}</li>
              <li>{phone}</li>
              <li><Link to={portfolio}>{portfolio}</Link></li>
              <li><a href={linkedin}>{linkedin}</a></li>
            </ul>
          </div>

          <div className='career expCareer'>
            <h3>Career objective</h3>

          </div>

          <div className='objective ' >
            <p>{career}</p>
          </div>

          <div className="academic expCareer">
            
            <h3>Academic Qualification</h3>

          </div>
          <div className="qualification">
            {
              React.createElement(
                "ul" , {className:"qual"},
                
                secondary.length>0? (React.createElement("li", {className:"qual_li"}, secondary)):"",
                higher.length>0? (React.createElement("li", {className:"qual_li"},  higher)):"",
                graduation.length>0? (React.createElement("li", {className:"qual_li"},  graduation)):"",
                master.length>0? (React.createElement("li", {className:"qual_li"}, master)):""
                

              )
              
            }
          
          </div>


          <div className="academic expCareer">
            
            <h3>Academic project</h3>

          </div>
          <div className='project'>
             {project}

          </div>
          <div className='projectlink'>
             <a href={projectlink}>{projectlink}</a>

          </div>
          <div className='des'>
             {des}

          </div><br/>



          <div className="academic">
            
            <h3>Skills</h3>

          </div>
          <div className='objective' >
            <p>{skills}</p>
          </div>


          <div className="academic expCareer">
            
            <h3>Professional Experience</h3>

          </div>
          <div className='objective exp' >
            <pre>
            <p>{exp}</p>

            </pre>
            
          </div>





          <div className="academic expCareer">
            <h3>Declaration</h3>
          </div>

          <div className='objective expDec'>
            <p>{declare}</p>
          </div>


        </div>
        <div>
          <div style={{ width:"auto",margin:"20px"}}>
          <ReactToPrint
                trigger={() => <Button variant="outline-primary" style={{margin:"auto"}}>Print me</Button>}
                content={() => myRef.current}
            />

          </div>
        

        </div>
        {/* <ReactToPrint
                trigger={() => <button >Print</button>}
                content={() => myRef.current}
            /> */}
        
        
        
    

    </div>
  )
}

export default Expformcv;