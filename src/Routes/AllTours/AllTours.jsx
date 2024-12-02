import React, { useEffect, useState } from 'react';
import AllTour from '../Home/AllTour';

const AllTours = () => {
  const [tours, setTours] = useState([]);




  useEffect(()=>{
    fetch('http://localhost:5000/spots')
    .then(res => res.json())
    .then(data => setTours(data))
  },[])
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
            <section className='max-w-[1440px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 justify-center items-center mt-28'>
                {
                  tours?.map(tour => <AllTour key={tour?._id} tour={tour}></AllTour>)
                }
            </section>
    </div>
  );
};

export default AllTours;