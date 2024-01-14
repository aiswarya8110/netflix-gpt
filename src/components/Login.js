import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [ signIn, setSignIn ] = useState(true);
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='relative'>
        <Header />
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />
        </div>
        <form onSubmit={handleSubmit} className='p-12 absolute top-2/4 left-2/4 w-3/12 bg-black translate-x-[-50%] translate-y-[-50%] text-white bg-opacity-80'>
            <h1 className="font-bold text-3xl py-4">
                {signIn ? 'Sign In' : 'Sign Up'}
            </h1>
            {!signIn && <input type="text" name="name" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 outline-none'/>}
            <input type="text" name="email" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700 outline-none'/>
            <input type="text" name="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700 outline-none' />
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' type='submit'>
                {signIn ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='py-4 cursor-pointer' onClick={()=> setSignIn(!signIn)}>
                {signIn ? 'New to Netflix? Sign Up now' : 'Already registered? Sign In Now.'}
            </p>
        </form>
    </div>
  )
}

export default Login