import React from 'react';
import "../../asset/styles/home/homesecond.css";
import treatImage from '../../asset/images/home_img2.webp';

const HomeSecond = () => {
  return (
    <div className="home-second">
      {/* Left side: Text content */}
      <div className="content_second">
        <h1>Your Treat Awaits</h1>
        <h4>Fall in love with Starbucks® Rewards member perks, like a<br /> free drink with qualifying purchase during your first week.<br /> Valid for one-time use.*</h4>
        <button className="join-button">Join Now</button>
      </div>

      {/* Right side: Image */}
      <div className="image-container_second">
        <img src={treatImage} alt="Treat" className="treat-image" />
      </div>
    </div>
  );
}

export default HomeSecond;
