import React from 'react';

export default function EmpathyCenteredDesign() {
  return (<>
    {/* general container */}
    <div className="base-container bg-lightPurple border-2 border-darkPurple py-10">
      {/* header */}
      <h2>design outline</h2>
      {/* text */}
      <h5 className='w-[75vw] md:w-[50vw]'>Design is a non-linear process of discussing, deciding, delegating, and doing supported by the constant act of empathizing</h5>

      {/* empathy box */}
      <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center border-2 border-darkPurple bg-purple gap-6 md:gap-24 p-5">
        {/* header */}
        <h3 className='p-3 md:p-12 md:pr-2'>empathize</h3>
        {/* content */}
        <div className="flex flex-col justify-start items-start p-3 md:p-12 gap-6">
          <p><span className='project-card-date'>Empathizing</span> is the foundational force of connection. Through it, we come together and share our stories, visions, and worldviews.</p>
          <ul className='list-disc list-outside space-y-3'>
            <li>
            <div className='project-card-topic-container'>
                <div className="font-bold underline">Techniques/Approaches:</div>
                <div className="project-card-topic">talking circles</div>
                <div className="project-card-topic">diverse forms of interaction</div>
                <div className="project-card-topic">early establishment of community guidelines</div>
              </div>
            </li>
            <li>
              <div className="project-card-topic-container">
                <div className="font-bold underline">Guiding questions:</div>
                <div className="process-question">"tell us about yourself?",</div>
                <div className="process-question">"what does empathy look and feel like to you?",</div>
                <div className="process-question">"what are some of your hopes, needs, and wants?"</div>
              </div>
            </li>
            <li>
              <div className="project-card-topic-container">
                <div className="font-bold underline">Outcomes:</div>
                <div className="process-outcome-badge">Empathy Tree,</div>
                <div className="process-outcome-badge">Community Guidelines List</div>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* 4 d's flex-wrap (4x1) (2x2) (1x4) */}


    </div>
  
  </>);
}