import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {db, auth} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'



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
        <form className="popup-form">
            <label htmlFor="album-name">Album</label>
            <input type="text" name="album-name" ref={title}></input>

            <label htmlFor="band">Band</label>
            <input type="text" name="band" ref={band}></input>

           <label htmlFor="year">Year</label>
            <input type="text" name="year" ref={year} ></input>

            <button onClick={(event) => writeToFirebase(event)}>Submit</button>
        </form>
    </div>
  </Popup>
);
  
  
}