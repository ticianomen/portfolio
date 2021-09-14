import React from 'react'
import './About.css';
import perfil from '../../assets/per.png';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container__desc'>
        <h3>Sobre mí</h3>
        <p>Desarrollador FullStack con JavaScript y Node.js. Me especializo en el front-end.
          Me gusta aprender constantemente nuevas herramientas para mejorar y desarrollar de manera profesional. Me preocupo por producir código duradero, útil y lo mas importante escalable.
          Tengo experiencia realizando proyectos con las tecnologias: React (con javascript y typescript), Redux, Express, Sequalize, PostgreSQL y Firebase.</p>
      </div>
      <div className='about-container__img'>
        <img src={perfil} alt="perfil" />
      </div>
    </div>
  )
}

export default About
