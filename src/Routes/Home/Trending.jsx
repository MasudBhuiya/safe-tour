import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import { IoHeartOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';

const Trending = () => {
    const [trend, setTrend] = useState([]);

    useEffect(() => {
        fetch('trending.json')
            .then(res => res.json())
            .then(data => setTrend(data)
            )
    }, [])

    console.log(trend[0]?.name)
  return (
    <div className='mt-28'>

        <h1 className='font-bold text-4xl'>Trending 2024</h1>
        <p className='mt-3 text-gray-500'>Sost Brilliant reasons Entrada should be your one-stop-shop</p>
      {/* extra card section  */}
      <section className="max-w-[1670px] ps-5 mt-6  ms-auto">
            <>
            <Swiper
              slidesPerView={3.5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
                {
                    trend?.map(trending => <>
                    <SwiperSlide key={trending.id}>
                    <div className="text-black p-2 bg-white shadow-sm">
                
                <img className="" src={trending?.image} alt="" />
               
            </div>
            <span className="text-lg flex text-yellow-500 gap-[2px] mt-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <h1 className="text-xl font-bold text-start mt-2">{trending?.name}</h1>
            <div className='flex gap-4'>
                <small>{trending?.places} Places</small>
                <small>{trending?.activites} Activites</small>
            </div>
            <div className='flex justify-between items-center mt-4'>
            <p className="text-start text-lg font-bold text-orange-500">${trending?.price}</p>
            <button className='btn bg-sky-500 text-white'>Book Now</button>
            </div>

            <div className='flex items-center gap-3 mt-4'>
            <small className="font-bold text-xs bg-orange-500 rounded-full p-2 text-white">ST</small>
                <p>Safe Tour Agency</p>
            </div>
              </SwiperSlide>
                    </>)
                }
            </Swiper>
          </>
            </section>
    </div>
  );
};

export default Trending;