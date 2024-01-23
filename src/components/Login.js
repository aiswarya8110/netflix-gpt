import React, { useState, useRef } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { updateProfile } from 'firebase/auth';
import { USER_AVATAR, LOGIN_BG_IMAGE } from '../utils/constants';

const Login = () => {
    const [ signIn, setSignIn ] = useState(true);
    console.log(signIn);
    const [ error, setError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const message = checkValidData(nameInputRef.current?.value,emailInputRef.current.value, passwordInputRef.current.value);
        if(message){
            setError(true);
            setErrorMessage(message);
        }
        else{
            setError(false);

            if(!signIn){
                // Sign Up logic

                createUserWithEmailAndPassword(auth, emailInputRef.current.value, passwordInputRef.current.value)
                .then(()=>updateProfile(auth.currentUser, {displayName: nameInputRef.current.value, photoURL: USER_AVATAR  }))
                .then(()=>{
                    const { displayName, email, uid, photoURL } = auth.currentUser;
                    dispatch(addUser({displayName, email, uid, photoURL}));
                })
                .catch((error)=>{
                     const errorCode = error.code;
                     const errorMessage = error.message;
                     setError(true);
                     setErrorMessage(errorCode+errorMessage)
                })
            }

            else{
                // Sign In logic

                signInWithEmailAndPassword(auth, emailInputRef.current.value, passwordInputRef.current.value)
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(true);
                    setErrorMessage(errorCode+errorMessage);
                })
            }
        }
    }
  return (
    <div className='relative h-screen'>
        <Header />
            <img src={LOGIN_BG_IMAGE} alt="background-img" className='absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover'/>
            <form onSubmit={handleSubmit} className='p-12 absolute top-2/4 left-2/4 w-3/12 bg-black translate-x-[-50%] translate-y-[-50%] text-white bg-opacity-80'>
                <h1 className="font-bold text-3xl py-4">
                    {signIn ? 'Sign In' : 'Sign Up'}
                </h1>
                {!signIn && <input type="text" name="name" placeholder='Full Name' ref={nameInputRef} className='p-2 my-2 w-full bg-gray-700 outline-none'/>}
                <input type="text" name="email" placeholder='Email Address' ref={emailInputRef} className='p-2 my-2 w-full bg-gray-700 outline-none'/>
                <input type="text" name="password" placeholder='Password' ref={passwordInputRef} className='p-2 my-2 w-full bg-gray-700 outline-none' />
                {error && <p className='text-lg text-red-500 font-bold'>{errorMessage}</p>}
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