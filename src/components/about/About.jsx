import React from 'react'
import './About.css';
import perfil from '../../assets/per.png';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container__desc'>
        <h3>about me</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam quo, quia vero deleniti quam facilis vitae aperiam minima, quaerat tempora inventore sint repudiandae id ad voluptatem officiis hic. Aut.</p>
      </div>
      <div className='about-container__img'>
        <img src={perfil} alt="perfil" />
      </div>
    </div>
  )
}

export default About
