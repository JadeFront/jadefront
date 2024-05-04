import React, { useEffect } from 'react'
import './Project.css'
import sweet from './jadesweets.png'
import footstep from './footstep.png'
import instafamous from './instafamous.png'
import todoapp from './todo.png'
import weatherapp from './weather.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {
    useEffect(() => {
      AOS.init({
          once: true
      });
    }, []);
  return (
    <section id='project'>
      <div className='title'>
        <h1>Projects</h1>
      </div>

      <div className='project-container'>

        <div className='landing-page'>
          <div className='project jadesweet'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <div className='project-img'>
              <img src={sweet} alt='img'/>
            </div>

            <div className='project-info'>
              <div>
                <h1>Jadesweet's</h1>
                <h5>Landing page for a pastry shop that serves three sweets. Macaroons, cookies, and desserts. Fulfill your cravings!</h5>
              </div>

              <div className='program'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
              </div>

              <div className='project-link'>
                <a href='https://jadefront.github.io/jadesweets/' target='blank'>view</a>
              </div>
            </div>
          </div>

          <div className='project footstep'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <div className='project-img'>
              <img src={footstep} alt='img'/>
            </div>

            <div className='project-info'>
              <div>
                <h1>Footstep</h1>
                <h5>Shoe e-commerce landing page. Take the next step on your new adventure with footstep. </h5>
              </div>

              <div className='program'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
              </div>

              <div className='project-link'>
                <a href='https://jadefront.github.io/footstep/' target='blank'>view</a>
              </div>
            </div>
          </div>

          <div className='project instafamous'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <div className='project-img'>
              <img src={instafamous} alt='img'/>
            </div>

            <div className='project-info'>
              <div>
                <h1>InstaFamous</h1>
                <h5>Instagram marketing solutions tailored specifically for influencers and businesses.</h5>
              </div>

              <div className='program'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              
            <div className='project-link'>
                <a href='https://instafamous.org/' target='blank'>view</a>
            </div>
            </div>
          </div>
        </div>

        <div className='react-project'>
          <div className='react todoapp'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='card'>
              <div className='card-img'>
                <img src={todoapp} alt='img'/>
              </div>
              <div className='card-detail'>
                <div className='card-title'>
                  <h1>To-Do App</h1>
                </div>
                <div className='program'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>React</p>
                </div>
                <div className='project-link'>
                  <a href='https://jadefront.github.io/todoapp/' target='blank'>view</a>
                </div>
                </div>
            </div>
          </div>

          <div className='react weatherapp'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <div className='card'>
              <div className='card-img'>
                <img src={weatherapp} alt='img'/>
              </div>
              <div className='card-detail'>
                <div className='card-title'>
                  <h1>Weather App</h1>
                </div>
                <div className='program'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>React</p>
                </div>
                <div className='project-link'>
                  <a href='https://jadefront.github.io/weatherapp/' target='blank'>view</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project