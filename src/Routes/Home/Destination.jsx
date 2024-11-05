import React from 'react';

const Destination = () => {
  return (
    <div className='mt-28'>
      <div className='flex justify-between '>
        <div>
        <h1 className='font-bold text-4xl mb-4'>Top Destination</h1>
        <p>Sost Brilliant Entrada should your one-stop shop!</p>
        </div>
        <button className='btn bg-orange-500 text-white font-bold'>See all destination</button>
      </div>



      <div className='flex flex-wrap h-full md:h-[400px] lg:h-[500px] mt-12'>
        <div className='w-1/2 md:w-[25%]'>
        <div>
            <img className='w-full p-2 h-full md:h-[200px] lg:h-[250px]'  src="https://i.ibb.co.com/XVfmxpj/Images-5.png" alt="" />
        </div>
        <div>
            <img className='w-full p-2 h-full md:h-[200px] lg:h-[250px]' src="https://i.ibb.co.com/N1dfKpT/Rectangle-4390.png" alt="" />
        </div>
        </div>

        <div className='w-1/2 md:w-[35%] h-full'>
        
        <div>
            <img className='w-full  p-2 h-full md:h-[400px] lg:h-[500px]' src="https://i.ibb.co.com/LSmYjRs/Rectangle-4391.png" alt="" />
        </div>
        </div>
        <div className='w-full md:w-[40%] flex flex-col'>
        <div>
            <img className='w-full p-2 h-full md:h-[200px] lg:h-[250px]' src="https://i.ibb.co.com/J5Y5FFk/Rectangle-4392.png" alt="" />
        </div>
        <div className='grid grid-cols-2'>
            <div>
                <img className='w-full p-2 h-full md:h-[200px] lg:h-[250px]' src="https://i.ibb.co.com/3pgxSbW/Rectangle-4394.png" alt="" />
            </div>
            <div>
                <img className='w-full p-2 h-full md:h-[200px] lg:h-[250px]' src="https://i.ibb.co.com/zRSRCq6/Rectangle-4395.png" alt="" />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;