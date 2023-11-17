import React from 'react';
import ProjectGallery from './ProjectGallery';
import { Fade } from 'react-awesome-reveal';

export default function ProjectPage() {
  return (<>
    <div className="w-full flex flex-col justify-center items-center gap-10 p-4 py-10">
      <Fade>
        <h2>projects</h2>
        <ProjectGallery />
      </Fade>
    </div>
  </>);
}