import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { works } from '../data/works';

const Hero: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative h-screen">
      <Slider {...settings} className="h-full">
        {works.map((work) => (
          <div key={work.id} className="h-screen">
            <div 
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${work.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 heading-gradient animate-float">
          TY.TATTOO
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl text-center text-gray-200 leading-relaxed">
          Искусство, которое остается с вами навсегда. Профессиональная тату-студия с индивидуальным подходом к каждому клиенту.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/appointment" className="btn-primary">
            Записаться
          </Link>
          <Link to="/gallery" className="btn-secondary">
            Галерея
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;