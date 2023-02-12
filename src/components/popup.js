import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {app, db} from '../firebase-config.js'
import {setDoc, doc, getDocs, collection} from 'firebase/firestore'
import {useRef, useEffect, useState, React} from 'react'


/* es-lint disable */

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

const title = useRef(null)
const band = useRef(null)
const year = useRef(null)
const albumArt = require('album-art')



async function writeToFirebase(event){
  event.preventDefault()
  let coverArt
  await albumArt(`${band.current.value}`, {album: `${title.current.value}`}).then(function(response){
    coverArt = response
  })
  await setDoc(doc(db, "albums", `${title.current.value}`),
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
  const querySnapshot = await getDocs(collection(db, "albums" ))
  querySnapshot.forEach((doc) => {
    props.setAlbumArray([...props.albumArray, doc.data()])

  })

}


  
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