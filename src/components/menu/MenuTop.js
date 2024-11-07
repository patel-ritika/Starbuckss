import React from 'react';
import "../../asset/styles/menu/menutop.css";

import drinkImg1 from '../../asset//images/drinks1.avif';
import drinkImg2 from '../../asset/images/drinks2.avif';
import drinkImg3 from '../../asset/images/drinks3.avif';
import drinkImg4 from '../../asset/images/drinks4.avif';
import drinkImg5 from '../../asset/images/drinks5.avif';
import drinkImg6 from '../../asset/images/drinks6.avif';
import drinkImg7 from '../../asset/images/drinks7.avif';
import drinkImg8 from '../../asset/images/drinks8.avif';
import drinkImg9 from '../../asset/images/drinks9.avif';

import foodImg1 from '../../asset/images/food1.avif';
import foodImg2 from '../../asset/images/food2.avif';
import foodImg3 from '../../asset/images/food3.avif';
import foodImg4 from '../../asset/images/food4.avif';
import foodImg5 from '../../asset/images/food5.avif';

import coffeeImg1 from '../../asset/images/coffee1.avif';
import coffeeImg2 from '../../asset/images/coffee2.avif';

import merchImg1 from '../../asset/images/mer1.avif';
import merchImg2 from '../../asset/images/mer2.avif';
import merchImg3 from '../../asset/images/mer3.avif';
import merchImg4 from '../../asset/images/mer4.avif';

const MenuTop = () => {

  const drinkDescriptions = [
    "Hot Coffees",
    "Cold Coffees ",
    "Starbucks Refreshers Beverages",
     "Frappuccinos Blended Beverages",
    "Iced Tea & Lemonade",
    " Hot Teas",
    "Iced Energy ",
    "Milk, Juice & More",
    "Bottled Beverages "
  ];

  const foodDescriptions = [
    "Hot Breakfast ",
    " Oatmeal & Yogurt",
    " Bakery ",
    "Lunch ",
    "Snacks & Sweets "
  ];

  const coffeeDescriptions = [
    "Whole Bean ",
    "VIA Instant "
  ];

  const merchDescriptions = [
    "Cold Cups",
    " Tumblers",
    " Mugs",
    "Other"
  ];


  return (
    <div className="menu-top-container">
    {/* Left Side Lists */}
    <div className="menu-lists">
      <div className="list-section">
        <h4>Drinks</h4>
        <ul>
          <li>Hot Coffees</li>
          <li>Cold Coffees</li>
          <li>Starbucks Refreshers Beverages</li>
          <li>Frappuccino Blended Beverages</li>
          <li>Iced Tea & Lemonade</li>
          <li>Hot Teas</li>
          <li>Iced Energy</li>
          <li>Milk Juice & More</li>
          <li>Bottled Beverages</li>
        </ul>
      </div>
      <div className="list-section">
        <h4>Food</h4>
        <ul>
          <li>Hot Breakfast</li>
          <li>Oatmeal & Yogurt</li>
          <li>Bakery</li>
          <li>Lunch</li>
          <li>Snacks & Sweets</li>
        </ul>
      </div>
      <div className="list-section">
        <h4>At Home Coffee</h4>
        <ul>
          <li>Whole Bean</li>
          <li>VIA Instant</li>
        </ul>
      </div>
      <div className="list-section">
        <h4>Merchandise</h4>
        <ul>
          <li>Cold Cups</li>
          <li>Tumblers</li>
          <li>Mugs</li>
          <li>Other</li>
        </ul>
      </div>
    </div>

    {/* Right Side Menu Content */}
    <div className="menu-content">
      <h3>Menu</h3>

      {/* Drinks Section */}
      <div className="section">
        <h4>Drinks</h4>
        <hr />
        <div className="images-grid">
          {[drinkImg1, drinkImg2, drinkImg3, drinkImg4, drinkImg5, drinkImg6, drinkImg7, drinkImg8, drinkImg9].map((img, index) => (
            <div key={index} className="image-item">
              <img src={img} alt={`Drink ${index + 1}`} className="round-image" />
              <h5>{drinkDescriptions[index]}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Food Section */}
      <div className="section">
        <h4>Food</h4>
        <hr />
        <div className="images-grid">
          {[foodImg1, foodImg2, foodImg3, foodImg4, foodImg5].map((img, index) => (
            <div key={index} className="image-item">
              <img src={img} alt={`Food ${index + 1}`} className="round-image" />
              <h5>{foodDescriptions[index]}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* At Home Coffee Section */}
      <div className="section">
        <h4>At Home Coffee</h4>
        <hr />
        <div className="images-grid">
          {[coffeeImg1, coffeeImg2].map((img, index) => (
            <div key={index} className="image-item">
              <img src={img} alt={`Coffee ${index + 1}`} className="round-image" />
              <h5>{coffeeDescriptions[index]}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Merchandise Section */}
      <div className="section">
        <h4>Merchandise</h4>
        <hr />
        <div className="images-grid">
          {[merchImg1, merchImg2, merchImg3, merchImg4].map((img, index) => (
            <div key={index} className="image-item">
              <img src={img} alt={`Merchandise ${index + 1}`} className="round-image" />
              <h5>{merchDescriptions[index]}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default MenuTop;
