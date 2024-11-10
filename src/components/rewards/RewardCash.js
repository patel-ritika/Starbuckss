import React from 'react';
import "../../asset/styles/rewards/rewardcash.css";
import { FaStar } from 'react-icons/fa';
import image1 from '../../asset/images/dollar1.png';
import image2 from '../../asset/images/dollar2.png';
import image3 from '../../asset/images/dollar3.webp';
import image4 from '../../asset/images/dollar4.png';

const RewardCash = () => {
  return (
    <div className="reward-cash-container">
    <h1 className="main-heading">Cash or card, you earn Stars</h1>
    <p className="description">
    No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to<br />
    (really delicious) Rewards.
    </p>

    <div className="dollar-part">
      <div className="dollarpart1">
        <div className="dollar-info">
          <h1>1<FaStar className="star-icon"/> per dollar</h1>
          <h4>Pay as you go</h4>
        </div>
        <div className="image-info">
          <img src={image1} alt="Feature 1" />
          <div className="text-content">
            <h4>Scan and pay separately</h4>
            <p>Use cash or credit/debit card at the<br />
             register.</p>
          </div>
        </div>
        <div className="image-info">
          <img src={image2} alt="Feature 2" />
          <div className="text-content">
            <h4>Save payment in the app</h4>
            <p>Check-out faster by saving a<br />
             credit/debit card or PayPal to your<br />
              account. You’ll be able to order ahead or<br />
               scan and pay at the register in one step.</p>
          </div>
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="dollarpart2">
      <div className="dollar-info">
      <h1>2<FaStar className="star-icon"/> per dollar</h1>
        <h4>Add funds in the app</h4>
        </div>
        <div className="image-info">
          <img src={image3} alt="Feature 3" />
          <div className="text-content">
            <h4>Preload</h4>
            <p>To save time and earn Stars twice as<br />
             fast, add money to your digital<br />
              Starbucks Card using any payment<br />
               option. Scan and pay in one step or<br />
                order ahead in the app.</p>
          </div>
        </div>
        <div className="image-info">
          <img src={image4} alt="Feature 4" />
          <div className="text-content">
            <h4>Register your gift card</h4>
            <p>Then use it to pay through the app. You<br />
             can even consolidate balances from<br />
              multiple cards in one place.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default RewardCash;
