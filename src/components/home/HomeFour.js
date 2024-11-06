import React from 'react';
import "../../asset/styles/home/homefour.css";
import spice from "../../asset/images/home_img4.jpg"

const HomeFour = () => {
  return (
    <div className="home-four">
      {/* Left side: Text content */}
      <div className="content_four">
        <h1>Spicefully yours</h1>
        <h4>A delightful fall treat, the Pumpkin Cream<br /> Cheese Muffin is back and ready to pair with<br /> your favorite beverage.</h4>
        <button className="join-button">Order now</button>
      </div>

      {/* Right side: Image */}
      <div className="image-container_four">
        <img src={spice} alt="spice" className="spice-image" />
      </div>
    </div>
  );
}

export default HomeFour;
