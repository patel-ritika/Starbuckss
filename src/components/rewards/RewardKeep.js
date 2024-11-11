import React from 'react';
import "../../asset/styles/rewards/rewardkeep.css";
import image1 from '../../asset/images/keep1.png';
import image2 from '../../asset/images/keep2.webp';
import image3 from '../../asset/images/keep3.png';

const RewardKeep = () => {
  return (
    <div className="reward-keep-container">
    <h1 className="heading">Keep the Rewards Coming</h1>
    <p className="intro-text">The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
    
    <div className="keep-parts">
      <div className="keeppart1">
        <img src={image1} alt="Part 1" className="image_keep" />
        <p>Link your Deta SkyMiles and Starbucks® Rewards<br />
         accounts to earn miles on Starbucks Card reloads of $25<br />
          or more, plus Double Stars on travel days.1</p>
      </div>
      
      <div className="keeppart2">
        <img src={image2} alt="Part 2" className="image_keep" />
        <p>Link your Bank of America eligible card and Starbucks®<br /> 
        Rewards account to earn 2% Cash Back and Bonus Stars<br />
         on qualifying Starbucks in-app purchases.2</p>
      </div>
      
      <div className="keeppart3">
        <img src={image3} alt="Part 3" className="image_keep" />
        <p>Link your Marriott Bonvoy and Starbucks® Rewards<br />
         accounts to earn Double Stars during eligible stays, points<br />
          during any Marriott Bonvoy Week and more.3</p>
      </div>
    </div>

    <div className="keep_join-button-container">
        <button className="keep_join-button">Join Starbucks Rewards</button>
      </div>
    </div>
  );
}

export default RewardKeep;
