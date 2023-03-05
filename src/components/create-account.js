import ErrorPopup from './error-popup.js'
import {app, db, auth} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection, waitForPendingWrites} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator} from 'firebase/auth';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './login-page.js'
import {Form, Button} from "react-bootstrap"

function CreateAccount (props) {
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('*')
    }
    
    const [userErrorOccurred, setUserErrorOccurred] = useState(false)
    const [createAccountError, setCreateAccountError] = useState(null)
    
    const createAccount = async (event) => {
        event.preventDefault()
        const newEmail = email.current.value
        const newPassword = password.current.value
        const newConfirmPassword = confirmPassword.current.value
        
    if(newPassword === newConfirmPassword){
            
                await createUserWithEmailAndPassword(auth, newEmail, newPassword).then(
                 navigateToLogin()
                )
    }

    else  {
        triggerErrorPopUp()
    }
    }

    const triggerErrorPopUp = () => {
        setCreateAccountError("passwords don't match")
    }
      
      return (
        <div className="login-page">
        <ErrorPopup error={createAccountError}/>
        
            
            <Form >
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" ref={email}></Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control id="password" ref={password}></Form.Control>
            <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
            <Form.Control id="confirm-password" ref={confirmPassword}></Form.Control>

            <Button variant="secondary" className="login-form-button" onClick={(event) => {createAccount(event)}}>Create Account</Button>
            </Form>

            
        
        </div>
      
    );
      
      
    }

export default CreateAccount