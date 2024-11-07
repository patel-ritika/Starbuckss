import React from 'react';
import "../../asset/styles/feature/featuretop.css";
import yourImage from '../../asset/images/feature1.webp';

const FeatureTop = () => {
  return (
    <div className="feature-container">
      <h1 className="feature-heading">The cheer is here</h1>
      <div className="feature-content-wrapper">
        <img src={yourImage} alt="Feature" className="feature-image" />
        <div className="feature-text-container">
          <h2>Let's celebrate the season, together</h2>
          <h4>Your festive faves, like the Peppermint Mocha, are back.<br />Perfect for a little holiday magic that’s delicious hot, iced<br />or blended.</h4>
          <button className="feature-button">Order now</button>
        </div>
      </div>
    </div>
  );
}



export default FeatureTop;
