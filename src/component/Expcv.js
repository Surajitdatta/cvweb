
import "./Form.css";
import { useState, useEffect } from "react";
import Formcv from "./Formcv";
import { useNavigate } from 'react-router-dom';
import Expformcv from "./Expformcv";

const Expcv=(props) =>{
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    state:"",
    email:"",
    phone: "",
    linkedin: "",
    portfolio: "",
    career:"",
    secondary:"",
    higher:"",
    // master1:"",
    graduation:"",
    master:"",
    skills:"",
    project:"",
    projectlink:"",
    des:"",
    exp:"",
    declare:""
  })
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem('cvName', formData.name);
    localStorage.setItem('cvState', formData.state);
    localStorage.setItem('cvEmail', formData.email);
    localStorage.setItem('cvPhone', formData.phone);
    localStorage.setItem('cvLinkedin', formData.linkedin);
    localStorage.setItem('cvPortfolio', formData.portfolio);
    localStorage.setItem('cvCareer', formData.career);
    localStorage.setItem('cvSecondary', formData.secondary);
    localStorage.setItem('cvHigher', formData.higher);
    // localStorage.setItem('cvMaster1', formData.master1);
    localStorage.setItem('cvGraduation', formData.graduation);
    localStorage.setItem('cvMaster', formData.master);
    localStorage.setItem('cvProject', formData.project);
    localStorage.setItem('cvProjectlink', formData.projectlink);
    localStorage.setItem('cvDes', formData.des);
    localStorage.setItem("cvSkills", formData.skills);
    localStorage.setItem("cvExp", formData.exp);

    localStorage.setItem('cvDeclare', formData.declare);
    // localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/Expformcv');
  }
  function handleInputChange(event){
    const {name, value}=event.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
      
      
    }))
    
    
   

  }
  
  
 
  return(
    
    <>
    
    {/* <h1 style={{marginTop:"200px", textAlign:"center"}}>
      The Work is processing , please wait MR. {myData}<br/>
      here you will get your CV, thanks....

    </h1> */}
    

    <div class="container-fluid px-1 py-5 mx-auto Formbody">
      
        
      
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            
            <p class="blue-text">Just answer a few questions<br/> so that we can make cv for you.</p>
            <div class="card">
                <form className="form-card" onSubmit={handleSubmit}>


                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3"> Name<span class="text-danger"> *</span></label> <input type="text"  name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} /> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">State<span class="text-danger"> *</span></label> <input type="text"  name="state" placeholder="Enter your state" value={formData.state} onChange={handleInputChange}/> </div>
                    </div>
                    
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="email"  name="email" placeholder="Enter your mail" value={formData.email} onChange={handleInputChange}/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> <input type="number"  name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Linkedin<span class="text-danger"> </span></label> <input type="url"  name="linkedin" placeholder="Enter your linkedin link if any" value={formData.linkedin} onChange={handleInputChange}/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Portfolio<span class="text-danger"> </span></label> <input type="url"  name="portfolio" placeholder="Enter your portfolio link if any" value={formData.portfolio} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Career objective<span class="text-danger"> *</span></label> <textarea  name="career" placeholder="Career objective" value={formData.career} onChange={handleInputChange} ></textarea> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Secondary Education<span class="text-danger"> </span></label> <input type="text"  name="secondary" placeholder="90% from WBBSE board" value={formData.secondary} onChange={handleInputChange}/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Higher Secondary<span class="text-danger"> </span></label> <input type="text"  name="higher" placeholder="90% from WBBSE board" value={formData.higher} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        {/* <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Graduation<span class="text-danger"> </span></label> <input type="text"  name="graduation" placeholder="Btech from x department with sgpa 8.0 " value={formData.graduation} onChange={handleInputChange}/> </div> */}
                        {/* <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Master1 Degree<span class="text-danger"> </span></label> <input type="text"  name="master1" placeholder="Btech1 from x department with sgpa 8.0" value={formData.master1} onChange={handleInputChange}/> </div> */}
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3"> Graduation<span class="text-danger"> *</span></label> <input type="text"  name="graduation" placeholder="Enter your grad" value={formData.graduation} onChange={handleInputChange}/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Master Degree<span class="text-danger"> </span></label> <input type="text"  name="master" placeholder="Mtech from x department with sgpa 8.0" value={formData.master} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Personal skills<span class="text-danger"> *</span></label> <input  name="skills" placeholder="HTML, CSS, PYTHON, REACT, MS WORD" value={formData.skills} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Academic Project name<span class="text-danger"> *</span></label> <input type="text"  name="project" placeholder="Enter your name" value={formData.project} onChange={handleInputChange} /> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Project link<span class="text-danger"> *</span></label> <input type="url"  name="projectlink" placeholder="Enter your project link" value={formData.projectlink} onChange={handleInputChange} /> </div>
                        
                    </div>
                    <div class="row justify-content-end">
                    <div class="form-group col-sm-12 flex-column d-flex"> <label class="form-control-label px-3">Project description<span class="text-danger"> *</span></label> <textarea type="text"  name="des" placeholder="Project description" value={formData.des} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-end">
                    <div class="form-group col-sm-12 flex-column d-flex"> <label class="form-control-label px-3">Professional experience<span class="text-danger"> *</span></label> <textarea type="text"  name="exp" placeholder="Professional experience" value={formData.exp} onChange={handleInputChange}/> </div>
                    </div>

                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-12 flex-column d-flex"> <label class="form-control-label px-3">Declaration<span class="text-danger"> *</span></label> <textarea  name="declare" placeholder="Declaration" value={formData.declare} onChange={handleInputChange}></textarea> </div>
                    </div>


                    
                    
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Submit</button> </div>
                    </div>

                    


                </form>

            </div>
        </div>
    </div>
</div>





















    </>
   
  )
}
export default Expcv;