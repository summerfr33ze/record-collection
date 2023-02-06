function triggerPopUp(){

}

function Favorites() {
    return (
        <div>
            <button className="add-music" onClick={triggerPopUp}></button>

            


        </div>
        
    )
}
function HaveListened(){
return (
        <button className="add-music" onClick={triggerPopUp}></button>
    )
}
function WantToListen(){
    return (
        <button className="add-music" onClick={triggerPopUp}></button>
    )
}

export {Favorites, HaveListened, WantToListen}