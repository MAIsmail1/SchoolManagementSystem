import React, { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/images/open-quran.jpg",
      alt: "Open Quran",
    },
    {
      src: "/images/students-in-masjid.jpg",
      alt: "Students in Masjid",
    },
    {
      src: "/images/masjid-classroom.jpg", 
      alt: "Masjid Classroom",
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          {/* Dark overlay with increased opacity */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          <img 
            src={slide.src} 
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Slide title with guaranteed readability */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-sm text-white bg-green-900 bg-opacity-70 px-3 py-1 rounded">
              {slide.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlideshow;