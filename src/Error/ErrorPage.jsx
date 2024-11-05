import React from 'react';

const ErrorPage = () => {
  return (
    <div className='grid md:grid-cols-2 md:items-center justify-center h-[100vh] max-w-[1440px] mx-auto px-4'>
      <div className='flex items-center justify-center'>
        <img src="https://i.ibb.co.com/R0g1ZdN/Group.png" alt="" />
        <img className='w-full md:w-[60%]' src="https://i.ibb.co.com/71tN5rv/Capa-4.png" alt="" />
      </div>
      <div>
        <h1 className='text-5xl text-gray-500 mb-3'>Oopps!</h1>
        <h1 className='text-5xl font-bold'>Page not Found</h1>
      </div>
    </div>
  );
};

export default ErrorPage;