import React, { useContext, useState } from 'react';
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className='flex items-center justify-between py-5 px-4 shadow-md bg-white'>
      {/* Logo */}
      <NavLink to='/'> 
        <img src={assets.logo} className='w-36' alt="Logo" /> 
      </NavLink>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-6 text-gray-700 font-medium'>
        {[
          { path: "/", name: "Home" },
          { path: "/collection", name: "Collection" },
          { path: "/about", name: "About" },
          { path: "/contact", name: "Contact" }
        ].map(({ path, name }) => (
          <NavLink 
            key={path} 
            to={path}
            className={({ isActive }) => 
              `relative px-2 py-1 transition-all ${isActive ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700'}`
            }
          >
            {name}
          </NavLink>
        ))}
      </ul>

      {/* Icons Section */}
      <div className='flex items-center gap-6'>
        {/* Search Icon */}
        <img onClick={() => setShowSearch && setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer hover:scale-110 transition' alt="Search" />

        {/* Profile Dropdown */}
        <div className='relative group'>
          <Link to="/login">
            <img className='w-6 cursor-pointer hover:scale-110 transition' src={assets.profile_icon} alt='Profile' />
          </Link>
          <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md p-3 right-0 top-10'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>

        {/* Cart Icon */}
        <NavLink to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-6 min-w-6 hover:scale-110 transition' alt='Cart' />
          {getCartCount() > 0 && (
            <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center bg-black text-white rounded-full text-xs'>
              {getCartCount()}
            </p>
          )}
        </NavLink>

        {/* Mobile Menu */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden' alt="Menu" />
      </div>
    </nav>
  );
}

export default Navbar;
