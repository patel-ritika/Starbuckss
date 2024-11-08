import React from 'react';
import "../../asset/styles/feature/featurefive.css";
import featurefiveleft from "../../asset/images/feature5.webp";
import featurefiveright from "../../asset/images/feature6.webp";

const FeatureFive = () => {
  return (
    <div className="featurefive-container">
      {/* Left Section */}
      <div className="featurefive-section">
        <img src={featurefiveleft} alt="Left Side Image" className="featurefive-image" />
        <div className="featurefive-content">
          <h2>Iced Sugar Cookie Almondmilk Latte</h2>
          <h4>
          Starbucks® Blonde Espresso is combined with sugar cookie flavors<br />
          and almondmilk on ice. Red and green sprinkles are added for a<br />
          finishing touch.
          </h4>
          <button className="feature_five_order-button">Order now</button>
        </div>
      </div>

      <div className="featurefive-section">
        <img src={featurefiveright} alt="Right Side Image" className="featurefive-image" />
        <div className="featurefive-content">
          <h2>Chestnut Praline Latte</h2>
          <h4>
          Espresso and steamed milk join caramelized chestnut flavors with a<br />
          topping of whipped cream and spiced praline<br />
          crumbs.
          </h4>
          <button className="feature_five_order-button">Order now</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureFive;
