import React, { useState } from "react";
import "./ImageGallery.css"; // Import your CSS file for styling
import image1 from "./images/image-1.webp";
import image2 from "./images/image-3.webp";
import image3 from "./images/image-4.webp";
import image4 from "./images/image-5.webp";
import image5 from "./images/image-6.webp";
import image6 from "./images/image-7.webp";
import image7 from "./images/image-8.webp";
import image8 from "./images/image-9.webp";
import image9 from "./images/image-10.jpeg";
import image10 from "./images/image-11.jpeg";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function ImageGallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: image1,
    },
    {
      id: 2,
      src: image2,
    },
    {
      id: 3,
      src: image3,
    },
    {
      id: 4,
      src: image4,
    },
    {
      id: 5,
      src: image5,
    },
    {
      id: 6,
      src: image6,
    },
    {
      id: 7,
      src: image7,
    },
    {
      id: 8,
      src: image8,
    },
    {
      id: 9,
      src: image9,
    },
    {
      id: 10,
      src: image10,
    },
  ]);

  const handleDrop = (sourceImageId, targetImageId) => {
    const updatedImages = [...images];
    const sourceIndex = updatedImages.findIndex((img) => img.id === sourceImageId);
    const targetIndex = updatedImages.findIndex((img) => img.id === targetImageId);

    if (sourceIndex !== -1 && targetIndex !== -1) {
      const sourceImage = updatedImages[sourceIndex];
      const targetImage = updatedImages[targetIndex];

      const tempOrder = sourceImage.id;
      sourceImage.id = targetImage.id;
      targetImage.id = tempOrder;

      updatedImages.sort((a, b) => a.id - b.id);

      setImages(updatedImages);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="title">Image Gallery</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            id={image.id}
            src={image.src}
            onDrop={handleDrop}
            isFeatured={index === 0}
          />
        ))}
      </div>
    </DndProvider>
  );
}

function ImageItem({ id, src, onDrop, isFeatured }) {
  const [, ref] = useDrag({
    type: "image",
    item: { id },
  });

  const [, drop] = useDrop({
    accept: "image",
    drop: (item) => {
      if (item.id !== id) {
        onDrop(item.id, id);
      }
    },
  });

  return (
    <div
      className={`image${isFeatured ? " featured-image" : ""}`}
      ref={(node) => ref(drop(node))}
    >
      <img className="img" src={src} alt={`Image ${id}`} />
    </div>
  );
}

export default ImageGallery;