import {app, db} from '../firebase-config.js'
import { getFirestore} from 'firebase/firestore'

import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import uniqid from 'uniqid'
import { Card } from 'react-bootstrap'


function Favorites(props) {
    return (

            <div className="record-collection">
        

                {
                    props.albumArray.map((album) => {
                        return (
                        
                        <Card key={uniqid()} style={{width: '13rem'}}>
                            <Card.Img variant="top" src={album.art} />
                            <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            <Card.Text>{album.band}</Card.Text>
                            <Card.Text>{album.year}</Card.Text>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
            </div>
    )
}


function HaveListened(props){
return (
    <div className="record-collection">
        

    {
        props.albumArray.map((album) => {
            return (
            
            <Card key={uniqid()} style={{width: '13rem'}}>
                <Card.Img variant="top" src={album.art} />
                <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>{album.band}</Card.Text>
                <Card.Text>{album.year}</Card.Text>
                </Card.Body>
            </Card>
            )
        })
    }
</div>
    )
}
function WantToListen(props){
    return (
        <div className="record-collection">
        

        {
            props.albumArray.map((album) => {
                return (
                
                <Card key={uniqid()} style={{width: '13rem'}}>
                    <Card.Img variant="top" src={album.art} />
                    <Card.Body>
                    <Card.Title>{album.title}</Card.Title>
                    <Card.Text>{album.band}</Card.Text>
                    <Card.Text>{album.year}</Card.Text>
                    </Card.Body>
                </Card>
                )
            })
        }
    </div>
    )
}

export {Favorites, HaveListened, WantToListen}