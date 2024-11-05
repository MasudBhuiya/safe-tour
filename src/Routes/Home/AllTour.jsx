import React from 'react';

const AllTour = () => {
  return (
    <div className='mt-28'>
      <div className='flex items-center justify-between px-4 mb-8'>
        <div>
            <h1 className='font-bold text-3xl'>Our Best Tour</h1>
            <p className='max-w-[507px] mt-3'>These are also locations where it’s easy to feel healthier, happier and less stressed than in America. And for more destinations on the Global Retirement Index.</p>
        </div>
        <button className='btn text-md font-bold text-white bg-orange-500 '>See all tours</button>
          
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 lg:gap-8 xl:gap-16'>
      <div className="card bg-base-100 flex flex-col  w-96 sm:w-72 md:w-full shadow-xl">
  <figure>
    <img className='w-full p-3'
      src="https://i.ibb.co.com/Gv9DTSH/pexels-amine-m-siouri-2245436-1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-orange-500">$150/day</h2>
    <h3 className='font-bold text-lg -mt-2'>Cairns Travel</h3>
    <p className='mt-3 font-semibold'>Calrns QLD, Australia</p>
    <div className='flex'>
        <p>Oct 28, 2024</p>
        <p>5 Days</p>
    </div>
  </div>
</div>
      <div className="card bg-base-100 w-96 sm:w-72 md:w-full gap-4 shadow-xl">
  <figure>
    <img className='w-full p-3'
      src="https://i.ibb.co.com/zR4pL0s/pexels-amine-m-siouri-2245436-1-2.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-orange-500">$110/day</h2>
    <h3 className='font-bold text-lg -mt-2'>Oriando Travel</h3>
    <p className='mt-3 font-semibold'>Calrns QLD, Australia</p>
    <div className='flex'>
        <p>Oct 28, 2024</p>
        <p>5 Days</p>
    </div>
  </div>
</div>
      <div className="card bg-base-100 w-96 sm:w-72 md:w-full gap-4 shadow-xl">
  <figure>
    <img className='w-full p-3'
      src="https://i.ibb.co.com/NrcXstx/pexels-amine-m-siouri-2245436-1-1.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-orange-500">$136/day</h2>
    <h3 className='font-bold text-lg -mt-2'>Malaysia Travel</h3>
    <p className='mt-3 font-semibold'>Calrns QLD, Australia</p>
    <div className='flex'>
        <p>Oct 28, 2024</p>
        <p>5 Days</p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default AllTour;