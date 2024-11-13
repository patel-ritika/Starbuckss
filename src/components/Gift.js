import React from 'react';
import GiftTop from './gift/GiftTop';
import GiftSecond from './gift/GiftSecond';
import GiftPhoto from './gift/GiftPhoto';
import GiftBusiness from './gift/GiftBusiness';

const Gift = () => {
  return (
    <div>
      <GiftTop/>
      <GiftSecond/>
      <GiftPhoto/>
      <GiftBusiness/>
    </div>
  );
}

export default Gift;
