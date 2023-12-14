import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (<>
    {/* desktop footer */}
    <div className="w-full bg-purple border-4 border-darkPurple hidden md:flex flex-row justify-between items-center p-10">
      {/* logo and name */}
      <Link to="/" className='flex flex-col justify-center items-center gap-4 group'>
        {/* logo */}
        <img src={require('./../assets/hero-logo_1.png')} alt="logo" className='max-h-[10vh] group-hover:scale-105' />
        {/* name */}
        <div className='text-darkPurple font-bold group-hover:font-extrabold group-hover:underline'>
          jsun velasco-hébert
        </div>
      </Link>

      {/* portfolio links */}
      <div className="flex flex-col justify-center items-center gap-3">
        <Link to="" className='menu-item-disabled'>cv</Link>
        <Link to="/about" className='menu-item'>about</Link>
        <Link to="/process" className='menu-item'>process</Link>
        <Link to="/projects" className='menu-item'>projects</Link>
      </div>

      {/* contact information */}
      <div className="flex flex-col justify-start items-start gap-3">
        {/* email */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <FaEnvelope className='text-darkPurple'/>
          <Link to="mailto:jsun.velasco.hebert@gmail.com" className='menu-item'>jsun.velasco.hebert@gmail.com</Link>
        </div>
        {/* github */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <FaGithubSquare className='text-darkPurple'/>
          <Link to="https://github.com/jsunvelascohebert" target="_blank" className='menu-item'>github.com/jsunvelascohebert</Link>
        </div>
        {/* linkedin */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <FaLinkedin className='text-darkPurple'/>
          <Link to="https://www.linkedin.com/in/jsunvelascohebert/" target="_blank" className='menu-item'>linkedin.com/in/jsunvelascohebert</Link>
        </div>
      </div>
    </div>

    {/* mobile footer */}
    <div className="w-full flex md:hidden flex-col bg-purple border-4 border-darkPurple justify-center items center p-5 py-10 gap-14">
      {/* logo and name */}
      <Link to="/" className='flex flex-col justify-center items-center gap-4 group'>
        {/* logo */}
        <img src={require('./../assets/hero-logo_1.png')} alt="logo" className='max-h-[12vh] group-hover:scale-105' />
        {/* name */}
        <div className='text-darkPurple font-bold group-hover:font-extrabold group-hover:underline text-center'>
          jsun velasco-hébert
        </div>
      </Link>

      {/* links */}
      <div className="flex flex-col justify-center items-center gap-2">
        <Link to="" className='menu-item-disabled'>about</Link>
        <Link to="" className='menu-item-disabled'>cv</Link>
        <Link to="/process" className='menu-item'>process</Link>
        <Link to="/projects" className='menu-item'>projects</Link>
      </div>

      {/* contact info */}
      <div className="flex flex-col justify-center items-center gap-3">
        {/* email */}
        <div className="flex flex-row gap-2 justify-center items-center">
          <FaEnvelope className='text-darkPurple'/>
          <Link to="mailto:jsun.velasco.hebert@gmail.com" className='menu-item'>jsun.velasco.hebert@gmail.com</Link>
        </div>
        {/* github */}
        <div className="flex flex-row gap-2 justify-center items-center">
          <FaGithubSquare className='text-darkPurple'/>
          <Link to="https://github.com/jsunvelascohebert" target="_blank" className='menu-item'>github.com/jsunvelascohebert</Link>
        </div>
        {/* linkedin */}
        <div className="flex flex-row gap-2 justify-center items-center">
          <FaLinkedin className='text-darkPurple'/>
          <Link to="https://www.linkedin.com/in/jsunvelascohebert/" target="_blank" className='menu-item'>linkedin.com/in/jsunvelascohebert</Link>
        </div>
      </div>
    </div>
  </>);
}