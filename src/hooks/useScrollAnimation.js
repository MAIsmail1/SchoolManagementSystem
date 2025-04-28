import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mark the element as animated when it comes into view
            setAnimatedElements((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Stop observing this element once it's animated
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of element is visible
      }
    );

    // Find and observe elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => {
      observerRef.current.observe(el);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Helper function to get animation classes
  const getAnimationClasses = (elementId) => {
    return animatedElements[elementId] 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-10';
  };

  return { getAnimationClasses };
};

export default useScrollAnimation;