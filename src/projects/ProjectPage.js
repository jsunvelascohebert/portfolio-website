import React from 'react';
import ProjectGallery from './ProjectGallery';
import { Fade } from 'react-awesome-reveal';

export default function ProjectPage() {
  return (<>
    <Fade>
      <div className="w-full flex flex-col justify-center items-center gap-10 p-4 py-10">
        <h2>projects</h2>
        <ProjectGallery />
      </div>
    </Fade>
  </>);
}