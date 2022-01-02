import React from 'react';
import { Button } from './Button';
import '../App.css';
import'./HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-container'>
           <video src='/videos/video-2.mp4' autoPlay loop muted/>
            <h1>Adventure Awaits</h1>
            <p>What areyou waiting for ?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                    Get Started
                </Button>

                <Button className='btn'          buttonSize='btn--large' buttonStyle='btn--primary'>
                    Watch Trailer <i className='far fa-play-cirle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
