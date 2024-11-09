import React from 'react';
import "../../asset/styles/rewards/rewardtop.css";
import laptopImage from '../../asset/images/reward_top.webp';

const RewardTop = () => {
  return (
    <div className="container">
    <img src={laptopImage} alt="Laptop" className="image" />
  </div>
  );
}

export default RewardTop;
