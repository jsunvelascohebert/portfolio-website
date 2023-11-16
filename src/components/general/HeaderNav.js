import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function HeaderNav() {
  return (<>
    {/* desktop headernav */}
    <div className="w-full bg-purple flex flex-row justify-between items-center p-4 border-2 border-darkPurple">
      {/* logo */}
      <Link to="/" className='font-extrabold'>jsun velasco-hebert</Link>
      {/* menu items */}
      <div className="flex flex-row gap-10 justify-center items-center">
        <Link to="/about">about</Link>
        <Link to="/cv">cv</Link>
        <Link to="/projects">projects</Link>
      </div>
      {/* link icons */}
      <div className="flex flex-row gap-5 justify-center items-center">
        <FaLinkedin className='text-xl'/>
        <FaGithubSquare className='text-xl'/>
      </div>

    </div>

    {/* mobile headernav */}
  </>);
}