import {Form, Button} from "react-bootstrap"
import {React, useRef, useState, useEffect} from "react"
import {db, auth} from '../firebase-config.js'
import {setDoc, doc, getDoc, getDocs, collection} from 'firebase/firestore'
import {Routes, Route, useNavigate} from 'react-router-dom'
import ReviewForm from './review-form.js'
import ReviewContainer from './review-container.js'


function Review (props) {

const reviewContainer = useRef(null)


const user =  auth.currentUser
const [currentReview, setCurrentReview] = useState('')
const [hasHappenedOnce, setHasHappenedOnce] = useState(false)

const navigate = useNavigate()
const navigateToReviewForm = () => {
    navigate('*/review-form')
}
const navigateToReviewContainer = () => {
    navigate('*/review-container')
}
    


useEffect(()=> {

    



    async function getReview() {
        

        const reviewDoc = await getDoc(doc(db, `${user.email}`, `${props.currentAlbum.title}` ))
            if (reviewDoc.data() && hasHappenedOnce === false){
                setCurrentReview(reviewDoc.data().review)
                console.log(currentReview)
                setHasHappenedOnce(true)
                navigateToReviewContainer()
                
                
            }
            else if (hasHappenedOnce === false){
                setHasHappenedOnce(true)
                navigateToReviewForm()
            }
        
        
        
    }
    getReview()

    
    
    
}, [currentReview,user.email,props.currentAlbum, hasHappenedOnce, navigateToReviewContainer,navigateToReviewForm])

return (
    <div className="review-page">
    <div className="display-album">
        <img src={props.currentAlbum.art}></img>
        <div className="album-details">
            <div>{props.currentAlbum.title}</div>
            <div>{props.currentAlbum.band}</div>
            <div>{props.currentAlbum.year}</div>
        </div>
    </div>

    <Routes>
    <Route path="*/review-form" element={<ReviewForm currentAlbum={props.currentAlbum} setHasHappenedOnce={setHasHappenedOnce}  />} />
    <Route path="*/review-container" element={<ReviewContainer currentReview={currentReview} navigate={navigateToReviewForm} />} />
    </Routes>

    

    </div>
)
}

export default Review