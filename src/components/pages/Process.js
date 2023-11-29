import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Process() {
  return (<>
    <div className="base-container pb-10">

      {/* header */}
      <div className="page-header-spaced">
        <Fade><h1>design process</h1></Fade>
      </div>

      {/* hero image */}
      <div className="w-[90vw] sm:w-[75vw] md:w-[50vw] flex justify-center items-center pb-10">
        <Fade><img src={require('./../assets/process-diagram.png')} alt="" /></Fade>
      </div>

      {/* design definition container */}<Fade>
      <div className="w-[85vw] flex flex-col md:flex-row justify-center items-start gap-10">
        
        {/* design def quote */}<Fade className='w-full md:w-1/2'>
        <h3 className='text-left md:text-right w-full'><span className='opacity-40'>Design is a dynamic, non-linear process that involves </span>discussing, deciding, delegating, and doing, <span className='opacity-40'>all underpinned by the continual act of </span>empathizing<span className='opacity-40'>. This iterative cycle is enveloped in a protective and evolving layer of </span>diversity, inclusivity, equity, and self-determination<span className='opacity-40'>, values that form the bedrock of my approach to design.</span></h3></Fade>
        
        {/* remaining definition */}<Fade className='w-full md:w-1/2'>
        <div className='flex flex-col justify-start items-start w-full gap-5'>
          <Fade><p><span className='project-card-date'>Empathizing</span><span className='opacity-50'> serves as the foundational force for connection, where individuals come together to share their stories, visions, and interventions. Techniques such as </span><span className='project-card-topic'>talking circles</span><span className='opacity-50'>,</span> <span className='project-card-topic'>diverse forms of interaction</span><span className='opacity-50'>, and the early establishment of </span><span className='project-card-topic'>community guidelines</span><span className='opacity-50'> facilitate this empathic exchange. Key guiding questions include, </span><span className='process-question'>tell us about yourself?</span><span className='opacity-50'> and </span><span className='process-question'>what does empathy look and feel like to you?</span><span className='opacity-50'> The outcomes of this stage include the development of an </span><span className='process-outcome-badge'>Empathy Tree</span><span className='opacity-50'>, result from a branching workshop for growing a shared idea of empathy, and a refined </span><span className='process-outcome-badge'>Community Guidelines List</span><span className='opacity-50'> that encapsulates the rules and responsibilities emerging from the tree.</span></p></Fade>
          
          <Fade><p><span className='opacity-50'>In the subsequent stages of </span><span className='project-card-date'>discussing</span><span className='opacity-50'>, </span><span className='project-card-date'>deciding</span><span className='opacity-50'>, </span><span className='project-card-date'>delegating</span><span className='opacity-50'>, and </span><span className='project-card-date'>doing</span><span className='opacity-50'>, we employ specific techniques and approaches such as </span><span className='project-card-topic'>talking circles</span><span className='opacity-50'>, </span><span className='project-card-topic'>sticky note stories</span><span className='opacity-50'>, analog and digital </span><span className='project-card-topic'>mapping</span><span className='opacity-50'>, and regular </span><span className='project-card-topic'>feedback cycles</span><span className='opacity-50'>. Each stage is guided by questions aimed at fostering </span><span className='process-question'>collaboration, understanding, and progress</span><span className='opacity-50'>. The ultimate goal is to allow individuals and communities </span><span className='process-outcome-badge'>full agency</span><span className='opacity-50'> over their tasks while maintaining a </span><span className='process-outcome-badge'>shared resource pool</span><span className='opacity-50'> and upholding the values of </span><span className='project-card-date'>diversity</span><span className='opacity-50'>, </span><span className='project-card-date'>equity</span><span className='opacity-50'>, </span><span className='project-card-date'>inclusion</span><span className="opacity-50">, and </span><span className="project-card-date">self-determination</span><span className="opacity-50">.</span></p></Fade>
            
          <Fade><p className='opacity-50'>This continuous cycle of design is sustained by the constant upkeep of these core values, ensuring that empathy remains at the forefront, and the process unfolds smoothly.</p></Fade>
        </div></Fade>
      </div></Fade>


    </div>
  </>);
}