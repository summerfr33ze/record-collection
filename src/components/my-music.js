import {Routes, Route, useNavigate} from 'react-router-dom'
import {Favorites, HaveListened, WantToListen} from './content.js'
import {React, useEffect, useState} from "react"
import { signOut, } from 'firebase/auth'
import {app, db, auth} from '../firebase-config.js'
import Button from 'react-bootstrap/Button'
import Popup from './popup.js'

function MyMusic (props) {
    const navigate = useNavigate()

    const navigateToFavorites = () => {
        navigate('*/favorites')
        setCurrentCollection("favorites")
    }
    
    const navigateToHaveListened = () => {
        navigate('*/have-listened')
        setCurrentCollection("have-listened")
        
    }
    const navigateToWantToListen = () => {
        navigate('*/want-to-listen')
        setCurrentCollection("want-to-listen")
    }

    const logout = async () => {
        await signOut(auth);
    }

    const [isInitialRender, setIsInitialRender] = useState(true)
    const [albumArray, setAlbumArray] = useState([])
    const [currentCollection, setCurrentCollection] = useState("favorites")
    

    useEffect(() =>{
        if (isInitialRender) {
            const user = auth.currentUser
            console.log(user)
            navigateToFavorites()
        }
        setIsInitialRender(false)
    }, [isInitialRender, navigateToFavorites])

    const user = auth.currentUser
    const email = user.email

    return(
        
            
        <div>
        <div className="header"> 
            <div className="title">
                <span className="span1">Record</span>
                <span>Collection</span>
            </div>
            <div className="header-right">
                <div>{email}</div>
                <Button variant="secondary" className="logout" style={{ height: '5vh'}} onClick={logout}>Log Out</Button>
            </div>
      </div>
        <div className="main">
            
            <div className="left-column" >
                <Button variant="secondary" size="lg" onClick={navigateToFavorites}>Favorites</Button>
                <Button variant="secondary" size="lg"  onClick={navigateToHaveListened}>Have listened</Button>
                <Button variant="secondary"  size="lg" onClick={navigateToWantToListen}>Want To Listen</Button>
            </div>
            
            
            <div className="content">
                <div className="content-header">
                <div className="my-music">My Music</div>
                <Popup setAlbumArray={setAlbumArray} albumArray={albumArray} currentCollection={currentCollection}/>
                </div>
                



                <Routes>
                    <Route path="*/favorites/*" element={<Favorites albumArray={albumArray} setCurrentAlbum={props.setCurrentAlbum} currentAlbum={props.currentAlbum} />}></Route>
                    <Route path="*/have-listened" element={<HaveListened albumArray={albumArray} setCurrentAlbum={props.setCurrentAlbum} currentAlbum={props.currentAlbum}/>}></Route>
                    <Route path="*/want-to-listen" element={<WantToListen albumArray={albumArray} setCurrentAlbum={props.setCurrentAlbum} currentAlbum={props.currentAlbum}/>}></Route>
                </Routes>
            </div>
        </div> 
        </div>
        
        
        
    )
}

export default MyMusic