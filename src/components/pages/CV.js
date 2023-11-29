import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function CV() {
  return (<>
    <div className="base-container">
      <Fade className='w-full'>

        {/* header */}
        <div className="page-header-spaced">
          <h1>cv</h1>
        </div>

        {/* todo -- quick links to each section */}

        {/* education */}
        <div id="education" className="w-full flex flex-col justify-center items-center">
          {/* header */}
          <h2>education</h2>
          {/* content container */}
          <div className="w-full flex flex-col md:flex-row justify-center items-stretch">

            {/* risd */}
            <div className="cv-school-container">
              {/* school logo */}
              <div className='cv-school-logo'>
                <img src={require('./../assets/risd-logo.png')} alt="risd logo"/>
              </div>
              
              {/* school info */}
              <div className="cv-school-info-container">
                {/* name */}
                <h3 className='cv-school-name'>Rhode Island School of Design</h3>

                {/* diploma title */}
                <h4 className='cv-school-diploma'>Master of Industrial Design</h4>

                {/* skills learned as badges */}
                <div className="project-card-topic-container">
                  <div className="project-card-date">June 2022</div>
                  <div className="project-card-topic">Systems Design</div>
                  <div className="project-card-topic">Social Impact</div>
                  <div className="project-card-topic">Food & Climate Change</div>
                  <div className="project-card-topic">Education</div>
                  <div className="project-card-topic">Community Engagement</div>
                </div>

                {/* relevant info */}
                <p>Awarded the Social Justice Award & a Certificate in Collegiate Teaching in Art + Design</p>
              </div>
            </div>


            {/* brown */}
            <div className="cv-school-container">
              {/* school logo */}
              <div className='cv-school-logo'>
                <img src={require('./../assets/risd-logo.png')} alt="risd logo"/>
              </div>
              
              {/* school info */}
              <div className="cv-school-info-container">
                {/* name */}
                <h3 className='cv-school-name'>Brown University</h3>

                {/* diploma title */}
                <h4 className='cv-school-diploma'>Bachelor of Art,
                  <br />Modern Culture and Media (Digital Media Production)</h4>

                {/* skills learned as badges */}
                <div className="project-card-topic-container">
                  <div className="project-card-date">May 2019</div>
                  <div className="project-card-topic">Software Development</div>
                  <div className="project-card-topic">UI/UX</div>
                  <div className="project-card-topic">Digital Media</div>
                  <div className="project-card-topic">Web Design</div>
                </div>

                {/* relevant info */}
                <p>Primary focus on the intersections of technology and societies within digital media. Coursework included web design, user interface/experiences, and software engineering</p>
              </div>
            </div>



          </div>
        </div>

        {/* experience */}
        <div id="experience" className="w-full flex flex-col justify-center items-center">

        </div>

        {/* certificates & awards */}
        <div id="certificates" className="w-full flex flex-col justify-center items-center">

        </div>

      </Fade>
    </div>
  </>);
}