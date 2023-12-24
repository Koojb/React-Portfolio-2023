import React from 'react'
import './home.css'
import kaisa from '../../assets/kaisa.png'

const Home = () => {
  return (
    <section>
      <div className='flexbox-container'>
        <div>
            <img className='kaisa' src={kaisa} alt="" />
            <h1 className='name-section'>
                hello my name is 
                <a className='joshua-koo' href="#">Joshua Koo</a>
                <span className='software-engineer'>Aspiring Full Stack Engineer</span>
                Welcome to my profile.
            </h1>
            <ul class="nav-links">
              <li><a class="to-projects" href="#">Projects</a></li>
              <li><a class="to-contact" href="#">Contact</a></li>
              <li><a class="to-resume" href="#">Resume</a></li>
            </ul>
        </div>

        <div>
            <p className='about-section'>Hello I am a junior studying software engineering at Drexel University. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam odit corporis delectus sunt, corrupti ducimus sint facere nihil. Minus natus sit quis provident repellat obcaecati nam at accusantium asperiores.</p>
        </div>
    </div>
    </section>
  )
}

export default Home