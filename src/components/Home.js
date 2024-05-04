import React, { useEffect} from 'react'
import './Home.css'
import profile from '../components/profile.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);
  return (
    <section id='home'>
        <div className='home-container'>
            <div className='home-quote'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <h1>You Don't Have to Know Everything 
                    Before You Start Something.
                </h1>
                <p>
                    Every expert was once a beginner.
                </p>
            </div>

            <div className='home-image'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <img src={profile} alt='profil_picture'/>
            </div>
        </div>
    </section>
  )
}

export default Home