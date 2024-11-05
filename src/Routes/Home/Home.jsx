import React from 'react';
import Banner from './Banner';
import AllTour from './AllTour';
import ChooseUs from '../ChooseUs';
import Trending from './Trending';
import Destination from './Destination';
import TourType from './TourType';
import UsersSay from './UsersSay';
import ArticlesGuidings from './ArticlesGuidings';
import NewsLetter from './NewsLetter';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 mt-28'>
      <Banner></Banner>
      <AllTour></AllTour>
      <ChooseUs></ChooseUs>
      <Trending></Trending>
      <Destination></Destination>
      <TourType></TourType>
      <UsersSay></UsersSay>
      <ArticlesGuidings></ArticlesGuidings>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;