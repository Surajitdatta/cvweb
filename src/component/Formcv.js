import React from 'react'
import { useLocation } from 'react-router-dom'

const Formcv = () => {
  const location = useLocation()
  const formData = location.state.formData
  console.log(formData)
  return <div>{formData.name}</div>
}

export default Formcv
