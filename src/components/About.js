import React from 'react'
import './About.css'
import Resume from './CV-Ayat_JadeLester.pdf'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

const About = () => {
    
  return (
    <section id='about'>
        <div className='about-container'>
            <div className='about-profile'>
                <div className='info'>
                    <h1>Jade Lester Ayat</h1>
                    <h5>Frontend Developer</h5>
                </div>
                <div className='skill'>
                    <p><FaHtml5 /></p>
                    <p><FaCss3Alt /></p>
                    <p><SiJavascript /></p>
                    <p><FaBootstrap /></p>
                    <p><FaReact /></p>
                </div>
                <div className='link'>
                <a 
                    href={Resume}
                    download="CV-Ayat-JadeLester.pdf"
                    target="_blank"
                    rel="noreferrer">resume</a>
                    <a href='https://github.com/JadeFront' target='blank'>github</a>
                </div>
            </div>

            <div className='about-info'>
                    <h1>About me</h1>
                    <p>I'm an aspiring Frontend Developer 
                        with a passion for crafting 
                        captivating digital experiences. 
                        With a dedication to staying abreast 
                        of the latest trends and technologies 
                        in web development, I am eager to 
                        contribute fresh perspectives and 
                        innovative solutions to any project 
                        I undertake. My journey in frontend 
                        development is fueled by a commitment 
                        to continuous learning, problem-solving, 
                        and a relentless drive to create impactful 
                        digital solutions. I'm excited to embark 
                        on this journey, collaborate with fellow 
                        developers, and contribute to building 
                        the web of tomorrow.
                    </p>
            </div>
        </div>
    </section>
  )
}

export default About