import {Form, Button} from "react-bootstrap"
import {React, useRef, useState, useEffect} from "react"
import {db, auth} from '../firebase-config.js'
import {setDoc, doc, getDoc, getDocs, collection} from 'firebase/firestore'
import {Routes, Route} from 'react-router-dom'


function ReviewForm (props) {

const user = auth.currentUser
const reviewForm = useRef(null)
    
async function writeReviewToFirebase (event) {
    event.preventDefault()
    await setDoc(doc(db, `${user.email}`, `${props.currentAlbum.title}` ), {
        review: `${reviewForm.current.value}`
    })
    props.setHasHappenedOnce(false)
}

    return (
        <Form className="review-form" >
        <Form.Label htmlFor="review-form-control">What did you think of the album?</Form.Label>
        <Form.Control as="textarea" rows={10} name="review-form-control" className="review-input"  ref={reviewForm}></Form.Control>
        <Button className="login-form-button" onClick={(event) => {writeReviewToFirebase(event)}}>Submit</Button>
        </Form>
    )
}

export default ReviewForm