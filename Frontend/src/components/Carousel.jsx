import React, { useEffect, useState } from 'react';
import '@/assets/css/carousel.css';


const images = [
  "https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-un.jpg?updatedAt=1722102898926",
  "https://ik.imagekit.io/rqds6dyata/vita-vilcina-KtOid0FLjqU-unsplas.jpg?updatedAt=1722102898867",
  "https://ik.imagekit.io/rqds6dyata/pexels-ahmet-cotur-776571149-190.jpg?updatedAt=1722102898601",
  "https://ik.imagekit.io/rqds6dyata/pexels-harrisonhaines-6292341%20(1).jpg?updatedAt=1722102898637",
  "https://ik.imagekit.io/rqds6dyata/pexels-nuno-obey-34504-128303%20(1).jpg?updatedAt=1722102898633",
  "https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-un.jpg?updatedAt=1722102898926",
  "https://ik.imagekit.io/rqds6dyata/vita-vilcina-KtOid0FLjqU-unsplas.jpg?updatedAt=1722102898867",
  "https://ik.imagekit.io/rqds6dyata/pexels-ahmet-cotur-776571149-190.jpg?updatedAt=1722102898601",
  "https://ik.imagekit.io/rqds6dyata/pexels-harrisonhaines-6292341%20(1).jpg?updatedAt=1722102898637",
  "https://ik.imagekit.io/rqds6dyata/pexels-nuno-obey-34504-128303%20(1).jpg?updatedAt=1722102898633"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getImageClass = (index) => {
    if (index === current) return 'current';
    if (index === (current + 1) % images.length) return 'next';
    if (index === (current - 1 + images.length) % images.length) return 'prev';
    return 'hidden';
  };

  return (
    <div id="carousel">
      <figure id="spinner">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className={getImageClass(index)} />
        ))}
      </figure>
    </div>
  );
};

export default Carousel;
