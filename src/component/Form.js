// import React from 'react'
// import { useContext } from 'react';
// import {infoSender} from "./Sign"

// const Form = () => {
//   const {state} = useContext(infoSender);
//   return (
//     <div>
//       {/* {
//         state.map((inputdata)=>{
//           return(
//             <>
//             {inputdata.name}
//             </>
//           )
//         })

//       } */}
//     </div>
//   )
// }

// export default Form;
const Form=(props) =>{
  const myData = localStorage.getItem('myName');
 
  return(
    <>
    <h1 style={{marginTop:"200px", textAlign:"center"}}>
      The Work is processing , please wait MR. {myData}<br/>
      here you will get your CV, thanks....

    </h1>
    </>
  )
}
export default Form;