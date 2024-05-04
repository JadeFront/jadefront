import React, { useEffect } from 'react'
import './About.css'
import Resume from './CV-Ayat_JadeLester.pdf'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);
  return (
    <section id='about'>
        <div className='about-container'>
            <div className='about-profile'>
                <div className='info'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h1>Jade Lester Ayat</h1>
                    <h5>Frontend Developer</h5>
                </div>
                <div className='skill'>
                    <p  data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"><FaHtml5 />
                    </p>
                    <p  data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1100"><FaCss3Alt />
                    </p>
                    <p  data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1200"><SiJavascript />
                    </p>
                    <p  data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1300"><FaBootstrap />
                    </p>
                    <p  data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1400"><FaReact />
                    </p>
                </div>
                <div className='link'>
                <a  href={Resume}
                    download="CV-Ayat-JadeLester.pdf"
                    target="_blank"
                    rel="noreferrer"

                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">resume
                </a>
                    <a href='https://github.com/JadeFront' target='blank'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">github
                </a>
                </div>
            </div>

            <div className='about-info'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
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