import React, { useState } from "react";
import "./ImageGallery.css"; // Import your CSS file for styling
import image1 from "./images/image-11.jpeg";
import image2 from "./images/image-3.webp";
import image3 from "./images/image-4.webp";
import image4 from "./images/image-5.webp";
import image5 from "./images/image-6.webp";
import image6 from "./images/image-7.webp";
import image7 from "./images/image-8.webp";
import image8 from "./images/image-9.webp";
import image9 from "./images/image-10.jpeg";
import image10 from "./images/image-1.webp";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoIosCheckbox } from "react-icons/io";
import ImageItem from "./ImageItem";

function ImageGallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: image1,
      isChecked: false,
    },
    {
      id: 2,
      src: image2,
      isChecked: false,
    },
    {
      id: 3,
      src: image3,
      isChecked: false,
    },
    {
      id: 4,
      src: image4,
      isChecked: false,
    },
    {
      id: 5,
      src: image5,
      isChecked: false,
    },
    {
      id: 6,
      src: image6,
      isChecked: false,
    },
    {
      id: 7,
      src: image7,
      isChecked: false,
    },
    {
      id: 8,
      src: image8,
      isChecked: false,
    },
    {
      id: 9,
      src: image9,
      isChecked: false,
    },
    {
      id: 10,
      src: image10,
      isChecked: false,
    },
  ]);

  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (sourceImageId, targetImageId) => {
    const updatedImages = [...images];
    const sourceIndex = updatedImages.findIndex(
      (img) => img.id === sourceImageId
    );
    const targetIndex = updatedImages.findIndex(
      (img) => img.id === targetImageId
    );

    if (sourceIndex !== -1 && targetIndex !== -1) {
      const sourceImage = updatedImages[sourceIndex];
      const targetImage = updatedImages[targetIndex];

      const tempOrder = sourceImage.id;
      sourceImage.id = targetImage.id;
      targetImage.id = tempOrder;

      updatedImages.sort((a, b) => a.id - b.id);

      setImages(updatedImages);
      setIsDragging(false);
    }
  };

  function handleCheckboxChange(event, id) {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, isChecked: !image.isChecked };
      }
      return image;
    });

    setImages(updatedImages);
  }

  const handleDeleteImages = () => {
    const updatedImages = images.filter((image) => !image.isChecked);
    setImages(updatedImages);
  };

  const checkedImageCount = images.filter((image) => image.isChecked).length;

  return (
    <DndProvider backend={HTML5Backend}>
      {checkedImageCount > 0 ? (
        <div className="selected-image">
          <div className="check-items">
            <IoIosCheckbox className="ios-checkbox" />
            <div className="checked-count">
              {checkedImageCount} Files Selected
            </div>
          </div>
          <button className="btn" onClick={handleDeleteImages}>
            Delete files
          </button>
        </div>
      ) : (
        <h1 className="title">Gallery</h1>
      )}
      <div className={`image-gallery ${isDragging ? "dragging" : ""}`}>
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            id={image.id}
            src={image.src}
            onDrop={handleDrop}
            isFeatured={index === 0}
            isChecked={image.isChecked}
            onCheckboxChange={(e) => handleCheckboxChange(e, image.id)}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          />
        ))}
      </div>
    </DndProvider>
  );
}

export default ImageGallery;
