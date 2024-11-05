import React, { useEffect, useState } from 'react';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    console.log(destinations);
    useEffect(()=>{
        fetch('/destinations.json')
        .then(res => res.json())
        .then(data => setDestinations(data))
    },[])
  return (
    <div>

      <div
                className="hero h-72 sm:min-h-screen w-full"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/nsCCYq2/image-872-2.png)",
                }}>
                <div className=""></div>
                <div className="hero-content text-orange-500 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl md:text-8xl font-bold">Destinations</h1>
                        <p className='text-xl text-white'>Explore Tours By Destinations</p>
                    </div>
                </div>
            </div>


            {/* cards  */}
            <section>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1440px] mx-auto px-4 mt-20 md:mt-36'>
                {
                    destinations.map(des =>
                        <div >
                            <div>
                            <img className='w-full' src={des?.image} alt="" />
                            <p className='font-bold mt-2'>{des?.name}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex items-center justify-center mt-8'>
            <button className='btn bg-orange-500 text-white font-bold '>See more</button>
            </div>
            </section>
    </div>
  );
};

export default Destinations;