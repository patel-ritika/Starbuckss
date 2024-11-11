import React from 'react';
import "../../asset/styles/gift/giftsecond.css";
import { FaStar } from 'react-icons/fa';
import giftImage from '../../asset/images/add.webp'; 

const GiftSecond = () => {
  return (
    <div className="gift-container">
      {/* Off-white section with image and text */}
      <div className="gift-offwhite-section">
        <img src={giftImage} alt="Gift" className="gift-image" />
        <h5 className="gift-text">Effortlessly send up to 10 eGifts per purchase. Select a design to start!</h5>
      </div>

      {/* Greenish section with heading, text, buttons, and link */}
      <div className="gift-green-section">
        <h3>Received a gift card?</h3>
        <h4>
          Earns 2 <FaStar /> per $1
        </h4>
        <div className="gift-buttons">
          <button className="btn add-reload">Add or Reload</button>
          <button className="btn check-balance">Check balance</button>
        </div>
        <h5 className="gift-terms">Card Terms & Conditions</h5>
      </div>
    </div>
  );
}

export default GiftSecond;
