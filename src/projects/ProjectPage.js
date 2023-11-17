import React from 'react';
import ProjectGallery from './ProjectGallery';
import { Fade } from 'react-awesome-reveal';

export default function ProjectPage() {
  return (<>
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Fade className='w-full'>
        <div className="w-full h-[75vh] flex flex-col justify-center items-center bg-gradient-to-b from-purple to-white">
          <h1>projects</h1>
        </div>
        <div className='p-4 pb-10'>
          <ProjectGallery />
        </div>
      </Fade>
    </div>
  </>);
}