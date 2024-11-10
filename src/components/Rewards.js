import React from 'react';
import RewardTop from './rewards/RewardTop';
import RewardSecond from './rewards/RewardSecond';
import RewardThird from './rewards/RewardThird';
import RewardEnd from './rewards/RewardEnd';
import RewardCash from './rewards/RewardCash';

const Rewards = () => {
  return (
    <div>
      <RewardTop/>
      <RewardSecond/>
      <RewardThird/>
      <RewardEnd/>
      <RewardCash/>
    </div>
  );
}

export default Rewards;
