import {Routes, Route, useNavigate} from 'react-router-dom'
import '../App.css';
import MyMusic from './my-music.js'
import {app, db, auth} from '../firebase-config.js'
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,
connectAuthEmulator } from 'firebase/auth'
import Popup from './popup.js'
import Login from './login-page.js'
import Review from './review.js'
import CreateAccount from './create-account.js'
import {useRef, useEffect, useState, React} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  const [currentAlbum, setCurrentAlbum] = useState(null)
  
  
  
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Login  />}></Route>
        <Route path="/create-account/*" element={ <CreateAccount />}></Route>
        <Route path="/my-music/*" element={<MyMusic setCurrentAlbum={setCurrentAlbum} currentAlbum={currentAlbum} />}></Route>
        <Route path="/review/*" element={<Review setCurrentAlbum={setCurrentAlbum} currentAlbum={currentAlbum}/>}></Route>
        

      </Routes>
    </div>
    
  );
}

export default App;
