import React from 'react';
import ProjectGallery from './ProjectGallery';
import { Fade } from 'react-awesome-reveal';

export default function ProjectPage() {
  return (<>
    <div className="base-container">
      <Fade className='w-full'>
        <div className="page-header-spaced">
          <h1>projects</h1>
        </div>
        <div className='p-4 pb-10'>
          <ProjectGallery />
        </div>
      </Fade>
    </div>
  </>);
}