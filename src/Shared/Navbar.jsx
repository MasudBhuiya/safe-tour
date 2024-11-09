import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut, userLoading } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((res) => { })
      .then((data) => { });
  };
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 font-semibold shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/destinations'>Destinatios</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/alltour'>All Tour</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl "><span className="font-bold bg-orange-500 rounded-full px-3 py-2 text-white">ST</span> Safe Tour.</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold px-1">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/destinations'>Destinatios</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/alltour'>All Tour</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">

    
    {
    user ? <><li onClick={handleLogout} className="btn bg-sky-500 border-0 text-white hover:bg-sky-800 mr-2
  "><Link>LOG OUT</Link></li></>: <li className="btn bg-sky-500 hover:bg-sky-800 border-0 text-white mr-2
  "><Link to="/login">LOGIN</Link></li>}
    {user ? <img className="w-12 h-12 rounded-full" src={user?.photoURL
} alt="" />: <img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsSYuMnSziZqiTm7N3_cuyCNbBwkLCxtgN7V6rlV4VaMUje7vpgmUDRJxQiZM7TWI7xM&usqp=CAU" alt="" />
}
  </div>
</div>
    </div>
  );
};

export default Navbar;