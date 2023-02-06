import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

/* es-lint disable */

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    

  <Popup trigger={<button className="add-music">+ add music</button>} >
    <div>
        <form className="popup-form">
            <label htmlFor="album-name">Album</label>
            <input type="text" name="album-name"></input>

            <label htmlFor="band">Band</label>
            <input type="text" name="band"></input>

           <label htmlFor="year">Year</label>
            <input type="text" name="year"></input>

            <submit onClick="getAlbum">Submit</submit>
        </form>
    </div>
  </Popup>
);

