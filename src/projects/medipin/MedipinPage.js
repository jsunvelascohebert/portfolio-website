import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaComputer } from "react-icons/fa6";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function MedipinPage() {
  return (<>
    {/* general container */}
    <div className="w-full flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-purple to-white">

      {/* hero */}
      <div className="w-full flex flex-col justify-center items-center py-12 gap-2">
        {/* hero header */}
        <Fade><h1 className='p-12'>medipin</h1></Fade>
        {/* quick links */}
        <Fade><div className="flex flex-row gap-10 justify-center items-center px-10 py-5">
          {/* site link */}
          <Link className="flex flex-col justify-center items-center gap-2 group" to='https://medipin-client-29ba1901c9d4.herokuapp.com/' target='_blank'>
            <FaComputer className='text-2xl text-darkPurple group-hover:scale-110' />
            <p className='group-hover:scale-105 text-darkPurple group-hover:underline'>site link <FaExternalLinkAlt className='inline-block text-xs text-darkPurple group-hover:scale-110 -translate-y-0.5'/></p>
          </Link>
          {/* github repo link */}
          <Link className="flex flex-col justify-center items-center gap-2 group" to='https://github.com/jsunvelascohebert/medipin' target="_blank">
            <FaGithub className='text-2xl text-darkPurple group-hover:scale-110' />
            <p className='group-hover:scale-105 text-darkPurple group-hover:underline'>github repo <FaExternalLinkAlt className='inline-block text-xs text-darkPurple group-hover:scale-110 -translate-y-0.5'/></p>
          </Link>
        </div></Fade>
        {/* hero image */}
        <Fade><img src={require('./assets/medipin-thumbnail.png')} alt="medipin note page render with laptop and phone" /></Fade>
        </div>
    </div>

    {/* basic information */}
    <Fade><p className='max-w-[75vw] md:max-w-[50vw] text-center mx-auto'>Medipin was created to bridge the gap between medical information and awareness. by allowing users to search, save, and supplement medical knowledge through it's pin-and-note application structure, Medipin offers a platform for engaging and empowering our knowledge over our personal health.</p></Fade>
    
    {/* features */}
    <div className="w-full flex flex-col gap-12 justify-center items-center py-24">
      <Fade><h2>features</h2></Fade>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch border-2 border-darkPurple">
        {/* search */}
        <Fade className='feature-card-fade-box'>
          <div className="feature-card">
            <img src={require('./assets/medipin-search.png')} alt="medipin search page shown on tablets" />
            <h3>search</h3>
            <p className='feature-card-text'>Using the built-in search feature, peruse the U.S. Department of Health and Human Services database for health-related articles.</p>
          </div>
        </Fade>
        {/* pin */}
        <Fade className='feature-card-fade-box'>
          <div className="feature-card">
            <img src={require('./assets/medipin-topic.png')} alt="medipin topic page shown phone and laptop" />
            <h3>pin</h3>
            <p className="feature-card-text">Create, edit, and delete customized topics to pin relevant or interesting articles. There are no limits to the number of topics you can create.</p>
          </div>
        </Fade>
        {/* note */}
        <Fade className='feature-card-fade-box'>
          <div className="feature-card">
            <img src={require('./assets/medipin-notes.png')} alt="medipin notes page shown on phone and tablet" />
            <h3>note</h3>
            <p className="feature-card-text">Annotate pinned articles with notes that are stored securely behind your account information. Notes can be of any length.</p>
          </div>
        </Fade>
      </div>
    </div>
    


    {/* process */}

    
    {/* documentation */}


  </>);
}