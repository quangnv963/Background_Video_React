import logo from '../assets/logo.jpg'
import volume from '../assets/icons8-volume-100.png'
import volume_off from '../assets/icons8-volume-off-100.png'
import video from '../assets/semiconductor_video_background_web.mp4'
import { useState } from 'react'


function Header(){
    const [sound, setSound] = useState(false)
    return(
        <div className="banner">
          <video src={video} autoPlay loop playsInline muted={sound ? false : true} />
          <div className="navbar">
              <img className='logo' src={logo} alt="" />
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
          <div className="content">
              <h1>VSMC</h1>
              <div>
                  <button type="button">About Us</button>
              </div>
          </div>
          <div onClick={()=> {setSound(!sound)}} className='sound'>
          {sound ? <img className='sound-icon' src={volume} alt="" /> : <img className='sound-icon' src={volume_off} alt="" />}
          </div>
      </div>
    )
}

export default Header