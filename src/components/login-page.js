import ErrorPopup from './error-popup.js'
import {app, db, auth} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator} from 'firebase/auth';
import {Form, Button} from 'react-bootstrap'
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
    <div className="login-page">
        <ErrorPopup />
        <div className="login-form">

        <div className="log-in-title">
                <span className="span1">Record</span>
                <span>Collection</span>
        </div>
        
        <Form>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" ref={email}></Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control id="password" ref={password}></Form.Control>
            <Button variant="secondary" className="login-form-button" onClick={(event) => {loginEmailPassword(event)}}>Log In</Button>
        </Form>

        <Button variant="secondary" className="new-user-button"  onClick={navigateToCreateAccount}>New User?</Button>
        </div>

        
    </div>
        
      
    );
      
      
    }

export default Login