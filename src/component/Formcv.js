import React from 'react'
import { globalInfo } from './Form';
import { useContext } from 'react';
const Formcv = () => {
    const Formcv = useContext(globalInfo);
    console.log(Formcv)
  return (
    <div>
        {Formcv.name}
        
        

    </div>
  )
}

export default Formcv;