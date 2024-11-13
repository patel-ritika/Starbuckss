import React from 'react';
import "../../asset/styles/gift/giftphoto.css";
import holidayImg1 from "../../asset/images/holiday1.png";
import holidayImg2 from "../../asset/images/holiday2.jpg";
import holidayImg3 from "../../asset/images/holiday3.jpg";
import holidayImg4 from "../../asset/images/holiday4.png";

import red1 from "../../asset/images/red1.png";
import red2 from "../../asset/images/red2.jpg";
import red3 from "../../asset/images/red3.jpg";
import red4 from "../../asset/images/red4.jpg";

import birthday1 from "../../asset/images/giftfeature2.jpg";
import birthday2 from "../../asset/images/giftfeature8.webp";
import birthday3 from "../../asset/images/birthday3.jpg";
import birthday4 from "../../asset/images/birthday4.webp";

import thank1 from "../../asset/images/giftfeature12.jpg";
import thank2 from "../../asset/images/giftfeature9.avif";
import thank3 from "../../asset/images/treat3.avif";
import thank4 from "../../asset/images/treat4.avif";

import celebration1 from "../../asset/images/celebration1.png";
import celebration2 from "../../asset/images/celebration2.webp";
import celebration3 from "../../asset/images/celebration3.avif";
import celebration4 from "../../asset/images/celebration4.avif";

import wicked1 from "../../asset/images/giftfeature3.avif";
import wicked2 from "../../asset/images/giftfeature5.webp";
import wicked3 from "../../asset/images/giftfeature6.avif";
import wicked4 from "../../asset/images/gravity4.webp";

import thanks1 from "../../asset/images/giftfeature13.webp";
import thanks2 from "../../asset/images/thank2.jpg";
import thanks3 from "../../asset/images/giftfeature9.avif";

import appre1 from "../../asset/images/tree1.jpg";
import appre2 from "../../asset/images/giftfeature10.jpg";
import appre3 from "../../asset/images/tree3.jpg";
import appre4 from "../../asset/images/tree4.avif";

import enco1 from "../../asset/images/encouragement1.png";
import enco2 from "../../asset/images/giftfeature11.avif";
import enco3 from "../../asset/images/encouragement2.jpg";
import enco4 from "../../asset/images/encouragement4.avif";
 
import affec1 from "../../asset/images/warm1.avif";
import affec2 from "../../asset/images/warm2.webp";
import affec3 from "../../asset/images/warm3.webp";

import place1 from "../../asset/images/place1.avif";
import place2 from "../../asset//images/place2.webp";
import place3 from "../../asset/images/place3.jpg";
import place4 from "../../asset/images/place4.jpg";

import any1 from "../../asset/images/giftfeature16.png";
import any2 from "../../asset/images/any2.jpg";
import any3 from "../../asset/images/any3.webp";
import any4 from "../../asset/images/any4.avif";

const GiftPhoto = () => {
  return (
    <div className="gift-photo-container">
      {/* Section: HOLIDAY */}
      <h5 className="photo_section-title">HOLIDAY</h5>
      <div className="photo_image-row">
        <img src={holidayImg1} alt="Holiday 1" />
        <img src={holidayImg2} alt="Holiday 2" />
        <img src={holidayImg3} alt="Holiday 3" />
        <img src={holidayImg4} alt="Holiday 4" />
      </div>

      {/* Section: RED CUP */}
      <h5 className="photo_section-title">RED CUP</h5>
      <div className="photo_image-row">
        <img src={red1} alt="Red Cup 1" />
        <img src={red2} alt="Red Cup 2" />
        <img src={red3} alt="Red Cup 3" />
        <img src={red4} alt="Red Cup 4" />
      </div>

      <h5 className="photo_section-title">BIRTHDAY</h5>
      <div className="photo_image-row">
        <img src={birthday1} alt="birthday 1" />
        <img src={birthday2} alt="birthday 2" />
        <img src={birthday3} alt="birthday 3" />
        <img src={birthday4} alt="birthday 4" />
      </div>

      <h5 className="photo_section-title">THANK YOU</h5>
      <div className="photo_image-row">
        <img src={thank1} alt="thank 1" />
        <img src={thank2} alt="thank 2" />
        <img src={thank3} alt="thank 3" />
        <img src={thank4} alt="thank 4" />
      </div>

      <h5 className="photo_section-title">CELEBRATION</h5>
      <div className="photo_image-row">
        <img src={celebration1} alt="cel 1" />
        <img src={celebration2} alt="cel 2" />
        <img src={celebration3} alt="cel 3" />
        <img src={celebration4} alt="cel 4" />
      </div>

      <h5 className="photo_section-title">WICKED</h5>
      <div className="photo_image-row">
        <img src={wicked1} alt="wek 1" />
        <img src={wicked2} alt="wek 2" />
        <img src={wicked3} alt="wek 3" />
        <img src={wicked4} alt="wek 4" />
      </div>

      <h5 className="photo_section-title">THANKSGIVING | 11/28</h5>
      <div className="photo_image-row">
        <img src={thanks1} alt="tha 1" />
        <img src={thanks2} alt="tha 2" />
        <img src={thanks3} alt="tha 3" />
      </div>

      <h5 className="photo_section-title">APPRECIATION</h5>
      <div className="photo_image-row">
        <img src={appre1} alt="app 1" />
        <img src={appre2} alt="app 2" />
        <img src={appre3} alt="app 3" />
        <img src={appre4} alt="app 4" />
      </div>

      <h5 className="photo_section-title">ENCOURAGEMENT</h5>
      <div className="photo_image-row">
        <img src={enco1} alt="enco 1" />
        <img src={enco2} alt="enco 2" />
        <img src={enco3} alt="enco 3" />
        <img src={enco4} alt="enco 4" />
      </div>

      <h5 className="photo_section-title">AFFECTION</h5>
      <div className="photo_image-row">
        <img src={affec1} alt="af 1" />
        <img src={affec2} alt="af 2" />
        <img src={affec3} alt="af 3" />
      </div>

      <h5 className="photo_section-title">WORKPLACE</h5>
      <div className="photo_image-row">
        <img src={place1} alt="place 1" />
        <img src={place2} alt="place 2" />
        <img src={place3} alt="place 3" />
        <img src={place4} alt="place 4" />
      </div>
      {/* Repeat similar structure for each section: BIRTHDAY, THANK YOU, etc. */}

      {/* Last Section: ANYTIME */}
      <h5 className="photo_section-title">ANYTIME</h5>
      <div className="photo_image-row">
        <img src={any1} alt="Anytime 1" />
        <img src={any2} alt="Anytime 2" />
        <img src={any3} alt="Anytime 3" />
        <img src={any4} alt="Anytime 4" />
      </div>
    </div>
  );
}

export default GiftPhoto;
