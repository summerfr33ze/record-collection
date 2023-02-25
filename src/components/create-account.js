import ErrorPopup from './error-popup.js'
import {app, db, auth} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator} from 'firebase/auth';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './login-page.js'

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
    
        try {
            await createUserWithEmailAndPassword(auth, newEmail, newPassword).then(
             navigateToLogin(), console.log("hello")
            )

            
        }
        catch(error) {
            console.log(`Error: ${error}`)
            triggerErrorPopUp(error)
        }
    }
    
    const triggerErrorPopUp = (error) => {
        setUserErrorOccurred(true)
        setCreateAccountError(error)
    }
      
      return (
        <div>
        <ErrorPopup userErrorOccurred={userErrorOccurred} error={createAccountError}/>
        <div>
            <div></div>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input id="email" ref={email}></input>
                <label htmlFor="password">Password</label>
                <input id="password" ref={password}></input>

                <button className="submitBtn" onClick={(event) => {createAccount(event)}}>Create Account</button>
            </form>

            
        </div>
        </div>
      
    );
      
      
    }

export default CreateAccount