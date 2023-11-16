import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (<>
    {/* desktop headernav */}
    <div className="w-full bg-purple flex flex-row justify-between items-center p-4 border-2 border-darkPurple">
      {/* logo */}
      <Link to="/" className='font-bold hover:font-extrabold hover:underline'>jsun velasco-hebert</Link>
      {/* menu items */}
      <div className="flex flex-row gap-10 justify-center items-center">
        <Link to="/about" className='menu-item'>about</Link>
        <Link to="/cv" className='menu-item'>cv</Link>
        <Link to="/projects" className='menu-item'>projects</Link>
      </div>
      {/* link icons */}
      <div className="flex flex-row gap-5 justify-center items-center">
        <Link to="https://www.linkedin.com/in/jsunvelascohebert/" target='_blank'>
          <FaLinkedin className='text-xl' />
        </Link>
        <Link to="https://github.com/jsunvelascohebert" target="_blank">
          <FaGithubSquare className='text-xl' />
        </Link>
      </div>

    </div>

    {/* mobile headernav */}
  </>);
}