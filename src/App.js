import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import MyMusic from './components/my-music.js'
import {app, db} from './firebase-config.js'
import { getFirestore} from 'firebase/firestore'


function App() {

  
  return (
    <div className="app">
      <div className="header">
        <div className="title">
          <span className="span1">Record</span>
          <span>Collection</span>
        </div>

        
          <button className="sign-in">Sign In</button>
        

      </div>
      
      <div>
      <Routes>
        <Route path="*" element={<MyMusic />}></Route>
      </Routes>
      </div>
      
    
    </div>
    
  );
}

export default App;
