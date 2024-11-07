import React from 'react';
import AllTour from '../Home/AllTour';

const AllTours = () => {
  return (
    <div>
      <div
                className="hero h-72 sm:min-h-screen w-full"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/couple-standing-mountain_46740-1159.jpg?w=740)",
                }}>
                <div className=""></div>
                <div className="hero-content text-orange-600 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl md:text-7xl font-bold">All Tours</h1>
                    </div>
                </div>
            </div>

            <section className='max-w-[1440px] mx-auto px-4'>
                <AllTour></AllTour>
            </section>
    </div>
  );
};

export default AllTours;