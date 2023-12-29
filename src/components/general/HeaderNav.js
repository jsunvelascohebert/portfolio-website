import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";


export default function HeaderNav() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (<>
    {/* desktop headernav */}
    <div className="hidden w-full sticky top-0 bg-purple md:flex flex-row justify-between items-center p-4 border-4 border-darkPurple z-50">
      {/* logo */}
      <Link to="/" className='flex flex-row justify-center items-center gap-4 group'>
        {/* logo */}
        <img src={require('./../assets/hero-logo_1.png')} alt="logo" className='max-h-[3vh] group-hover:scale-105' />
        {/* name */}
        <div className='font-bold group-hover:font-extrabold group-hover:underline text-darkPurple'>jsun velasco-hébert</div>
      </Link>
      {/* menu items */}
      <div className="flex flex-row gap-10 justify-center items-center">
        <Link to="" className='menu-item-disabled'>cv</Link>
        <Link to="/about" className='menu-item'>about</Link>
        <Link to="/process" className='menu-item'>process</Link>
        <Link to="/projects" className='menu-item'>projects</Link>
      </div>
      {/* link icons */}
      <div className="flex flex-row gap-5 justify-center items-center">
        <Link to="https://www.linkedin.com/in/jsunvelascohebert/" target='_blank'>
          <FaLinkedin className='text-xl text-darkPurple' />
        </Link>
        <Link to="https://github.com/jsunvelascohebert" target="_blank">
          <FaGithubSquare className='text-xl text-darkPurple' />
        </Link>
      </div>
    </div>
    
    {/* mobile header nav */}
    {!isMobileMenuOpen &&
      <div className="sticky top-0 w-full flex flex-row md:hidden justify-between items-center bg-purple p-3 border-4 border-darkPurple z-50">
      <Link to="/" className='flex flex-row gap-2 justify-center items-center group'>
        {/* logo */}
        <img src={require('./../assets/hero-logo_1.png')} alt="logo" className='max-h-[3vh] group-hover:scale-105' />
        {/* name */}
        <div className='text-sm font-bold group-hover:font-extrabold group-hover:underline text-darkPurple'>
          jsun velasco-hébert
        </div>
      </Link>
      <IoMenu className='text-darkPurple text-2xl' onClick={() => setMobileMenuOpen(true)} />
    </div>
    }

    {/* mobile menu expanded */}
    {isMobileMenuOpen && 
      <div id="mobileMenu" className="fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-hidden md:hidden bg-gradient-to-b from-purple to-white pb-4">
        {/* close button */}
        <div className="w-full flex flex-row justify-end items-center p-3 border-4 border-purple border-opacity-0">
          <IoClose className='text-darkPurple text-2xl' onClick={() => setMobileMenuOpen(false)} />
        </div>

        {/* menu content */}
        <div className="flex flex-col w-full h-full overflow-hidden justify-around items-center pb-10">

          {/* name and logo */}
          <Link className="flex flex-col justify-center items-center gap-2 hover:gap-3 transition-all group" onClick={() => setMobileMenuOpen(false)}>
            <img src={require('./../assets/hero-logo_1.png')} alt='logo' className='max-w-[40vw] group-hover:scale-105 transition-all'/>
            <h3 className='group-hover:scale-105 group-hover:underline transition-all'>jsun velasco-hébert</h3>
          </Link>

          {/* menu items */}
          <div className="flex flex-col justify-center items-center gap-4">
            <Link to="" className="menu-item-disabled">cv</Link>
            <Link to='/about' className='menu-item'
              onClick={() => setMobileMenuOpen(false)}>about</Link>
            <Link to='/process' className="menu-item"
              onClick={() => setMobileMenuOpen(false)}>process</Link>
            <Link to='/projects' className="menu-item"
              onClick={() => setMobileMenuOpen(false)}>projects</Link>
          </div>

          {/* external links */}
          <div className="flex flex-row justify-center items-center gap-4">
          <Link to="https://www.linkedin.com/in/jsunvelascohebert/" target='_blank'>
            <FaLinkedin className='text-2xl text-darkPurple' />
          </Link>
          <Link to="https://github.com/jsunvelascohebert" target="_blank">
            <FaGithubSquare className='text-2xl text-darkPurple' />
          </Link>
          </div>

        </div>
      </div>
    }

  </>);
}

