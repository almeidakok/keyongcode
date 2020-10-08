import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    

    return (
        <div className='hero-container'>
           <video src='/videos/video-2.mp4' autoPlay loop muted />
           <h1>Desenvolvimento Front-End</h1>
           <p></p>
           <div className="hero-btns">
               <Button
                 className='btns'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
               >
                 PROMOÇÕES
               </Button>
               <Button
                 className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
               >
                 NAVEGUE <i className='far fa-play-circle' />
               </Button>
           </div>
         </div> 
    )
}

export default HeroSection
