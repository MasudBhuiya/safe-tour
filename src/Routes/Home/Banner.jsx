import React from 'react';
import Select from 'react-select';
import '../Home/Banner.jsx';

const Banner = () => {

  const onSubmit = (e) =>{
    e.preventDefault();
    const from = e.target;

    const city = from.city.value;
    const location = from.location.value;
    const person = from.person.value;
    console.log(city, location, person)
  }

  return (
    <div className=''>
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 items-center justify-center  mt-12'>
      <div className=''>
        <h1 className='font-bold text-5xl max-w-[454px]'>Let's Make Your Best Trip Ever</h1>
        <p className=' md:w-full lg:w-96 my-4'>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>

        <div className='flex items-center gap-5'>
          <button className='btn text-md font-bold text-white bg-orange-500 '>Discover Now</button>
          <div className='flex items-center gap-1'>
            <img className='w-16' src="https://i.ibb.co.com/fHkMfBf/Play.png" alt="" />
            <p>Learn More</p>
          </div>
        </div>
      </div>



      <div className=' relative flex h-[510px] justify-start items-center'>
        <div className='w-[163px] h-[202px] flex flex-col items-center justify-center z-20 bg-white rounded-lg shadow-md'>
          <div className='banner-39 h-[55px] w-[55px] flex flex-col items-center justify-center'>
            <p>39</p>
            <small className='text-[4px]'>Times traveled</small>
          </div>
          <h1 className='font-bold mt-5'>224</h1>
          <p className=' text-xs'>Total trip (month)</p>
        </div>

        <div className='banner-img'>
          <img className='w-[380px] h-[510px] absolute z-10 top-0 left-12' src="https://i.ibb.co.com/wyvW3s4/Girl.png" alt="" />
        </div>
      </div>
      

      <div className='hidden lg:flex lg:flex-col '>
        <div className='flex items-center justify-center gap-2'>
          <img className='rounded-full w-20' src="https://i.ibb.co.com/fnLfHsW/Screenshot-2024-10-23-114105.png" alt="" />
          <div>
            <h1 className='font-bold text-2xl'>12</h1>
            <p className='text-sm'>Years Experience</p>
          </div>

        </div>
        <div className='flex items-center justify-center gap-2 my-[32px]'>
          <img className='rounded-full w-20' src="https://i.ibb.co.com/fnLfHsW/Screenshot-2024-10-23-114105.png" alt="" />
          <div>
            <h1 className='font-bold text-2xl'>29</h1>
            <p className='text-sm'>Years Experience</p>
          </div>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <img className='rounded-full w-20' src="https://i.ibb.co.com/fnLfHsW/Screenshot-2024-10-23-114105.png" alt="" />
          <div>
            <h1 className='font-bold text-2xl'>725+</h1>
            <p className='text-sm'>Years Experience</p>
          </div>
        </div>
      </div>

      </div>

      <form className='max-w-[750px] mt-12 mx-auto sm:flex items-center justify-around ' onSubmit={onSubmit}>
      
        <div className='pt-5 md:pt-0'>
          <h1 className='font-bold text-sm ps-2'>Location</h1>
          <select name='location' className="select select-ghost w-full ps-2 max-w-xs">
  <option disabled selected>Pick the Location</option>
  <option>Cox's Bazar</option>
  <option> Saint Martin</option>
  <option>Sundarban</option>
  <option> Madhabkunda</option>
  <option>Jaflong</option>
  <option>Sajek </option>
  <option>Rangamati</option>
  <option>Bandarban</option>
  <option>Srimangal</option>
  <option> Tanguar Haor</option>
  <option> Paharpur</option>
  <option>Mahasthangarh</option>
  <option> Kuakata </option>
  <option>Lalbagh Fort</option>
  <option>Patenga Beach</option>
  <option> Sonargaon</option>
</select>
        </div>
        <div className='pt-5 md:pt-0'>
          <h1 className='font-bold text-sm ms-2'>City</h1>
          <select name='city' className="select select-ghost w-full ps-2 max-w-xs">
  <option disabled selected>Division</option>
  <option>Dhaka</option>
  <option>Chattogram</option>
  <option>Rajshahi</option>
  <option>Sylhet</option>
  <option>Sajek</option>
  <option>Rangamati</option>
  <option>Bandarban</option>
  <option>Sunamganj</option>
  <option>Paharpur</option>
  <option>Bogra</option>
  <option>Kuakata</option>
  <option>Dhaka</option>
  <option>Chittagong</option>
  <option>Narayanganj</option>
  <option>Srimangal</option>
</select>
        </div>
        <div className='pt-5 md:pt-0'>
          <h1 className='font-bold text-sm ps-2'>Guest</h1>
          <select name='person' className="ps-2 w-full max-w-xs h-10 overflow-y-auto">
  <option disabled selected>Persons</option>
  <option>Person 1</option>
  <option>Person 2</option>
  <option>Person 3</option>
  <option>Person 4</option>
  <option>Person 5</option>
  <option>Person 6</option>
  <option>Person 7</option>
  <option>Person 8</option>
  <option>Person 9</option>
</select>
        </div>

        
        <div className='pt-5 md:pt-0'>
          <input className='btn bg-[#132742] text-white' type="submit" name="" value='Search' id="" />
        </div>
      </form>
    </div>
  );
};

export default Banner;