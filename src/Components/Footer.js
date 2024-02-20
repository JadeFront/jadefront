import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-intro'>
            <h1>JadeFrontend</h1>
            <button>Download CV</button>
        </div>
        <div className='footer-content'>
            <div className='navigation'>
                <h3>navigation</h3>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#project'>Project</a>
                <a href='#contact'>Contact</a>
            </div>

            <div className='footer-social'>
                <h3>Socials</h3>
                <a href='#'>Facebook</a>
                <a href='#'>Instagram</a>
                <a href='#'>Linkedin</a>
            </div>

            <div className='footer-contact'>
                <h3>Get in touch</h3>
                <a href='mailto:ayat.jadelester@gmail.com'>ayat.jadelester@gmai.com</a>
                <p >+63-929-1165-222</p>
            </div>
        </div>

        <div className='footer-end'>
            <p>&#169; 2024 JadeFrontend, All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer