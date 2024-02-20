import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='project-container' id='project'>
      <div className='project'>
      <div className='project-text'>
        <h1>Projects</h1>
      </div>
      
        <div className='project-list'>
          <div className='project-1'>
            <h2>JadeSweet's</h2>
            <p>JadeSwwet's is a pastry shop that offers delicious
              cookies, macarons, and cupcakes .</p>
            <a href='https://jadefront.github.io/jadesweets/' target='blank'>view</a>
          </div>

          <div className='project-2'>
            <h2>Footstep Footwear</h2>
            <p>Footstep footwear is a simple shoe ecommerce site that
              offers casual shoes for men and women.</p>
            <a href='https://jadefront.github.io/footstep/' target='blank'>view</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project