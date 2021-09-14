import React from "react";
import './Slider.css';

const slidesData = [
  {
    src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
    alt: 'Marketplace',
    desc: 'Marketplace realizado para la StartUp Mist'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
    alt: 'MovieApp',
    desc: 'App para buscar informacion de tus peliculas favoritas'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
    alt: 'FanDogs',
    desc: 'SPA back-to-frontEnd realizada desde cero. Busca, filtra o crea tu raza.'
  }

]

const slides = slidesData.map(slide => (
  <div className='slide-container'>
    <img src={slide.src} alt={slide.alt} />
    <div className='slide-container__desc'>
      <span>{slide.alt}</span>
    </div>
  </div>
))

export default slides;