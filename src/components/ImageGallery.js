import React from 'react';
import './ImageGallery.css'; // Import your CSS file for styling
import image1  from './images/image-1.webp'
import image2  from './images/image-3.webp'
import image3  from './images/image-4.webp'
import image4  from './images/image-5.webp'
import image5  from './images/image-6.webp'
import image6  from './images/image-7.webp'
import image7  from './images/image-8.webp'
import image8  from './images/image-9.webp'
import image9  from './images/image-10.jpeg'
import image10  from './images/image-11.jpeg'


function ImageGallery() {
  // Sample image data with URLs
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ];

  return (
    <div className="image-gallery">
      {images.map((imageUrl, index) => (
        <div key={index} className={index === 0 ? 'featured-image' : 'image'}>
          <img className='img' src={imageUrl} alt={imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
