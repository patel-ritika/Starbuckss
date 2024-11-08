import React from 'react';
import "../../asset/styles/favorite/favoritetop.css";
import favoriteImage from '../../asset/images/favorite.webp';

const FavoriteTop = () => {
  return (
    <div className="favorite-top-container">
      <h2 className="favorite-top-title">Favorites</h2>
      <img src={favoriteImage} alt="Your Image" className="favorite-top-image" />
      <h1 className="favorite-top-heading">Save your favorite<br />mixes</h1>
      <p className="favorite-top-paragraph">
      Use the heart to save<br />
      customizations. Your favorites will<br />
      appear here to order again.
      </p>
      <div className="favorite-top-buttons">
        <button className="favorite-top-button">Sign in</button>
        <button className="favorite-top-button">Join now</button>
      </div>
      <hr className="favorite-top-line" />
    </div>
  );
}

export default FavoriteTop;
