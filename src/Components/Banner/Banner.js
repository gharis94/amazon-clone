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
            
            <img height={10} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9Vo4hVJQJo8l3yh9-pvJIzPYEi_EgYHWQ3A0TlI0Ml3Dxn0wDVWfWoFSqzXiS7d6lB4&usqp=CAU'/>
            
            
            <img height={8} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVZGRXub01l-ihb7ocHlaTjubW9nrZWYO5vrV1BCCjDRGNr61KWBvYHKmgqqAJBuvxSE&usqp=CAU'/>
            
            
            <img height={5} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-men-design-template-2818871e3db2e116f1c47037d302d082_screen.jpg?ts=1611165853'/>
            
        </Carousel>
    
  )
}

export default Banner