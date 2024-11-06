import React from 'react';
import "../../asset/styles/home/hometop.css";
import pumpkinImage from '../../asset/images/home_img1.jpg';

const HomeTop = () => {
  return (
    <div className="home-top">
            {/* Left side: Image */}
            <div className="image-container">
                <img src={pumpkinImage} alt="Pumpkin" className="pumpkin-image" />
            </div>

            {/* Right side: Text content */}
            <div className="content">
                <h1>It's a Pumpkin Party</h1>
                <h4>The season's favorite makes fall fall. Enajoy the <br /> moment--hot, iced or blended.</h4>
                <button className="order-button">Order Now</button>
            </div>
        </div>
  );
}

export default HomeTop;
