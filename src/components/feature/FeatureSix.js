import React from 'react';
import "../../asset/styles/feature/featuresix.css";
import featuresixleft from "../../asset/images/feature7.jpg";
import featuresixright from "../../asset/images/feature8.webp";

const FeatureSix = () => {
  return (
    <div className="featuresix-container">
    {/* Left Section */}
    <div className="featuresix-section">
      <img src={featuresixleft} alt="Left Side Image" className="featuresix-image" />
      <div className="featuresix-content">
        <h2>New Turkey Sage Danish</h2>
        <h4>
        A crisp and flaky pastry with turkey and stuffing spices, enrobed in a<br />
        creamy béchamel sauce.
        </h4>
        <button className="feature_six_order-button">Order now</button>
      </div>
    </div>

    <div className="featuresix-section">
      <img src={featuresixright} alt="Right Side Image" className="featuresix-image" />
      <div className="featuresix-content">
        <h2>New Snowman Cake Pop</h2>
        <h4>
        Vanilla cake mixed with buttercream, dipped in white-chocolaty<br />
        icing with a snowman face and earmuffs.
        </h4>
        <button className="feature_six_order-button">Order now</button>
      </div>
    </div>
  </div>
  );
}

export default FeatureSix;
