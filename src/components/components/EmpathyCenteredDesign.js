import React from 'react';
import { Link } from 'react-router-dom';

export default function EmpathyCenteredDesign() {
  return (<>
    {/* general container */}
    <div className="base-container pt-24 gap-20">
      {/* header */}
      <h2>design outline</h2>
      {/* text */}
      <h5 className='w-[75vw] md:w-[50vw]'>Design is a non-linear process of discussing, deciding, delegating, and doing supported by the constant act of empathizing</h5>

      <div className="w-[90vw] md:w-[95vw] flex flex-col justify-center items-center gap-0 border-2 border-darkPurple">

      {/* empathy box */}
      <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center border-2 border-darkPurple bg-purple gap-6 md:gap-24 p-10">
        {/* header */}
        <h3 className=''>empathize</h3>
        {/* content */}
        <div className="flex flex-col justify-start items-start gap-6 leading-3">
          <p><span className='project-card-date'>Empathizing</span> is the foundational force of connection. Through it, we come together and share our stories, visions, and worldviews.</p>
          <ul className='list-disc list-outside space-y-3'>
            <li>
            <div className='project-card-topic-container'>
                <div className="font-bold underline">Techniques/Approaches:</div>
                <Link to='https://firstnationspedagogy.ca/circletalks.html' target='_blank' className="light-badge-link hover:ring-darkPurple">talking circles</Link>
                <p className="project-card-topic">diverse forms of interaction</p>
                <Link to='https://tll.mit.edu/teaching-resources/inclusive-classroom/discussion-guidelines/' target='_blank' className="light-badge-link hover:ring-darkPurple">community guidelines</Link>
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
                <Link to='https://drive.google.com/drive/folders/1mv3lkCBixtSYH60YU7-osvDCocLweAjh?usp=sharing' target='_blank' className="process-outcome-badge-link">Empathy Tree,</Link>
                <Link to='https://tll.mit.edu/teaching-resources/inclusive-classroom/discussion-guidelines/' target='_blank' className="process-outcome-badge-link">Community Guidelines List</Link>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* 4 d's flex-wrap (4x1) (2x2) (1x4) */}
      <div className="w-full flex flex-wrap">
          
        {/* discuss */}
        <div className="design-process-d-container">
          {/* header */}
          <h3>discuss</h3>
          {/* content */}
          <div className="flex flex-col justify-start items-start gap-6">
            <p><span className='project-card-date'>Discussing</span> is where we tell our stories. Using talking circles and relational idea generation, we maintain a safe space free from judgement, assumption, and disruptions.</p>
            <ul className='list-disc list-outside space-y-3'>
              <li>
              <div className='project-card-topic-container'>
                  <div className="font-bold underline">Techniques/Approaches:</div>
                  <Link to='https://firstnationspedagogy.ca/circletalks.html' target='_blank' className="light-badge-link">talking circles</Link>
                  <div className="project-card-topic">sticky note stories</div>
                  <div className="project-card-topic">refer to guidelines</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Guiding questions:</div>
                  <div className="process-question">"what is the story that brings you here today?",</div>
                  <div className="process-question">"what other stories have you heard?",</div>
                  <div className="process-question">"what stories do you want to tell or be told?"</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Outcomes:</div>
                  <Link to='https://drive.google.com/drive/folders/1nNvtef1KNQ3Gk3UWDdPvvpW-axtj5p0N?usp=sharing' target='_blank' className="process-outcome-badge-link">Collection of Stories</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* decide */}
        <div className="design-process-d-container">
          {/* header */}
          <h3>decide</h3>
          {/* content */}
          <div className="flex flex-col justify-start items-start  gap-6">
            <p><span className='project-card-date'>Deciding</span> is when we synthesize our stories. We map them together in a sticky web of endless interactions. Patterns emerge within this decentralized network which we build upon.</p>
            <ul className='list-disc list-outside space-y-3'>
              <li>
              <div className='project-card-topic-container'>
                  <div className="font-bold underline">Techniques/Approaches:</div>
                  <div className="project-card-topic">mapping workshops</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Guiding questions:</div>
                  <div className="process-question">"what stories resonated with your own",</div>
                  <div className="process-question">"can you tell us more about that relationship?"</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Outcomes:</div>
                  <div className="process-outcome-badge">Web of Stories</div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* delegate */}
        <div className="design-process-d-container">
          {/* header */}
          <h3>delegate</h3>
          {/* content */}
          <div className="flex flex-col justify-start items-start  gap-6">
            <p><span className='project-card-date'>Delegating</span> is where the group refines their guiding principles, roles, resources, rules, responsibilities, and relationships. To do so, user perspectives will be articulated and project proposals written and revised.</p>
            <ul className='list-disc list-outside space-y-3'>
              <li>
              <div className='project-card-topic-container'>
                  <div className="font-bold underline">Techniques/Approaches:</div>
                    <div className="project-card-topic">story perspectives</div>
                    <div className="project-card-topic">project outlines</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Guiding questions:</div>
                  <div className="process-question">“what emerging stories are resonating with you?”,</div>
                    <div className="process-question">"what is your vision?",</div>
                    <div className="process-question">"what resources, rules, and responsibilities do you need to make those visions come true?",</div>
                    <div className="process-question">"what are your goals, outcomes, needs, and deliverables?"</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Outcomes:</div>
                    <div className="process-outcome-badge">Story Perspectives,</div>
                    <div className="process-outcome-badge">Project Proposals</div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* do */}
        <div className="design-process-d-container">
          {/* header */}
          <h3>do</h3>
          {/* content */}
          <div className="flex flex-col justify-start items-start  gap-6">
            <p><span className='project-card-date'>Doing</span> allows people to pursue their responsibilities in whatever ways they've decided. Every individual and community is allowed full agency over their tasks, but are responsible for meeting expectations and allowed open access to the shared resource pool.</p>
            <ul className='list-disc list-outside space-y-3'>
              <li>
              <div className='project-card-topic-container'>
                  <div className="font-bold underline">Techniques/Approaches:</div>
                    <div className="project-card-topic">regular feedback</div>
                    <div className="project-card-topic">open flow of info</div>
                    <div className="project-card-topic">flexible communication</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Guiding questions:</div>
                  <div className="process-question">"what is your plan going forward?",</div>
                    <div className="process-question">"what progress have you made?",</div>
                    <div className="process-question">"what accomplishments/obstacles have you/are you running into?",</div>
                    <div className="process-question">"what support do you need to celebrate/address these events?"</div>
                </div>
              </li>
              <li>
                <div className="project-card-topic-container">
                  <div className="font-bold underline">Outcomes:</div>
                    <div className="process-outcome-badge">Communication Channels,</div>
                    <div className="process-outcome-badge">Feedback Cycles,</div>
                    <div className="process-outcome-badge">Product Development</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
          
      </div>

      </div>
    </div>
  
  </>);
}