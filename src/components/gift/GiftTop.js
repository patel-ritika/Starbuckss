import React, {useState} from 'react';
import "../../asset/styles/gift/gifttop.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import img1 from "../../asset/images/giftfeature1.avif";
import img2 from "../../asset/images/giftfeature2.jpg";
import img3 from "../../asset/images/giftfeature3.avif";
import img4 from "../../asset/images/giftfeature4.webp";
import img5 from "../../asset/images/giftfeature5.webp";
import img6 from "../../asset/images/giftfeature6.avif";
import img7 from "../../asset/images/giftfeature7.png";
import img8 from "../../asset/images/giftfeature8.webp";
import img9 from "../../asset/images/giftfeature9.avif";
import img10 from "../../asset/images/giftfeature10.jpg";
import img11 from "../../asset/images/giftfeature11.avif";
import img12 from "../../asset/images/giftfeature12.jpg";
import img13 from "../../asset/images/giftfeature13.webp";
import img14 from "../../asset/images/giftfeature14.png";
import img15 from "../../asset/images/giftfeature15.webp";
import img16 from "../../asset/images/giftfeature16.png";

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
  ];
  
  function GiftTop() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      if (currentIndex + 4 < images.length) {
        setCurrentIndex(currentIndex + 4);
      }
    };
  
    const handlePrevious = () => {
      if (currentIndex - 4 >= 0) {
        setCurrentIndex(currentIndex - 4);
      }
    };


  return (
    <div className="giftTop">
    <div className="giftTopHeader">
      <div className="gift_headerLeft">
        <h1>Gift Cards</h1>
        <h5>FEATURED</h5>
      </div>
      <div className="gift_headerRight">
        <h5>See all</h5>
      </div>
    </div>

    <div className="imageCarousel">
      <button
        className="navButton prevButton"
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        <IoIosArrowBack />
      </button>

      <div className="imageRow">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <img key={index} src={image} alt={`Gift ${currentIndex + index + 1}`} />
        ))}
      </div>

      <button
        className="navButton nextButton"
        onClick={handleNext}
        disabled={currentIndex + 4 >= images.length}
      >
        <IoIosArrowForward />
      </button>
    </div>
  </div>
  );
}

export default GiftTop;
