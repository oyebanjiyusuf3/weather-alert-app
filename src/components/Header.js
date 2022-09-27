import React from 'react'
import backgroundImage from '../assets/media/backgrounds/sunny.jpg'

const Header = () => {
  return (
    <header>
       <div className="container_header">
       {/* <div class="top-left"><h1></h1></div> */}
        <img src={backgroundImage} alt="bg" style={{width:"100%", height:"400px"}}/>
        <div className="centered">
            <h1><b>Weather Alert Application </b>
            </h1>
            <p>An Application that allows you to Track all your favourite Cities!</p>
        </div>
        </div>
        
    </header>
  )
}

export default Header