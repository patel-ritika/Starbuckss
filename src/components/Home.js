import React from 'react';
import HomeTop from './home/HomeTop';
import HomeSecond from './home/HomeSecond';
import HomeThird from './home/HomeThird';
import HomeFour from './home/HomeFour';
import HomeFive from './home/HomeFive';
import HomeFooter from './home/HomeFooter';

const Home = () => {
  return (
    <div>
      <HomeTop/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFour/>
      <HomeFive/>
      <HomeFooter/>
    </div>
  );
}

export default Home;
