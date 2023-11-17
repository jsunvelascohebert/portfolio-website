import React from 'react';

export default function Home() {
  return (<>
    {/* general container */}
    <section id="home" className="w-full bg-lightPurple min-h-screen flex flex-col gap-10">
      {/* hero banner */}
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center'>
        {/* image */}
        <img src="./../assets/jvh_headshot.png" alt="jsun headshot" />
        {/* name */}
        <div className="flex flex-col justify-start items-center gap-3">
          <h1>jsun velasco-hebert</h1>
          <p>designer  |  educator  |  developer</p>
        </div>
      </div>

      {/* quick link to projects */}
      <div className='w-full bg-white border-2 border-darkPurple flex flex-col justify-center items-center gap-2 p-4'>
        <h2>projects</h2>

        {/* project gallery */}
        

      </div>

    </section>
  </>);
}