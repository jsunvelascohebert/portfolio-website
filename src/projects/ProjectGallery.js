import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

export default function ProjectGallery() {
  return (<>
    {/* project gallery */}
    <div className="w-full flex flex-wrap justify-center items-stretch border-2 border-darkPurple bg-purple">

      {/* medipin card */}
      <Link className='project-card' to='/projects/medipin'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/medipin-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>Medipin</h4>
          {/* date */}
          <p className="project-card-date">Fall 2023</p>
          {/* description */}
          <p>In order to bridge the gap in knowledge between medical information and day-to-day awareness, Medipin was created as a proof-of-concept, pin-and-note web application. With Medipin, users can create an account, search and save medical articles from an external API, organize articles based on customized topics, and add personalized notes to each article. This project was solo-coded by me; moreover, enhancements of the site will continue to come out when time permits.</p>
          </Fade>
      </Link>

      {/* creative change card */}
      <Link className="project-card" to="https://drive.google.com/file/d/1SdbBcSbxipJA47eJi8gCKUsUHbk8Ulkx/view?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/dcd-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>DCD 2022 ~ Creative Change x Youth Pride Inc.</h4>
          {/* date */}
          <p className="project-card-date">Summer 2022</p>
          {/* description */}
          <p>As a Design Educator for DownCity Design's 2022 summer Creative Change program, it was my duty to educate a group of 14 youth in graphic design for social impact. In partnernship with Youth Pride Inc., these young designers used the design process to create brochures, stickers, flyers, and a banner.</p>
        </Fade>
      </Link>
      
      {/* storyframing card */}
      <Link className="project-card" to="https://drive.google.com/file/d/16veGCVLnfdNJlQdSiQESBPREoRg-8EDi/view?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/storyframing-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>Storyframing: An Exploration in Storytelling</h4>
          {/* date */}
          <p className="project-card-date">Spring 2022</p>
          {/* description */}
          <p>Grounded by Linda Tuhiwai Smith’s definition of struggle (2012), this body of work evaluates the role of visual, verbal, and visceral storytelling in engaging the imagination as a language of possibility outside that of colonialism. It begs the question: how might we decolonize our minds, bodies, hearts, and spirits by (re-)engaging with and (re-)embodying the stories that we are involved within?</p>
        </Fade>
      </Link>

      {/* teaching portfolio card */}
      <Link className="project-card" to="https://drive.google.com/file/d/1dmKtW_GW4LIgaNQ37eyLrvi3DdiUVqJC/view?usp=sharing" target="_blank">
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/teaching-card-thumbnail.png")} alt="teaching thumbnail showing snippets of teaching portfolio" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>Teaching Portfolio</h4>
          {/* date */}
          <p className="project-card-date">Fall 2021</p>
          {/* description */}
          <p>As part of the curriculum for receiving the Certificate in Collegiate Teaching in Art & Design, a teaching portfolio was required. Inside can be found my teaching philosophy, inclusivity statement, and examples of proposed and accepted syllabi. Over the winter of 2022, I taught the accepted class "Postcolonial Explorations: Decentering Western Design Thinking" to a total of 11 students across academic year and department over the span of 5 weeks.</p>
        </Fade>
      </Link>

      {/* maharam card */}
      <Link className="project-card" to="https://drive.google.com/file/d/1bWv4Wb5hmUK-NJ0TPtBXAHc6Dk_0NyMs/view?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/maharam-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>Maharam x Groundwork Rhode Island, Green Team Youth</h4>
          {/* date */}
          <p className="project-card-date">Summer 2021</p>
          {/* description */}
          <p>Funded through the Maharam Fellowship Grant awarded by RISD, my teammate (Juliana) and I partnered with Groundwork Rhode Island's Green Team Youth to introduce and follow-through with youth-led projects aimed at identifying and solving small-scale issues around Providence and Pawtucket. In the end, the youth advertised their designs to the local community at two separate events.</p>
        </Fade>
      </Link>

      {/* growing system's tree card */}
      <Link className="project-card" to="https://drive.google.com/file/d/1gcyQGz2V9W-rni94g3mNcIlSPbZCPAQl/view?usp=sharing" target="_blank">
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/tree-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>Growing a Systems Tree</h4>
          {/* date */}
          <p className="project-card-date">Spring 2021</p>
          {/* description */}
          <p>Through extensive research on decolonization and systems design, "Growing a Systems Tree: Designing a Shared Systems Mapping Framework for Cross-Cultural Collaboration Involving a Systemic Root Problem" was made. In it, I explore an Indigenous-centered case study and propose a new approach for mapping current systems and pinpointing potential intervention points.</p>
        </Fade>
      </Link>

      {/* cli haz book card */}
      <Link className="project-card" to="https://drive.google.com/file/d/1sG7fJXvWs8RN2aWX_7TKf5MRodjl7FaC/view?usp=sharing" target="_blank">
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/aaad-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>an apple a day</h4>
          {/* date */}
          <p className="project-card-date">Spring 2021</p>
          {/* description */}
          <p>An Apple a Day: Following Food Waste, is an illustrative book following the story of food waste and its environmental impact along the entire food supply chain. Through visual storytelling, this children's book was planned to engage older audiences with deeper information through interactive openings.</p>
        </Fade>
      </Link>

      {/* weaste card */}
      <Link className="project-card" to="https://drive.google.com/drive/folders/1vZXPwvSji5XJSaF7jkVSlXQA0gq-I7eG?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/weaste-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>(we)aste</h4>
          {/* date */}
          <p className="project-card-date">Spring 2021</p>
          {/* description */}
          <p>As commentary for the amount of waste produced during the design process during a core industrial design course, (we)aste consists of a trash can, skirt, and bag made of scavenged unwanted materials. It exists to raise awareness of unnecessary waste production oftentimes ignored throughout design, especially during the prototype phase.</p>
        </Fade>
      </Link>

      {/* implant card */}
      <Link className="project-card" to="https://drive.google.com/drive/folders/1VfnHLWk-4C5dn7lcP_LU78nntcOGDbeo?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/implant-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>implant</h4>
          {/* date */}
          <p className="project-card-date">Fall 2020</p>
          {/* description */}
          <p>implant was designed as a social service for addressing climate change through food systems. Based on reports from the Drawdown 2020, food is one of the largest intervention points for curbing carbon emission. implant proposes a mobile food pantry which flexible and dynamically brings salvaged, locally-sourced prodouce to food apartheid areas.</p>
        </Fade>
      </Link>

      {/* implant card */}
      <Link className="project-card" to="https://drive.google.com/file/d/1QT_88RjV2CspRflmz6v9AGVzF0HiTbxn/view?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/covid-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>care towards an environmentally-just, post-COVID future</h4>
          {/* date */}
          <p className="project-card-date">Spring 2020</p>
          {/* description */}
          <p>This zine was made during the initial shutdown of COVID-19 in America. It is a synthesis of my struggle and research with the pandemic and highlights important factors contributing to its effects. Topics include: hope, care, crisis; zoonotic diseases; discrimination and injustice; unexpected environmental outcomes; prevention tactics and better governing; and proposals for better futures.</p>
        </Fade>
      </Link>

      {/* fanimalies card */}
      <Link className="project-card" to="https://drive.google.com/drive/folders/1a3oMW0NILTMzED7oldDfMA9gB_9rcH4r?usp=sharing" target='_blank'>
        <Fade>
          {/* image */}
          <img src={require("./thumbnails/fanimalies-card-thumbnail.png")} alt="" className='project-card-img'/>
          {/* title */}
          <h4 className='text-left'>fanimalies</h4>
          {/* date */}
          <p className="project-card-date">Summer 2018</p>
          {/* description */}
          <p>Fanimalies was completed during a black-and-white film photography class over the Summer of 2018. One outing during the class led us to the RISD Nature Lab where I spent hours requesting, re-arranging, and re-photographing groups of taxidermy animals. The name is a mashup of the words "family" and "animals" which alludes to its themes of showcasing dynamic relationships through these objects, previously subjects.</p>
        </Fade>
      </Link>


    </div>
  </>);
}