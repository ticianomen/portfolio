import React from "react";
import './Slider.css';

const slidesData = [
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920153-30181a67-ca6d-4d31-8a24-04f798c58d03.png',
    description:'To Do App, List and track your chores',
    alt: 'ToDoApp',
    demo: 'https://todolist-ticianomen.vercel.app/',
    repo: 'https://github.com/ticianomen/todolist',
  },
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920669-409bc435-70e1-4750-b83f-7ea362a384c3.png',
    description:'Movies App, List and track your chores',
    alt: 'MovieApp',
    demo: 'https://movies-ticianomen.vercel.app/',
    repo: 'https://github.com/ticianomen/Movies',
  },
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920666-b1072ca4-30e1-40f6-912e-d54966b171be.png',
    description:'Food App, Search and add your recipes',
    alt: 'FoodApp',
    demo: 'https://pi-food-ft-14b-ticianomen.vercel.app/',
    repo: 'https://github.com/ticianomen/PI-Food-FT14b',
  },
  {
    src: 'https://user-images.githubusercontent.com/83244923/133920670-59434d7b-0ca1-4c0c-89fc-2e51b03c6fe0.png',
    description:'Weather App, Search weather in different cities',
    alt: 'WeatherApp',
    demo: 'https://wheather-app-ticianomen.vercel.app/',
    repo: 'https://github.com/ticianomen/wheatherApp',
  }
]

const slides = slidesData.map((slide,index) => (

  <div className='slide-container' key ={index}>
      <h2>{slide.alt}</h2>
      <img src={slide.src} alt={slide.alt} />
      <div className='slide-container__desc'>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <a href={slide.demo} target='_blank' rel='noreferrer' >
          <button>Demo</button>
        </a>
        <a href={slide.repo} target='_blank' rel='noreferrer' >
          <button>Repo</button>
        </a>
      </div>
      
      <span>{slide.description}</span>
      </div>
  </div>

))

export default slides;