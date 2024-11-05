import React from 'react';
import '../Home/UsersSay.css';
import { FaStar } from 'react-icons/fa';
const UsersSay = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1340px] mx-auto justify-between items-center mt-28'>
        <div className='userImg w-full rounded-b-full'>
        <img className='rounded-b-[47%] ms-4' src="https://i.ibb.co.com/PzTdRrS/image-867.png" alt="" />
        </div>

        <div>
            <h1 className='font-bold text-4xl mb-3 mt-6 md:mt-0'>What our user say</h1>
            <p className='max-w-[493px]'>“Adding live social proof was the #1 driver of increased revenue in all my experiments while at Airkey.” and the
            bran must survive atleast 1 year.</p>
            
            <div className='flex flex-col gap-7 mt-6'>
            <div className='flex items-center gap-2'>
          <img className='rounded-full w-20' src="https://i.ibb.co.com/yq6R5xH/Ellipse-2670.png" alt="" />
          <div>
            <h1 className='font-bold text-lg -mb-1'>Raul van Sutoyo</h1>
            <p className='text-sm max-w-[319px]'>UI Designer</p>
            <div className='flex mt-2'>
            <FaStar className='text-orange-500'></FaStar>
            <FaStar className='text-orange-500'></FaStar>
            <FaStar className='text-orange-500'></FaStar>
            <FaStar className='text-orange-500'></FaStar>
            <FaStar className='text-orange-500'></FaStar>
            </div>
          </div>

        </div>

        

         
            </div>
        </div>
      <div>

      </div>
    </div>
  );
};

export default UsersSay;