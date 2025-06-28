import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';
const Navbar = () => {
  return (
   <div className="fixed top-0 left-0 right-0 bg-gray-800 h-16 shadow-sm flex items-center px-4 z-50 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
             <NavLink
               to="/"
               className={({ isActive }) =>
                 isActive ? 'border-b-2 border-green-500' : 'hover:border-b hover:border-gray-400 text-green-600'
               }
             >
               Home
             </NavLink>
           </li>
        <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-green-500' : 'hover:border-b hover:border-gray-400 text-green-600'
          }
        >
          Service
        </NavLink>
      </li>
         <li>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-green-500' : 'hover:border-b hover:border-gray-400 text-green-600'
          }
        >
          Resume
        </NavLink>
      </li>
      </ul>
    </div>
    <Logo />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li>
             <NavLink
               to="/"
               className={({ isActive }) =>
                 isActive ? 'border-b-2 border-green-500' : 'hover:border-b hover:border-gray-400 text-green-600'
               }
             >
               Home
             </NavLink>
           </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-green-500' : 'hover:border-b hover:border-gray-400 text-green-600'
          }
        >
          Service
        </NavLink>
      </li>
        <li>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-green-500' : 'hover:border-b hover:border-gray-400 text-green-600'
          }
        >
          Resume
        </NavLink>
      </li>
    </ul>
  </div>
  <div className="ml-1">
       <Link to={'/contact'}> <button className="btn btn-success rounded-full h-6">Hire Me</button></Link>
      </div>
</div>
  );
};

export default Navbar;