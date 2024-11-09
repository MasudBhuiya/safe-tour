import React from 'react';

const AllTour = ({tour}) => {
  return (
    <div className=''>
      

      <div className=''>
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
    <div className='flex'>
        <p>Oct 28, 2024</p>
        <p className='text-gray-500'>{tour?.duration}</p>
    </div>
  </div>
</div>
      
      


      </div>
    </div>
  );
};

export default AllTour;