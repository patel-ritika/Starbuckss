import React from 'react';
import "../../asset/styles/feature/featurethird.css";
import leftImage from '../../asset/images/feature_img1.webp'; 
import rightImage from '../../asset/images/feature_img2.webp';

const FeatureThird = () => {
  return (
    <div className="featurethird-container">
      {/* Left Section */}
      <div className="featurethird-section">
        <img src={leftImage} alt="Left Side Image" className="featurethird-image" />
        <div className="featurethird-content">
          <h2>Elphaba's Cold Brew</h2>
          <h4>
          A thrillifying creation inspired by the film WICKED. Starbucks®<br />
          signature Cold Brew sweetened with peppermint-flavored syrup,<br />
          topped with nondairy matcha cold foam and a dusting of magical<br />
          candy sprinkles.
          </h4>
          <button className="feature_third_order-button">Order now</button>
        </div>
      </div>

      <div className="featurethird-section">
        <img src={rightImage} alt="Right Side Image" className="featurethird-image" />
        <div className="featurethird-content">
          <h2>Glinda's Pink Potion</h2>
          <h4>
          A fantabulous Starbucks Refreshers® Beverage inspired by the film<br />
          WICKED. Crafted with sweet mango and dragonfruit flavors, creamy<br />
          coconutmilk and real dragonfruit. Topped with nondairy strawberry<br />
          cold foam and sprinkles.
          </h4>
          <button className="feature_third_order-button">Order now</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureThird;
