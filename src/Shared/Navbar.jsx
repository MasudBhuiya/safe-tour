import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-0 px-4'>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/destinations'>Destinatios</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl "><span className="font-bold bg-orange-500 rounded-full px-3 py-2 text-white">ST</span> Safe Tour.</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/destinations'>Destinatios</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/contact" className="btn bg-sky-400 text-white font-bold">Contact us</Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;