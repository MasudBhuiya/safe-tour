import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4'>
    <div className='mt-28 grid grid-cols-2 md:grid-cols-4 justify-between gap-3'>
      <div>
        <h1 className='font-bold'>Resources</h1>
        <ul className='flex flex-col gap-4 mt-3'>
        <li>Download</li>
        <li>Help Center</li>
        <li>Guide Book</li>
        <li>App Directory</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Travellers</h1>
        <ul className='flex flex-col gap-4 mt-3'>
        <li>Why Travellers</li>
        <li>Enterprice</li>
        <li>Customer Stories</li>
        <li>Instagram post </li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Company </h1>
        <ul className='flex flex-col gap-4 mt-3'>
        <li>Travelling</li>
        <li>About Locato </li>
        <li>Success</li>
        <li>Information </li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Get in Touch</h1>
        <p className='mt-3 text-lg font-bold text-sm mb-12'>Feel free to get in touch <br /> with us vai email</p>

      <a className='text-blue-500' href="">masudbhuiyan1415@gmail.com</a>
      </div>
    </div>

    <div className='sm:flex  items-center justify-between mt-16 mb-8'>
    <a className=" text-xl pointer" href=''><span className="font-bold bg-orange-500 rounded-full p-2 text-white">ST</span> Safe Tour.</a>

    <div>
      <ul className='sm:flex gap-4 my-4 sm:my-0'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Destinations</a></li>
        <li><a href="">Tours</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </div>
    <div className='flex gap-2'>
      <FaFacebook></FaFacebook>
      <FaInstagram></FaInstagram>
    </div>
    </div>
    </div>
  );
};

export default Footer;