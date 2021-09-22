import React from 'react'
import Carousel, { slidesToShowPlugin,arrowsPlugin } from '@brainhubeu/react-carousel'; //importamos el carousel
import '@brainhubeu/react-carousel/lib/style.css'; //importamos el css que viene instalado en el paquete
import { Icon } from '@iconify/react'

import Data from './Data';
import './Slider.css'
const Slider = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-container__title'>
        <h2>My projects</h2>
      </div>
     
      <Carousel
        
        plugins={['centered',
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <button className="icon-button"><Icon icon="ion:chevron-back-outline" width="40"/></button>,
              arrowLeftDisabled:<button style={{display:'none'}}></button>,
              arrowRight: <button className="icon-button"><Icon icon="ion:chevron-forward-outline" width="40" /></button>,
              arrowRightDisabled: <button style={{display:'none'}}></button>,
              addArrowClickHandler: true,
            }
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            }
          },
        ]}
        breakpoints={{
          960: {
            plugins: ['centered',
              {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <button className="icon-button"><Icon icon="ion:chevron-back-outline" width="40"  /></button>,
              arrowLeftDisabled:<button style={{display:'none'}}></button>,
              arrowRight: <button className="icon-button"><Icon icon="ion:chevron-forward-outline" width="40" /></button>,
              arrowRightDisabled: <button style={{display:'none'}}></button>,
              addArrowClickHandler: true,
            }
          },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          }
        }}
      >
        {Data}
      </Carousel>
    </div>
  )
}

export default Slider
