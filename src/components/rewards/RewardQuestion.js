import React from 'react';
import "../../asset/styles/rewards/rewardquestion.css";

const RewardQuestion = () => {
  return (
    <div className="reward-question">
      <h1 className="centered-title">Questions?</h1>
      <h5 className="question_sub-heading">We want to help in any way we can. You can ask your barista anytime or we’ve answered the <br />
      most commonly asked terms right over here.</h5>
      <div className="question_content-section">
        <div className="offwhite-background">
          <p>At participating stores. Restrictions apply.</p>
          <p>1Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be earned on purchases of alcohol, Starbucks Cards <br />
         and Starbucks Card reloads. For details, visit deltastarbucks.com/terms</p>
          <p>2At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may not be earned<br />
           on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit Terms and Conditions</p>
          <p>3Individuals must link loyalty program accounts to participate in offer. Members with linked accounts will earn: (a) double Starbucks Rewards Stars on Qualifying Starbucks Transactions during Eligible Stays at Participating<br />
           Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during<br />
            Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made at U.S. participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift. To earn Double<br />
             Stars, the applicable stay must qualify as an Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer terms and conditions. Other restrictions and exclusions apply. For full offer terms and conditions, visit <br />
           Starbucks.com/MarriottBonvoy. Marriott Bonvoy® and its affiliated brands and hotels are the registered trademarks and/or service marks of Marriott International, Inc. and its affiliates. Used under license from Marriott <br />
           International, Inc.↩</p>
      

        <div className="question_left-section">
          <h5>EARNING STARS</h5>
          <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
          <p>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit <br />
          cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a<br />
           payment method and pay directly through the app.</p>
          <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can<br />
           also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered <br />
           physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks <br />
           Card (regardless of whether it is registered) to complete the purchase.</p>
          
          
          <h5>BENEFITS</h5>
          <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have<br />
           made at least one Star-earning transaction.</p>
        </div>

        <div className="question_right-section">
          <h5>TERMS OF USE</h5>
          <p>For full program details visit starbucks.com/rewards/terms.</p>
          <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability<br />
           to honor Rewards at this time. Visit the Starbucks Store Locator and search for locations honoring<br />
            “Redeem Rewards”.</p>

          <h5>REDEEMING REWARDS</h5>
          <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any <br />
          beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. <br />
          Select stores redeem 200 Stars for free food or drink items only.</p>
        </div>
      </div>
      </div>
      <hr className="divider" />
    </div>
  
  );
}

export default RewardQuestion;
