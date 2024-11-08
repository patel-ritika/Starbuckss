import React from 'react';
import "../../asset/styles/feature/featuresecond.css";
import yourImage from '../../asset/images/feature2.jpg';

const FeatureSecond = () => {
  return (
    <div className="feature-second-container">
      <div className="feature-second-text">
        <h2>Celebrate Every Moment</h2>
        <h4>Experience joy with our exclusive products.<br />Bring magic to your everyday life.<br />Order now and make every day special!</h4>
        <button className="feature-second-button">Order now</button>
      </div>
      <img src={yourImage} alt="Feature" className="feature-second-image" />
    </div>
  );
}

export default FeatureSecond;
