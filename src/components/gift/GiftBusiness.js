import React from 'react';
import "../../asset/styles/gift/giftbusiness.css";
import businessImage from '../../asset/images/business.webp';

const GiftBusiness = () => {
  return (
    <div className="gift-business">
      <img src={businessImage} alt="Business Gifting" className="business_gift-image" />
      <div className="business_gift-content">
        <h2>Business gifting - simplified</h2>
        <p>
        Bulk send physical or digital Starbucks Cards to<br />
         gift, reward, incentivize, or show appreciation<br />
          towards your customers, clients and team<br />
           members. Minimum 15 cards per order.
        </p>
        <button className="business_shop-now-button">Shop now</button>
      </div>
    </div>
  );
}

export default GiftBusiness;
