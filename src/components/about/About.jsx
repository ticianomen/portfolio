import React from 'react'
import './About.css';
import perfil from '../../assets/perfil.jpeg';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container__desc'>
        <h3>About me</h3>
        <p>FullStack Developer. Especialized with Back-End.
          I love learning new technologies to improve and grow as a developer. Always trying to make durable, usefull code.
          Some technologies I'm used to: React ( javascript amd typescript ), Redux, Express, Sequelize, PostgreSQL and Firebase.</p>
      </div>
      <div className='about-container__img'>
        <img src={perfil} alt="perfil" style={{borderRadius:50}}/>
      </div>
    </div>
  )
}

export default About
