import React from "react";
import './Slider.css';

const slidesData = [
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920153-30181a67-ca6d-4d31-8a24-04f798c58d03.png',
    alt: 'ToDoApp',
    redirect: 'https://todolist-q3l3h2l10-ticianomen.vercel.app/'
  },
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920669-409bc435-70e1-4750-b83f-7ea362a384c3.png',
    alt: 'MovieApp',
    redirect: 'https://movies-sable-eta.vercel.app/'
  },
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920666-b1072ca4-30e1-40f6-912e-d54966b171be.png',
    alt: 'FoodApp',
    redirect: 'https://pi-food-ft-14b-g4l4ghygu-ticianomen.vercel.app/'
  },
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920670-59434d7b-0ca1-4c0c-89fc-2e51b03c6fe0.png',
    alt: 'WeatherApp',
    redirect: 'https://wheather-app-3wccr5wii-ticianomen.vercel.app/'
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