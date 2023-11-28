import React from 'react';
import ProjectGallery from '../../projects/ProjectGallery';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (<>
    {/* general container */}
    <section id="home" className="w-full min-h-screen flex flex-col gap-10">

      {/* hero banner */}
      <div className='w-full min-h-[90vh] flex flex-col justify-center md:justify-center items-center p-10 gap-10 md:gap-20 bg-gradient-to-b from-purple to-white'>
        <Fade>
          {/* logo */}
          <img src={require('./../assets/hero-logo_1.png')} alt='logo' className='max-w-[50vw] sm:max-w-[25vw]' />
        {/* name */}
        <div className="flex flex-col justify-start items-center gap-3">
          <h1 className='text-2xl sm:text-6xl'>jsun velasco-hébert</h1>
            <div className="w-full flex flex-row justify-center items-center gap-2 sm:gap-5">
              <p className="text-light italic text-darkPurple">designer</p>
              <p className="text-light text-darkPurple">|</p>
              <p className="text-light italic text-darkPurple">developer</p>
              <p className="text-light text-darkPurple">|</p>
              <p className="text-light italic text-darkPurple">educator</p>
            </div>  
          </div>
        </Fade>
      </div>

      {/* quick link to projects */}
      <div className='w-full flex flex-col justify-center items-center gap-10 md:gap-20 p-4 py-10'>
        <Fade>
          <h2>projects</h2>
          <ProjectGallery />
        </Fade>
      </div>

    </section>
  </>);
}