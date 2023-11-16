import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";



export default function Footer() {
  return (<>
    <div className="w-full bg-purple border-2 border-darkPurple flex flex-row justify-between items-center p-5">
      {/* name */}
      <Link to="/">Jsun Velasco-Hebert</Link>

      {/* portfolio links */}
      <div className="flex flex-col justify-center items-center gap-3">
        <Link to="/about" className='menu-item'>about</Link>
        <Link to="/cv" className='menu-item'>cv</Link>
        <Link to="/projects" className='menu-item'>projects</Link>
      </div>

      {/* contact information */}
      <div className="flex flex-col justify-start items-start gap-3">
        {/* email */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <FaEnvelope />
          <Link to="mailto:jsun.velasco.hebert@gmail.com">jsun.velasco.hebert@gmail.com</Link>
        </div>
        {/* github */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <FaGithubSquare />
          <Link to="https://github.com/jsunvelascohebert" target="_blank">github.com/jsunvelascohebert</Link>
        </div>
        {/* linkedin */}
        <div className="flex flex-row gap-2 justify-start items-center">
          <FaLinkedin />
          <Link to="" target="_blank">linkedin.com/in/jsunvelascohebert/</Link>
        </div>
      </div>

    </div>
  </>);
}