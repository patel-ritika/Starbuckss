import React, {useState} from 'react';
import "../../asset/styles/rewards/rewardthird.css";
import img25 from '../../asset/images/rate1.webp';
import img100 from '../../asset/images/rate2.webp';
import img200 from '../../asset/images/rate3.png';
import img300 from '../../asset/images/rate4.webp';
import img400 from '../../asset/images/rate5.webp';
import { FaStar } from 'react-icons/fa';

const RewardThird = () => {
  const [activeNumber, setActiveNumber] = useState(25);

  const contentData = {
    25: { img: img25, heading: 'Customize your drink', paragraph: 'Make your drink just right with an extra espresso shot or a dash of your favorite syrup.' },
    100: { img: img100, heading: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more', paragraph: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.' },
    200: { img: img200, heading: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast', paragraph: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.' },
    300: { img: img300, heading: 'Sandwich, protein box or at-home coffee', paragraph: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.' },
    400: { img: img400, heading: 'Select Starbucks® merchandise', paragraph: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.' },
  };

  const handleClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="reward-container">
    <h1 className="reward-heading">Get your favorites for free</h1>

    <div className="reward-numbers">
      {[25, 100, 200, 300, 400].map((number) => (
        <div
          key={number}
          onClick={() => handleClick(number)}
          className="reward-number-item"
        >
          <span>{number}</span>
          <FaStar className="reward-star-icon" />
        </div>
      ))}
    </div>

    {activeNumber && (
      <div className="reward-content">
        <img src={contentData[activeNumber].img} alt="Selected" />
        <div>
          <h2>{contentData[activeNumber].heading}</h2>
          <p>{contentData[activeNumber].paragraph}</p>
        </div>
      </div>
    )}
  </div>
  );
}

export default RewardThird;
