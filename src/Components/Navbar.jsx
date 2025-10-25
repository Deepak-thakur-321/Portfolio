import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Education", path: "/education" },
      { name: "Projects", path: "/projects" },
      { name: "Skills", path: "/skills" },
      { name: "Contact", path: "/contact" },
      { name: "Resume", path: "/resume" },
   ];

   return (
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
         <div className="container mx-auto px-4 flex items-center justify-between h-16">

            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold tracking-wide text-blue-600">
               MyPortfolio
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
               {navLinks.map((link, index) => (
                  <li key={index}>
                     <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                           `hover:text-blue-500 font-medium transition ${isActive ? "text-blue-600" : "text-gray-700"
                           }`
                        }
                     >
                        {link.name}
                     </NavLink>
                  </li>
               ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
               {isOpen ? (
                  <HiX
                     className="w-7 h-7 text-gray-800 cursor-pointer"
                     onClick={() => setIsOpen(false)}
                  />
               ) : (
                  <HiMenu
                     className="w-7 h-7 text-gray-800 cursor-pointer"
                     onClick={() => setIsOpen(true)}
                  />
               )}
            </div>
         </div>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="md:hidden bg-white shadow-md">
               <ul className="flex flex-col space-y-4 p-4">
                  {navLinks.map((link, index) => (
                     <li key={index}>
                        <NavLink
                           to={link.path}
                           className={({ isActive }) =>
                              `block font-medium hover:text-blue-500 transition ${isActive ? "text-blue-600" : "text-gray-700"
                              }`
                           }
                           onClick={() => setIsOpen(false)} // Click karte hi close ho jaye
                        >
                           {link.name}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
