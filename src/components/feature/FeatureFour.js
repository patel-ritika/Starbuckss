import React from 'react';
import "../../asset/styles/feature/featurefour.css";
import featurefourleft from "../../asset/images/feature3.jpg";
import featurefourright from "../../asset/images/feature4.jpg";

const FeatureFour = () => {
  return (
    <div className="featurefour-container">
      {/* Left Section */}
      <div className="featurefour-section">
        <img src={featurefourleft} alt="Left Side Image" className="featurefour-image" />
        <div className="featurefour-content">
          <h2>Caramel Brulee Latte</h2>
          <h4>
          Espresso, steamed milk and caramel brulée sauce are finished with<br />
          whipped cream and a crunchy caramel brulée topping.
          </h4>
          <button className="feature_four_order-button">Order now</button>
        </div>
      </div>

      <div className="featurefour-section">
        <img src={featurefourright} alt="Right Side Image" className="featurefour-image" />
        <div className="featurefour-content">
          <h2>Iced Gingerbread Oatmilk Chai</h2>
          <h4>
          Warm notes of gingerbread are combined with cozy chai spices and<br />
          creamy oatmilk for a festive tea latte on ice.
          </h4>
          <button className="feature_four_order-button">Order now</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureFour;
