import React from 'react';
import ProjectGallery from '../../projects/ProjectGallery';

export default function Home() {
  return (<>
    {/* general container */}
    <section id="home" className="w-full min-h-screen flex flex-col gap-10">

      {/* hero banner */}
      <div className='w-full h-[90vh] flex flex-col md:flex-row justify-center md:justify-around items-center p-10 gap-5 md:gap-0 bg-gradient-to-b from-purple to-white'>
        {/* image */}
        <img src={require("./../assets/jvh_headshot.png")} alt="jsun headshot" className='w-[50vw] md:w-[25vw] object-cover rounded-full border-4 border-darkPurple'/>
        {/* name */}
        <div className="flex flex-col justify-start items-center gap-3">
          <h1 className='scale-75'>jsun velasco-hébert</h1>
          <p className='text-light italic'>designer  |  educator  |  developer</p>
        </div>
      </div>

      {/* quick link to projects */}
      <div className='w-full flex flex-col justify-center items-center gap-10 p-4 py-10'>
        <h2>projects</h2>

        <ProjectGallery />

      </div>

    </section>
  </>);
}