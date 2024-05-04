import React from 'react'
import './Home.css'
import profile from '../components/profile.png'

const Home = () => {
  return (
    <section id='home'>
        <div className='home-container'>
            <div className='home-quote'>
                <h1>You Don't Have to Know Everything 
                    Before You Start Something.
                </h1>
                <p>
                    Every expert was once a beginner.
                </p>
            </div>

            <div className='home-image'>
                <img src={profile} alt='profile picture'/>
            </div>
        </div>
    </section>
  )
}

export default Home