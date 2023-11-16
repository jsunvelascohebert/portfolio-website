import React from 'react';

export default function Home() {
  return (<>
    {/* general container */}
    <div className="w-full bg-lightPurple min-h-screen">
      {/* hero banner */}
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center'>
        {/* image */}
        <img src="../assets/jvh_headshot.png" alt="jsun headshot" />
        {/* name */}
        <div className="flex flex-col justify-start items-start gap-3">
          <h1>jsun velasco-hebert</h1>
          <p>designer  |  educator  |  developer</p>
        </div>
      </div>

      {/* basic information */}

      {/* quick link to projects */}

    </div>
  </>);
}