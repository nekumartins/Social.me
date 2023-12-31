import React from 'react'

import GoogleLogin from 'react-google-login'

import {useNavigate } from 'react-router-dom'

import {FcGoogle} from 'react-icons/fc'

import logo from '../assets/logo.svg'

import background from '../assets/background.jpg'


const Login = () => {
  const responseGoogle = (response) => {
      console.log(response)
  }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
     <div className="relative w-full h-full">
      <img 
        src ={background}
        className='w-full h-full object-cover'
        alt='background'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <div className='p-5'>
               <img src={logo} width='130px' alt='logo' />
            </div>
          
          <div className='shadow-2xl'>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                  render={(renderProps)=>(
                    <button
                    type='button'
                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    >
                      <FcGoogle className='mr-4'/>  Sign in

                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy='single_host_origin'
                  SameSite='None' Secure

                />

          </div>
        </div>

     </div>
 
    </div>
  
    )
}

export default Login