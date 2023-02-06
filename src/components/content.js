import {app, db} from '../firebase-config.js'
import { getFirestore} from 'firebase/firestore'
import Popup from "./popup.js"






function Favorites() {
    return (
        <div>
            <Popup />

            


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