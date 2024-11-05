import React from 'react';

const TourType = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-center text-4xl mt-28'>Tour Type</h1>

      <div className='flex justify-evenly mt-12'>
        <div className='flex flex-col items-center'>
            <img className='w-20 -mb-1' src="https://i.ibb.co.com/MDh9fK6/Screenshot-2024-10-29-200519.png" alt="" />
            <h1 className='font-bold text-xl mt-2'>Beaches</h1>
            <p>10 Tours- From <span className="text-orange-500 font-bold">250$</span></p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="https://i.ibb.co.com/Q6g3KKV/Icon-5.png" alt="" />
            <h1 className='font-bold text-xl mt-2'>Beaches</h1>
            <p>10 Tours- From <span className="text-orange-500 font-bold">250$</span></p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="https://i.ibb.co.com/LkCgvzj/Icon-6.png" alt="" />
            <h1 className='font-bold text-xl mt-2'>Beaches</h1>
            <p>10 Tours- From <span className="text-orange-500 font-bold">250$</span></p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="https://i.ibb.co.com/cc8mBFF/Icon-7.png" alt="" />
            <h1 className='font-bold text-xl mt-2'>Beaches</h1>
            <p>10 Tours- From <span className="text-orange-500 font-bold">250$</span></p>
        </div>
      </div>
    </div>
  );
};

export default TourType;