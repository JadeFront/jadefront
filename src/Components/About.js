import React from 'react'
import './About.css'
import aboutimage from './home.JPG'

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='about-profile-container'>
            <img className='profile-picture' src={aboutimage} alt="profile picture"/>
        </div>

        <div className='about-intro'>
            <h3>Hi! I'm Jade Lester Ayat</h3>
            <p>I'm a Frontend Developer located in the Philippines. 
                In 2022-2023, I received a Bachelor of Science in 
                Computer Engineering &#40;BSCPE&#41; from Lorma Colleges 
                San Juan, La Union, Philippines. I am passionate 
                about frontend web development and am continuously learning 
                new things to improve my skills. 
            </p>
            <code>
                Fun Fact:
                When I was a kid I used to dream of becoming an architect 
                because I wanted to make my own dream house. 
            </code>
        </div>
    </div>
  )
}

export default About