import React from 'react';
import "../../asset/styles/previous/previoustop.css";
import previousImage from '../../asset/images/previous.webp';

const PreviousTop = () => {
  return (
    <div className="previous-top-container">
      <h2 className="previous-top-title">Previous</h2>
      <img src={previousImage} alt="Your Image" className="previous-top-image" />
      <h1 className="previous-top-heading">When history repeats<br />itself</h1>
      <p className="previous-top-paragraph">
        Previous orders will appear here to<br />
        quickly order again.
      </p>
      <div className="previous-top-buttons">
        <button className="previous-top-button">Sign in</button>
        <button className="previous-top-button">Join now</button>
      </div>
      <hr className="previous-top-line" />
    </div>
  );
}

export default PreviousTop;
