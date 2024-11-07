import React from 'react';
import AllTour from '../Home/AllTour';

const AllTours = () => {
  return (
    <div>
      <div
                className="hero h-72 sm:min-h-screen w-full"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?ga=GA1.1.1591777397.1730875381&semt=ais_hybrid)",
                }}>
                <div className=""></div>
                <div className="hero-content text-orange-600 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl md:text-8xl font-bold">All Tours</h1>
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