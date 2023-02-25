import ErrorPopup from './error-popup.js'
import {app, db, auth} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator} from 'firebase/auth';

import MyMusic from './my-music.js'


function Login (props) {

const email = useRef(null)
const password = useRef(null)
const navigate = useNavigate()



const [userErrorOccurred, setUserErrorOccurred] = useState(false)
const [signInError, setSignInError] = useState(null)

const loginEmailPassword = async (event) => {
    event.preventDefault()
    const loginEmail = email.current.value
    const loginPassword = password.current.value

    
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword ).then(navigateToMyMusic)
        
        
   

}

onAuthStateChanged(auth, (user) => {
    
})



const navigateToCreateAccount = () => {
    navigate('/create-account/*')
}

const navigateToMyMusic = () => {
    navigate('/my-music/*')
}

    
      
      return (
    <div>
        <ErrorPopup />
        <div>
        <button className="new-user" onClick={navigateToCreateAccount}>New User?</button>
        <form className="login-form">
            <label htmlFor="email">Email</label>
            <input id="email" ref={email}></input>
            <label htmlFor="password">Password</label>
            <input id="password" ref={password}></input>
            
            <button className="submitBtn" onClick={(event) => {loginEmailPassword(event)}}>Log In</button>
        </form>
        </div>

        
    </div>
        
      
    );
      
      
    }

export default Login