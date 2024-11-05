import React from 'react';

const NewsLetter = () => {
  return (
    <>
    
    <div className='bg-yellow-500 h-[350px] rounded-lg flex flex-col items-center justify-center text-white mt-28 relative'>
    <div className='absolute -top-7 right-[80%]'>
    <img src="https://i.ibb.co.com/7z2FBz0/Polygon-15.png" alt="" />
    </div>
      <h1 className='font-bold text-2xl md:text-4xl '>Subscribe our newsletter</h1>
      <p className='max-w-[300px] md:max-w-[380px] text-center mt-3'>Recieve latest news, update, and many other things every week. </p>
      
      <label className="input input-bordered text-black mt-8 w-[39%] flex items-center gap-2">
  <input type="text" className="grow" required placeholder="Search" />
  <img className='h-16 mt-[9px]  -me-6' src="https://i.ibb.co.com/NVV8J5g/Send.png" alt="" />
  
</label>

    </div>
    </>
  );
};

export default NewsLetter;