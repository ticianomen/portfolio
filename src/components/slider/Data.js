import React from "react";
import { Link } from 'react-router-dom';
import './Slider.css';

const slidesData = [
  {
    src: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    alt: 'Marketplace',
    redirect: 'https://github.com/mist-tech-or/mist'
  },
  {
    src: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    alt: 'MovieApp',
    redirect: 'https://github.com/Gantalf/Movies-App'
  },
  {
    src: 'https://images.unsplash.com/photo-1521055447672-2fa9530db421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    alt: 'FanDogs',
    redirect: 'https://github.com/Gantalf/PI-Dogs-FT14b'
  },
  {
    src: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    alt: 'WeatherApp',
    redirect: 'https://github.com/Gantalf/Weather-App'
  }

]

const slides = slidesData.map(slide => (

  <div className='slide-container'>
    <a href={slide.redirect} target='_blank' rel='noreferrer'>
      <img src={slide.src} alt={slide.alt} />
      <div className='slide-container__desc'>
        <span>{slide.alt}</span>
      </div>
    </a>
  </div>

))

export default slides;