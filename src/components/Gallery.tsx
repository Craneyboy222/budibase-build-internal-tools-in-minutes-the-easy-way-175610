import React from 'react';
import 'tailwindcss/tailwind.css';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery item ${index + 1}`} className="w-full h-auto rounded shadow-md" />
      ))}
    </div>
  );
};

export default Gallery;