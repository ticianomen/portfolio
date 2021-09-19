import React from 'react'
import './Navbar.css';

const Navbar = ({ isScrolling }) => {
  const toTop = () => {
    //le decimos hacia donde se va a mover. con smooth hacemos que sea fluido y no de golpe.
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <nav className={`navbar-container ${isScrolling > 20 ? 'scrolling' : 0}`}>
      <div className='navbar-container__logo' onClick={toTop}>Ticiano</div>
    </nav>
  )
}

export default Navbar
