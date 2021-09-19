import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-container__info'>
        <h1>Ticiano Yoel Mensegue</h1>
        <p>Capital Federal, Buenos Aires, Argentina</p>
      </div>
      <div className='footer-container__contact'>
        <h3>Contact me</h3>
        <p>Let's work together</p>
      </div>
      <div className='footer-sns'>
        <div className='footer-sns--desing'>
          Designed by Ticiano Mensegue
        </div>
        <div className='footer-sns--links'>
          <a href="https://www.linkedin.com/in/ticiano-mensegue/" target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a href="https://github.com/ticianomen " target='_blank' rel='noreferrer'>
            <i className='fab fa-github github'></i>
          </a>
          {/* <a href="https://twitter.com/ticianomense" target='_blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
