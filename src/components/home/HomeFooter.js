import React from 'react';
import "../../asset/styles/home/homefooter.css";

const HomeFooter = () => {
  return (
    <div className="home-footer">
      <p className="paragraph-top">
      *Valid only for new Starbucks Rewards members for 7 days from sign up. Offer good at<br />
      participating stores for a handcrafted menu-sized beverage with eligible purchase ($8 max value).<br />
      Taxes not included. Excludes alcohol, Starbucks Card and Starbucks Card reloads. Limit one per<br />
      member. Cannot be combined with other offers or discounts. Product availability varies by store.<br />
      Excludes delivery services. Sign up from 9/23/2024 - 11/6/2024 to be eligible.
      </p>
      
      <div className="space"></div> {/* Adding space between paragraphs */}
      
      <p className="paragraph-bottom">
      **Valid for Starbucks Rewards members at participating stores on handcrafted beverage purchases<br />
      only (max 3x per day).
      </p>
      
    </div>
  );
}

export default HomeFooter;
