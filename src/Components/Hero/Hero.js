import React from 'react';
import './Hero.css';
import {Carousel} from 'react-bootstrap'
import banner1 from '../Assets/banner1.jpg'
import banner2 from '../Assets/banner2.jpg'
import banner3 from '../Assets/banner3.webp'


function Hero() {
  return (
    
    <Carousel className='carousel-container'>
      <Carousel.Item className='abc'>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
   
  


export default Hero