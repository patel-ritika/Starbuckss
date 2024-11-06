import React from 'react';
import "../../asset/styles/home/homethird.css";
import sampleImage from '../../asset/images/home_img3.webp';

const HomeThird = () => {
  return (
    <div className="home-third">
            {/* Left side: Image */}
            <div className="image-container_third">
                <img src={sampleImage} alt="Pumpkin" className="sample-image" />
            </div>

            {/* Right side: Text content */}
            <div className="content_third">
                <h1>A bunch of<br></br>
                delicious</h1>
                <h4>Ripe for the sippin’, enjoy the new Iced Apple <br /> Crisp Nondairy Cream Chai, beloved Apple<br />
                Crisp Oatmilk Macchiato or Apple Crisp<br />
                Oatmilk Shaken Espresso.</h4>
                <button className="order-button_third">Order Now</button>
            </div>
        </div>
  );
}

export default HomeThird;
