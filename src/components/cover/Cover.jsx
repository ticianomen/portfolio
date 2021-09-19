import React from 'react'
import './Cover.css';
import coverVideo from '../../assets/coverVideo3.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='cover-container--video' src={coverVideo} autoPlay loop muted />
      <h1>Ticiano Yoel Mensegue</h1>
      <p>FullStack Developer | Especialized in Back-End | React</p>
    </div>
  )
}

export default Cover
