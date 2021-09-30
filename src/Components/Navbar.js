
import React, {useState} from 'react'
import'../App.css'
// import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className='Navbar'>
        

        <div className='leftSide'>
        <a href="/Home">Y2K</a>
       
        
        </div> 
        

        <div className='rightSide'>
        <div className='links' id={showLinks ? 'hidden' : ''}>
        <a href="/Fashion">Fashion</a>
        <a href="/HairAndAcc">Hair & Accessories</a>
        <a href="/Makeup">Makeup</a>
        </div>

        <button onClick={() => setShowLinks(!showLinks)}>
        {""}
        {/* <ReorderIcon/> */}
        </button>
        </div> 
        </div>
    )
}

export default Navbar
