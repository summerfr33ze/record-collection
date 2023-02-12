import {app, db} from '../firebase-config.js'
import { getFirestore} from 'firebase/firestore'
import Popup from "./popup.js"
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'





function Favorites() {

const [albumArray, setAlbumArray] = useState([])

  
    return (
        <div>
        <div>
            
                {
                    albumArray.map((album) => {
                        return (
                        <div className="album-card">
                        <img className= "album-art" src={album.art}></img>
                        <div>{album.title}</div>
                        <div>{album.band}</div>
                        <div>{album.year}</div>
                        </div>
                        )
                    })
                }
            </div>
            
            <Popup albumArray={albumArray} setAlbumArray={setAlbumArray}/>

        </div>
        
    )
}


function HaveListened(){
return (
        <div>
            <Popup />
        </div>
        
        
    )
}
function WantToListen(){
    return (
        <div>
            <Popup />
        </div>
    )
}

export {Favorites, HaveListened, WantToListen}