import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prototyping (low-fidelity) / (high-fidelity)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mockups</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Flow</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaboration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}


        <article className='service'>
          <div className='service__head'>
            <h3>Full Stack Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Server</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Managment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing && Debugging</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT*/}

        

        {/* END OF CONTENT CREATION*/}

      </div>
    </section>
  )
}

export default Services