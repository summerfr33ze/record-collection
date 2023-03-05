import {app, db} from '../firebase-config.js'
import { getFirestore} from 'firebase/firestore'
import  Review from './review.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import uniqid from 'uniqid'
import { Card, Button } from 'react-bootstrap'
import {Routes, Route, useNavigate} from 'react-router-dom'


function Favorites(props) {

    const navigate = useNavigate()

    return (
        <div>

            <div className="record-collection">
                

                {
                    props.albumArray.map((album) => {
                        const setAlbum = () => {
                            props.setCurrentAlbum(album)
                        }

                        const navigateToReview = () => {
                            navigate('/review/*')
                            setAlbum()
                    
                        }


                        return (
                        
                        <Card key={uniqid()} style={{width: '15rem'}}>
                            <Card.Img variant="top" src={album.art} />
                            <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            <Card.Text>{album.band}</Card.Text>
                            <Card.Text>{album.year}</Card.Text>
                            <Button onClick={navigateToReview} className="review-button" >Review</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
            </div>
            

        </div>

    )
}


function HaveListened(props){
    
    const navigate = useNavigate()

    return (
        <div>

            <div className="record-collection">
                

                {
                    props.albumArray.map((album) => {
                        const setAlbum = () => {
                            props.setCurrentAlbum(album)
                        }

                        const navigateToReview = () => {
                            navigate('/review/*')
                            setAlbum()
                    
                        }


                        return (
                        
                        <Card key={uniqid()} style={{width: '15rem'}}>
                            <Card.Img variant="top" src={album.art} />
                            <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            <Card.Text>{album.band}</Card.Text>
                            <Card.Text>{album.year}</Card.Text>
                            <Button onClick={navigateToReview} className="review-button" >Review</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
            </div>
            

        </div>

    )
}

function WantToListen(props){

    const navigate = useNavigate()

    return (
        <div>

            <div className="record-collection">
                

                {
                    props.albumArray.map((album) => {
                        const setAlbum = () => {
                            props.setCurrentAlbum(album)
                        }

                        const navigateToReview = () => {
                            navigate('/review/*')
                            setAlbum()
                    
                        }


                        return (
                        
                        <Card key={uniqid()} style={{width: '15rem'}}>
                            <Card.Img variant="top" src={album.art} />
                            <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            <Card.Text>{album.band}</Card.Text>
                            <Card.Text>{album.year}</Card.Text>
                            <Button onClick={navigateToReview} className="review-button" >Review</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
            </div>
            

        </div>

    )
}

export {Favorites, HaveListened, WantToListen}