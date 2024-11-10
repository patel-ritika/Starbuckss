import React from 'react';
import "../../asset/styles/rewards/rewardend.css";
import img1 from '../../asset/images/end1.webp';
import img2 from '../../asset/images/end2.webp';
import img3 from '../../asset/images/end3.webp';

const RewardEnd = () => {
  return (
    <div className="rewardend-container">
      <h1 className="rewardend-heading">Endless Extras</h1>
      <p className="rewardend-subheading">Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering,<br />
      tasty Rewards and—yes, free coffee.</p>

      <div className="rewardend-sections">
        {/* Left Section */}
        <div className="rewardend-section">
          <img src={img1} alt="Left Reward" className="rewardend-image" />
          <h4 className="rewanded-fun">Fun freebies</h4>
          <p className="rewardend-paragraph">Not only can you earn free coffee, look forward to a<br />
          birthday treat plus coffee and tea refills.</p>
          <h5 className="rewardend-learnmore">Learn more</h5>
        </div>

        {/* Center Section */}
        <div className="rewardend-section">
          <img src={img2} alt="Center Reward" className="rewardend-image" />
          <h4 className="rewanded-fun">Order & pay ahead</h4>
          <p className="rewardend-paragraph">Master the art of ordering ahead with saved<br />
          favorites and payment methods.</p>
          <h5 className="rewardend-learnmore">Learn more</h5>
        </div>

        {/* Right Section */}
        <div className="rewardend-section">
          <img src={img3} alt="Right Reward" className="rewardend-image" />
          <h4 className="rewanded-fun">Get to free faster</h4>
          <p className="rewardend-paragraph">Earn Stars even quicker with Bonus Star challenges,<br />
          Double Star Days and exciting games.</p>
          <h5 className="rewardend-learnmore">Learn more</h5>
        </div>
      </div>
    </div>
  );
}

export default RewardEnd;
