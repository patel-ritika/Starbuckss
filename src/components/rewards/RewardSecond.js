import React from 'react';
import "../../asset/styles/rewards/rewardsecond.css";

const RewardSecond = () => {
  return (
    <div className="reward-second">
      <h1>Getting started is easy</h1>
      <h5>Earn Stars and get rewarded in a few easy steps.</h5>

      <div className="row">
        {/* First Part */}
        <div className="section">
          <div className="round">1</div>
          <h3>Create an account</h3>
          <p>To get started, <span>join now.</span> You can also <span>Join in the app</span><br />
          to get access to the full range of Starbucks® Rewards<br />
          benefits.</p>
        </div>

        {/* Second Part */}
        <div className="section">
          <div className="round">2</div>
          <h3>Order and pay how you'd like</h3>
          <p>Use cash, credit/debit card or save some time and<br />
          pay right through the app. You’ll collect Stars all<br />
          ways. <span>Learn how</span></p>
        </div>

        {/* Third Part */}
        <div className="section">
          <div className="round">3</div>
          <h3>Earn Stars, get Rewards</h3>
          <p>As you earn Stars, you can redeem them for Rewards<br />
          —like free food, drinks, and more. Start redeeming<br />
          with as little as 25 Stars!</p>
        </div>
      </div>
    </div>
 
  );
}

export default RewardSecond;
