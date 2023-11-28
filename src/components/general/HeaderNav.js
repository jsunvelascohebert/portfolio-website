import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


export default function HeaderNav() {
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
        <Link to="" className='menu-item-disabled'>about</Link>
        <Link to="" className='menu-item-disabled'>cv</Link>
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
    
    {/* mobile headernav */}
    <div className="sticky top-0 w-full flex flex-row md:hidden justify-between items-center bg-purple p-3 border-4 border-darkPurple z-50">
      <Link to="/" className='flex flex-row gap-2 justify-center items-center group'>
        {/* logo */}
        <img src={require('./../assets/hero-logo_1.png')} alt="logo" className='max-h-[3vh] group-hover:scale-105' />
        {/* name */}
        <div className='text-sm font-bold group-hover:font-extrabold group-hover:underline text-darkPurple'>
          jsun velasco-hébert
        </div>
      </Link>
      <IoMenu className='text-darkPurple text-2xl'/>
    </div>
  </>);
}