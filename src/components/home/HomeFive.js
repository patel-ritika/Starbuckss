import React from 'react';
import "../../asset/styles/home/homefive.css";
import fall from "../../asset/images/home_img5.jpg";

const HomeFive = () => {
  return (
    <div className="home-five">
    {/* Left side: Image */}
    <div className="image-container_five">
        <img src={fall} alt="fall" className="fall-image" />
    </div>

    {/* Right side: Text content */}
    <div className="content_five">
        <h1>Fall favorites in your personal cup</h1>
        <h4>Wherever you order—café, drive-thru or app—bring in <br /> your own clean cup to help reduce waste and earn<br />Rewards.**</h4>
        <button className="order-button">Learn more</button>
    </div>
</div>
  );
}

export default HomeFive;
