import React from 'react';

export default function Home() {
  return (<>
    {/* general container */}
    <section id="home" className="w-full bg-lightPurple min-h-screen flex flex-col gap-10">

      {/* hero banner */}
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-around items-center p-10'>
        {/* image */}
        <img src={require("./../assets/jvh_headshot.png")} alt="jsun headshot" className='w-[25vw] object-cover rounded-full border-2 border-darkPurple'/>
        {/* name */}
        <div className="flex flex-col justify-start items-center gap-3">
          <h1 className=''>jsun velasco-hebert</h1>
          <p>designer  |  educator  |  developer</p>
        </div>
      </div>

      {/* quick link to projects */}
      <div className='w-full bg-white border-2 border-darkPurple flex flex-col justify-center items-center gap-10 p-4'>
        <h2>projects</h2>

        {/* project gallery */}
        <div className="w-full flex flex-wrap justify-center items-stretch border-2 border-darkPurple">

          {/* medipin card */}
          <div className="project-card">
            {/* image */}
            <img src={require("../../projects/story-framing/stick.png")} alt="" className='project-card-img'/>
            {/* title */}
            <h4 className='text-left'>Medipin</h4>
            {/* date */}
            <p className="project-card-date">Sept 2023</p>
            {/* description */}
            <p>In order to bridge the gap in knowledge between medical information and day-to-day awareness, Medipin was created as a proof-of-concept, pin-and-note web application. With Medipin, users can create an account, search and save medical articles from an external API, organize articles based on customized topics, and add personalized notes to each article. This project was solo-coded by me; moreover, enhancements of the site will continue to come out when time permits.</p>
          </div>

          {/* storyframing card */}
          <div className="project-card">
            {/* image */}
            <img src={require("../../projects/story-framing/stick.png")} alt="" className='project-card-img'/>
            {/* title */}
            <h4 className='text-left'>Storyframing: An Exploration in Storytelling</h4>
            {/* date */}
            <p className="project-card-date">June 2022</p>
            {/* description */}
            <p>Grounded by Linda Tuhiwai Smith’s definition of struggle (2012), this body of work evaluates the role of visual, verbal, and visceral storytelling in engaging the imagination as a language of possibility outside that of colonialism. It begs the question: how might we decolonize our minds, bodies, hearts, and spirits by (re-)engaging with and (re-)embodying the stories that we are involved within?</p>
          </div>

          {/* decolonizing design card */}
          <div className="project-card">
            {/* image */}
            <img src={require("../../projects/story-framing/stick.png")} alt="" className='project-card-img'/>
            {/* title */}
            <h4 className='text-left'>Postcolonial Explorations</h4>
            {/* date */}
            <p className="project-card-date">Jan 2022</p>
            {/* description */}
            <p>Taught over the RISD wintersession of 2022 under the Industrial Design department, this course "ID-1566: Postcolonial Explorations, Decentering Western Design Thinking Through Decolonial Engagement" brought together 11 students across departments and graduation years to see what diverse ways stories can be told when embodied using different techniques and approaches.</p>
          </div>

          {/* maharam card */}
          <div className="project-card">
            {/* image */}
            <img src={require("../../projects/story-framing/stick.png")} alt="" className='project-card-img'/>
            {/* title */}
            <h4 className='text-left'>Maharam x Groundwork Rhode Island, Green Team Youth</h4>
            {/* date */}
            <p className="project-card-date">July 2021</p>
            {/* description */}
            <p>Funded through the Maharam Fellowship Grant awarded by RISD, my teammate (Juliana) and I partnered with Groundwork Rhode Island's Green Team Youth to introduce and follow-through with youth-led projects aimed at identifying and solving small-scale issues around Providence and Pawtucket. In the end, the youth advertised their designs to the local community at two separate events.</p>
          </div>

          {/* growing system's tree card */}
          <div className="project-card">
            {/* image */}
            <img src={require("../../projects/story-framing/stick.png")} alt="" className='project-card-img'/>
            {/* title */}
            <h4 className='text-left'>Growing a Systems Tree</h4>
            {/* date */}
            <p className="project-card-date">...</p>
            {/* description */}
            <p>...</p>
          </div>

          {/* weaste card */}
          <div className="project-card">
            {/* image */}
            <img src={require("../../projects/story-framing/stick.png")} alt="" className='project-card-img'/>
            {/* title */}
            <h4 className='text-left'>(we)aste</h4>
            {/* date */}
            <p className="project-card-date">...</p>
            {/* description */}
            <p>...</p>
          </div>


        </div>
        

      </div>

    </section>
  </>);
}