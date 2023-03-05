import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {db, auth} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'
import {Form, Button} from 'react-bootstrap'


/* es-lint disable */

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

const title = useRef(null)
const band = useRef(null)
const year = useRef(null)
const albumArt = require('album-art')
const user =  auth.currentUser

const hasHappenedOnce = useState(false)


async function writeToFirebase(event){
  event.preventDefault()
  const coverArt = await albumArt(`${band.current.value}`, {album: `${title.current.value}`})
  await setDoc(doc(db, `${user.email}`, `${props.currentCollection}`, "albums", `${title.current.value}`),
  {
    art: `${coverArt}`,
    title: `${title.current.value}`,
    band: `${band.current.value}`,
    year: `${year.current.value}`,
  })

  getRecordCollection()


}

async function getRecordCollection(event){
  props.setAlbumArray([])
  const querySnapshot = await getDocs(collection(db, `${user.email}`, `${props.currentCollection}`, "albums"  ))
  let tempArray = []
  querySnapshot.forEach((doc) => {
    tempArray.push(doc.data())
  })
  props.setAlbumArray(tempArray)
}



useEffect(() => {
  async function getRecordCollectionAtInitialRender(){
    props.setAlbumArray([])
  const querySnapshot = await getDocs(collection(db, `${user.email}`, `${props.currentCollection}`, "albums" ))
  let tempArray = []
  querySnapshot.forEach((doc) => {
    tempArray.push(doc.data())
  })
  props.setAlbumArray(tempArray)
  }

  getRecordCollectionAtInitialRender()
}, [props.currentCollection, user.email]) 

  
  return (

  <Popup trigger={<button className="add-music">+ add music</button>} >
    <div>
        <Form className="popup-form">
            <Form.Label htmlFor="album-name">Album</Form.Label>
            <Form.Control type="text" name="album-name" ref={title}></Form.Control>

            <Form.Label htmlFor="band">Band</Form.Label>
            <Form.Control type="text" name="band" ref={band}></Form.Control>

           <Form.Label htmlFor="year">Year</Form.Label>
            <Form.Control type="text" name="year" ref={year} ></Form.Control>

            <Button variant="secondary" className="login-form-button" onClick={(event) => writeToFirebase(event)}>Submit</Button>
        </Form>
    </div>
  </Popup>
);
  
  
}