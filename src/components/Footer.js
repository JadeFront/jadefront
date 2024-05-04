import React from 'react'
import './Footer.css'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => { 
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-title'>
          <h1>JADEFRONTEND</h1>
          <div className='social'>
            <div>
              <h5>Get in Touch</h5>
            </div>
            <div className='socials'>
              <a href='https://www.facebook.com/jejejejade' target='blank'><FaFacebook /></a>
              <a href='https://www.instagram.com/jeedness/' target='blank'><FaInstagramSquare /></a>
              <a href='https://www.linkedin.com/in/jade-lester-ayat-71288826b/' target='blank'><FaLinkedin /></a>
              <a href='https://github.com/JadeFront' target='blank'><FaGithub /></a>
              <a href='mailto:ayat.jadelester@gmail.com'><MdEmail /></a>
            </div>
        </div>
        </div>
        
        <div className='footer-copyright'>
          <p>Copyright &#169; JadeFrontend </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer