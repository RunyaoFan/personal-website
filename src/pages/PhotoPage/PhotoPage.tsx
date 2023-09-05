import React, { useState } from "react";

import './styles.css';

const IMAGES = [
  { src: "https://runyaosphotos.s3.amazonaws.com/20200427_1.png", caption: "Zhengzhou, China, 3 May 2020" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20200512_1.png", caption: "Zhengzhou, China, 12 May 2020" },
  { src: "https://runyaosphotos.s3.amazonaws.com/000084150001.jpg", caption: "Zhengzhou, China, 13 May 2020" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20210926_1.png", caption: "New York, United States, 26 Sep 2021" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20220315_1.png", caption: "Casablanca, Morocco, 15 Mar 2022" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20220317_1.png", caption: "Tangier, Morocco, 17 Mar 2022" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20220320_1.png", caption: "Marrakesh, Morocco, 20 Mar 2022" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20221216_1.png", caption: "Champaign, United States, 16 Dec 2022" },
  { src: "https://runyaosphotos.s3.amazonaws.com/20221227_1.png", caption: "Havana, Cuba, 27 Dec 2022" },
];

const PhotoPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handleSelectImage = (index: React.SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
    <div className="main-content">
        <button onClick={handlePrev}>{"<"}</button>
        
        <img
            src={IMAGES[currentImageIndex].src}
            alt={IMAGES[currentImageIndex].caption}
        />

        <button onClick={handleNext}>{">"}</button>
    </div>

    <p className="caption-responsive">{IMAGES[currentImageIndex].caption}</p>

    <div className="previews">
        {IMAGES.map((img, index) => (
            <img
                key={index}
                src={img.src}
                alt={img.caption}
                onClick={() => handleSelectImage(index)}
                style={{ cursor: "pointer", height: "5vh" }}
            />
        ))}
    </div>
</div>
  );
};

export default PhotoPage;
