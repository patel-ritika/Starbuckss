import React from 'react';
import "../../asset/styles/gift/giftquestion.css";

const GiftQuestion = () => {
  return (
    <div className="gift-question-container">
      {/* Left section */}
      <div className="gift-question-left">
        <h4>About eGift cards</h4>
        <p>A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is purchased and sent<br />
         digitally.</p>
        <p>For Senders of an eGift, go to eGift History when signed in to view, send, or resend eGifts you’ve<br />
         purchased — or, to directly contact Starbucks eGift Support for help with your order.</p>
        <h4>Questions around eGift cards?</h4>
        <p>Check our Frequently Asked Questions — your question might already be answered. There, you’ll<br />
         find answers for all Starbucks Gift Cards in general (including eGifts).</p>
        <button className="gift-question-button">Card FAQs</button>
      </div>

      {/* Right section */}
      <div className="gift-question-right">
        <h4>About Starbucks Gift Cards in general</h4>
        <p>Starbucks Gift Cards, including eGifts, can be used to pay in a Starbucks store or to join Starbucks®<br />
         Rewards.</p>
        <p>Register Gift Cards and eGifts to a Starbucks® Rewards account and earn 2★ per dollar every time<br />
         you pay with that card. Those Stars quickly add up to free food, drinks, and more!</p>
        <button className="gift-question-button">Card Terms & Conditions</button>
      </div>
    </div>
  );
}

export default GiftQuestion;
