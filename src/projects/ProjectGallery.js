import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectGallery() {
  return (<>
    {/* project gallery */}
    <div className="w-full flex flex-wrap justify-center items-stretch border-2 border-darkPurple">

      {/* medipin card */}
      <div className="project-card" tabIndex={0}>
        {/* image */}
        <img src={require("./thumbnails/medipin-card-thumbnail.png")} alt="" className='project-card-img'/>
        {/* title */}
        <h4 className='text-left'>Medipin</h4>
        {/* date */}
        <p className="project-card-date">Fall 2023</p>
        {/* description */}
        <p>In order to bridge the gap in knowledge between medical information and day-to-day awareness, Medipin was created as a proof-of-concept, pin-and-note web application. With Medipin, users can create an account, search and save medical articles from an external API, organize articles based on customized topics, and add personalized notes to each article. This project was solo-coded by me; moreover, enhancements of the site will continue to come out when time permits.</p>
      </div>

      {/* storyframing card */}
      <div className="project-card" tabIndex={0}>
        {/* image */}
        <img src={require("./thumbnails/storyframing-card-thumbnail.png")} alt="" className='project-card-img'/>
        {/* title */}
        <h4 className='text-left'>Storyframing: An Exploration in Storytelling</h4>
        {/* date */}
        <p className="project-card-date">Spring 2022</p>
        {/* description */}
        <p>Grounded by Linda Tuhiwai Smith’s definition of struggle (2012), this body of work evaluates the role of visual, verbal, and visceral storytelling in engaging the imagination as a language of possibility outside that of colonialism. It begs the question: how might we decolonize our minds, bodies, hearts, and spirits by (re-)engaging with and (re-)embodying the stories that we are involved within?</p>
      </div>

      {/* teaching portfolio card */}
      <Link className="project-card" tabIndex={0} to="https://drive.google.com/file/d/1BhGsqbYhOBvw3Iwirc3qyxozu0knQWad/view?usp=sharing" target="_blank">
        {/* image */}
        <img src={require("./thumbnails/teaching-card-thumbnail.png")} alt="" className='project-card-img'/>
        {/* title */}
        <h4 className='text-left'>Teaching Portfolio</h4>
        {/* date */}
        <p className="project-card-date">Fall 2021</p>
        {/* description */}
        <p>As part of the curriculum for receiving the Certificate in Collegiate Teaching in Art & Design, a teaching portfolio was required. Inside can be found my teaching philosophy, inclusivity statement, and examples of proposed and accepted syllabi. Over the winter of 2022, I taught the accepted class "Postcolonial Explorations: Decentering Western Design Thinking" to a total of 11 students across academic year and department over the span of 5 weeks.</p>
      </Link>

      {/* maharam card */}
      <div className="project-card" tabIndex={0}>
        {/* image */}
        <img src={require("./thumbnails/maharam-card-thumbnail.png")} alt="" className='project-card-img'/>
        {/* title */}
        <h4 className='text-left'>Maharam x Groundwork Rhode Island, Green Team Youth</h4>
        {/* date */}
        <p className="project-card-date">Summer 2021</p>
        {/* description */}
        <p>Funded through the Maharam Fellowship Grant awarded by RISD, my teammate (Juliana) and I partnered with Groundwork Rhode Island's Green Team Youth to introduce and follow-through with youth-led projects aimed at identifying and solving small-scale issues around Providence and Pawtucket. In the end, the youth advertised their designs to the local community at two separate events.</p>
      </div>

      {/* growing system's tree card */}
      <Link className="project-card" tabIndex={0} to="https://drive.google.com/file/d/1gcyQGz2V9W-rni94g3mNcIlSPbZCPAQl/view?usp=sharing" target="_blank">
        {/* image */}
        <img src={require("./thumbnails/tree-card-thumbnail.png")} alt="" className='project-card-img'/>
        {/* title */}
        <h4 className='text-left'>Growing a Systems Tree</h4>
        {/* date */}
        <p className="project-card-date">Spring 2021</p>
        {/* description */}
        <p>Through extensive research on decolonization and systems design, "Growing a Systems Tree: Designing a Shared Systems Mapping Framework for Cross-Cultural Collaboration Involving a Systemic Root Problem" was made. In it, I explore an Indigenous-centered case study and propose a new approach for mapping current systems and pinpointing potential intervention points.</p>
      </Link>

      {/* weaste card */}
      <div className="project-card" tabIndex={0}>
        {/* image */}
        <img src={require("./thumbnails/weaste-card-thumbnail.png")} alt="" className='project-card-img'/>
        {/* title */}
        <h4 className='text-left'>(we)aste</h4>
        {/* date */}
        <p className="project-card-date">Spring 2021</p>
        {/* description */}
        <p>As commentary for the amount of waste produced during the design process during a core industrial design course, (we)aste consists of a trash can, skirt, and bag made of scavenged unwanted materials. It exists to raise awareness of unnecessary waste production oftentimes ignored throughout design, especially during the prototype phase.</p>
      </div>
      </div>
  </>);
}