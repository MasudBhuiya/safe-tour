import React, { useEffect, useState } from 'react';
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
  const [tours, setTours] = useState([]);
  const [seeMore, setSeeMore] = useState(false);




  useEffect(()=>{
    fetch('/spots.json')
    .then(res => res.json())
    .then(data => setTours(data))
  },[])
  return (
    <div className='max-w-[1440px] mx-auto px-4 mt-28'>
      <Banner></Banner>
      <div className='mt-28'>
      <div className='flex items-center justify-between px-4 mb-8'>
        <div>
            <h1 className='font-bold text-3xl'>Our Best Tour</h1>
            <p className='max-w-[507px] mt-3'>These are also locations where it’s easy to feel healthier, happier and less stressed than in America. And for more destinations on the Global Retirement Index.</p>
        </div>
        {
          seeMore ? <button onClick={()=>setSeeMore(!seeMore)} className='btn text-md font-bold text-white bg-orange-500 '>See Some tours</button> : <button onClick={()=>setSeeMore(!seeMore)} className='btn text-md font-bold text-white bg-orange-500 '>See All tours</button>
        }
          
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 lg:gap-8 '>
        {
         seeMore ? tours?.map(tour => <AllTour key={tour.id} tour={tour}></AllTour>) : tours.slice(0, 6)?.map(tour => <AllTour key={tour.id} tour={tour}></AllTour>)
        }
      </div>
      </div>
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