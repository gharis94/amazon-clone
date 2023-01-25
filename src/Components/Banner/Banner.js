import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
    Carousel
} from 'react-responsive-carousel';

const Banner = () => {
  return (
    
        <Carousel
            
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showIndicators={false}
            showThumbs={false}

        >
            
            <img className='h-1/2 object-cover' alt='banner' src='https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
            
            
            <img className='h-1/2 object-cover' alt='banner' src='https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80'/>
            
            
            <img className='h-1/2 object-cover' alt='banner' src='https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80'/>
            
        </Carousel>
    
  )
}

export default Banner