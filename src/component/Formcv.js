import React from 'react'
import { useState } from 'react';
const Formcv = (props) => {
    
    const name = localStorage.getItem('cvName');
    const state = localStorage.getItem('cvState');
    const email = localStorage.getItem('cvEmail');
    const phone = localStorage.getItem('cvPhone');
    const linkedin = localStorage.getItem('cvLinkedin');
    const portfolio = localStorage.getItem('cvPortfolio');
    const career = localStorage.getItem('cvCareer');
    const secondary = localStorage.getItem('cvSecondary');
    const higher = localStorage.getItem('cvHigher');
    const graduation = localStorage.getItem('cvGraduaion');
    const master = localStorage.getItem('cvMaster');
    const skills = localStorage.getItem('cvSkills');
    const declare = localStorage.getItem('cvDeclare');
    //bye
  return (
    <div >
        <div style={{marginTop:"100px"}}>
        {name}<br/>
        {state}<br/>
        {email}<br/>
        {phone}<br/>
        {linkedin}<br/>
        {portfolio}<br/>
        {career}<br/>
        {secondary}<br/>
        {higher}<br/>
        {graduation}<br/>
        {master}<br/>
        {skills}<br/>
        {declare}<br/>

        </div>
        
        
    

    </div>
  )
}

export default Formcv;