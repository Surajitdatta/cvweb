import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { useState, useEffect } from 'react'
// import { createContext } from 'react';
import Form from './Form'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// export const infoSender= createContext();
function Sign() {
  const [check, setCheck] = useState()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    check: false,
  })
  const value = (v) => {
    const { name, value } = v.target
    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    console.log(state)
  }
  const navigate = useNavigate()

  const signCheck = (e) => {
    e.preventDefault()
    state.name.length !== 0 &&
    state.email.length !== 0 &&
    state.password.length !== 0
      ? navigate('/Form')
      : console.log('ok')
    localStorage.setItem('myName', state.name)
  }

  return (
    <div className='sign'>
      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <form onSubmit={signCheck}>
              <MDBRow>
                <MDBCol
                  md='10'
                  lg='6'
                  className='order-2 order-lg-1 d-flex flex-column align-items-center'
                >
                  <p classNAme='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Sign up
                  </p>

                  <div className='d-flex flex-row align-items-center mb-4 '>
                    <MDBIcon fas icon='user me-3' size='lg' />
                    <MDBInput
                      label='Your Name'
                      id='form1'
                      type='text'
                      className='w-100'
                      name='name'
                      value={state.name}
                      onChange={value}
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='envelope me-3' size='lg' />
                    <MDBInput
                      label='Your Email'
                      id='form2'
                      type='email'
                      name='email'
                      value={state.email}
                      onChange={value}
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    <MDBInput
                      label='Password'
                      id='form3'
                      type='password'
                      name='password'
                      value={state.password}
                      onChange={value}
                    />
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

                  {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='true' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

                  <MDBBtn className='mb-4' size='lg'>
                    Register
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md='10'
                  lg='6'
                  className='order-1 order-lg-2 d-flex align-items-center'
                >
                  <MDBCardImage
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      {/* <infoSender.Provider value={{}} >
      <Form/>
      
    </infoSender.Provider> */}
    </div>
  )
}

export default Sign
