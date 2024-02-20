import React from 'react'
import './Home.css'
import Cv from './CV-Ayat_JadeLester.pdf'
import homeimage from './about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

 
  return (
      <section className='home-container' id="home">
        
          <div className='home-intro'>
            <h2>Hi there! Jade here, passionate web developer who loves to create websites. </h2>
          
            <p>I am a Frontend Developer, I develop websites using frontend tools.</p>
        
            
          <div className='home-logo'>
          <FontAwesomeIcon icon={faHtml5} size="xl" style={{color: "orange"}}/>
          <FontAwesomeIcon icon={faCss3} size="xl" style={{color: "blue"}}/>
          <FontAwesomeIcon icon={faJs} size="xl" style={{color: "yellow"}}/>
          <FontAwesomeIcon icon={faBootstrap} size="xl" style={{color: "purple"}}/>
          <FontAwesomeIcon icon={faReact} size="xl" style={{color: "skyblue"}}/>
          </div>

          <a href={Cv}
             download="CV-Ayat-JadeLester.pdf"
             target="_blank"
             rel="noreferrer">
            <button>Download CV</button>
          </a>
        </div>

        <div className='profile-container'>
            <img className='home-profile' src={homeimage} alt='jade profile'/>
        </div> 
      </section>
  )
}

export default Home