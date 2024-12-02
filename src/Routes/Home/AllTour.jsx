import React from 'react';
import './AllTour.css';
import { Link } from 'react-router-dom';

const AllTour = ({tour}) => {

  // console.log(tour)
  return (
    <div className=''>
      

      <Link to={`/details/${tour?._id}`} className='alltourcard' >
      <div className="card bg-base-100 flex flex-col  w-96 sm:w-72 md:w-full shadow-xl">
  <figure>
    <img className='w-full p-3 h-[250px] lg:h-[400px] rounded-lg '
      src={tour?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-orange-500">$150/day</h2>
    <h3 className='font-bold text-lg -mt-2'>{tour?.name}</h3>
    <p className='mt-3 font-semibold'>Calrns QLD, Australia</p>
    <div className='flex justify-between items-center'>
        <h1>Oct 28, 2024</h1>
        <h1  className='text-gray-500'>{tour?.duration}</h1>
    </div>
  </div>
</div>
      
      


      </Link>
    </div>
  );
};

export default AllTour;