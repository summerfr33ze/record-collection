import {Routes, Route, useNavigate} from 'react-router-dom'
import {Favorites, HaveListened, WantToListen} from './content.js'
import {React, useEffect, useState} from "react"

function MyMusic () {
    const navigate = useNavigate()
    const navigateToFavorites = () => {
        navigate('/favorites')
    }
    const navigateToHaveListened = () => {
        navigate('/have-listened')
    }
    const navigateToWantToListen = () => {
        navigate('/want-to-listen')
    }

    const [isInitialRender, setIsInitialRender] = useState(true)

    useEffect(() =>{
        if (isInitialRender) {
            navigateToFavorites()
        }
        setIsInitialRender(false)
    }, [isInitialRender, navigateToFavorites])

    return(
        <div className="main">
            <div className="left-column">
                <button>Favorites</button>
                <button>Have listened</button>
                <button>Want To Listen</button>
            </div>
            <div className="content">
                <div className="my-music">My Music</div>


                <Routes>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/have-listened" element={<HaveListened />}></Route>
                    <Route path="/want-to-listen" element={<WantToListen />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default MyMusic