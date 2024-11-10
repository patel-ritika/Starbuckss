import React from 'react';
import RewardTop from './rewards/RewardTop';
import RewardSecond from './rewards/RewardSecond';
import RewardThird from './rewards/RewardThird';
import RewardEnd from './rewards/RewardEnd';
import RewardCash from './rewards/RewardCash';
import RewardKeep from './rewards/RewardKeep';

const Rewards = () => {
  return (
    <div>
      <RewardTop/>
      <RewardSecond/>
      <RewardThird/>
      <RewardEnd/>
      <RewardCash/>
      <RewardKeep/>
    </div>
  );
}

export default Rewards;
