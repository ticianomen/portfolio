import React from 'react'
import './Cover.css';
import coverVideo from '../../assets/pexels-pavel-danilyuk-5495845.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='cover-container--video' src={coverVideo} autoPlay loop muted />
      <h1>Luciano Nicolas Pereira</h1>
      <p>FullStack Developer | Me especializo en FrontEnd | React</p>
    </div>
  )
}

export default Cover
