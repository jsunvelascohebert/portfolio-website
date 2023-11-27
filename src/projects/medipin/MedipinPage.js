import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaComputer } from "react-icons/fa6";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbMessages } from "react-icons/tb";
import { LuPencil } from "react-icons/lu";
import { HiOutlinePuzzle } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import { BiExpandVertical } from "react-icons/bi";
import { BiCollapseVertical } from "react-icons/bi";



export default function MedipinPage() {

  // process variables
  const [isEmpathizeOpen, setIsEmpathizeOpen] = useState(true);
  const [isDefineOpen, setIsDefineOpen] = useState(false);
  const [isIdeateOpen, setIsIdeateOpen] = useState(false);
  const [isPrototypeOpen, setIsPrototypeOpen] = useState(false);
  const [isDevelopOpen, setIsDevelopOpen] = useState(false);
  const [isDeployOpen, setIsDeployOpen] = useState(false);

  // process content content
  const empathizeContent = 
    <div className="process-content">
      <Fade><img src={require('./assets/medipin-empathize-thumbnail.png')} alt="two women chatting at a table" className='medipin-image-thumbnail'/>
      <p className='md:max-w-[40vw]'>during the empathize phase, we spoke to current medical students starting with the question, “what are some issues in the medical field that you would want to see addressed?” the common pattern amongst their answers were centered on the discrepancy in health knowledge. upon further discussions with other involved parties, it was decided that an easily learnable app for bridging said gap would be central to the app’s development</p></Fade>
    </div>;
  const defineContent = 
    <div className="process-content">
      <Fade><img src={require('./assets/medipin-define-thumbnail.png')} alt="general master planning figma board during collaborative effort" className='medipin-image-thumbnail'/>
      <p className='md:max-w-[40vw]'>during the define phase, work was done to articulate the problem statement and goal statements. Our hypothesis is that: If Zoe can easily access credible information on their partner’s condition, then they will be more educated and supportive of their partner’s needs and concerns. Also, We believe that an intuitive interface that makes medical information accessible for Zoe will ease their nerves concerning their knowledge of medical information with their limited background training.</p></Fade>
    </div>;
  const ideateContent = 
    <div className="process-content">
      <Fade><img src={require('./assets/medipin-ideate-thumbnail.png')} alt="focused screenshot of figma board showing plans, task flow, and structure of app" className='medipin-image-thumbnail'/>
      <p className='md:max-w-[40vw]'>for the ideate phase, we used a shared FigJam board to map out the remaining elements of our goal statement, hypothesis, personas, as well as the systemic structure of the app. For the second version, the planning began with the MySQL database tables, moved onto the backend structure, and ended with some interface prototypes. The structure was based primarily on a Three-Layer Architecture model: global level models, data layer repositories, domain level validation services, and a user interface level model/view/control structure.</p></Fade>
    </div>;
  const prototypeContent = 
    <div className="process-content">
      <Fade><img src={require('./assets/medipin-prototype-thumbnail.png')} alt="figma prototype board with hi-fidelity page mockups and links between interactive elements" className='medipin-image-thumbnail'/>
      <p className='md:max-w-[40vw]'>when prototyping, Figma was used to create both lo-fidelity and hi-fidelity mockups. with Figma, there was a focus on utilizing all of the available tools and features, including auto-layout, variants, and local variables. interactivity was an important element, so two interactive prototypes are made available for both the lo-fidelity and hi-fidelity mockups. lastly, responsive design was deeply considered, so both mobile and desktop versions were designed.</p></Fade>
    </div>;
  const developContent = 
    <div className="process-content">
      <Fade><img src={require('./assets/medipin-development-thumbnail.png')} alt="screenshow of medipin code, showing react front-end example code" className='medipin-image-thumbnail'/>
      <p className='md:max-w-[40vw]'>development materialized into three main phases: the MySQL database, the Java backend, and the React front-end. as hinted at, MySQL and Docker were used for creating the database. the Java Backend prioritized SpringBoot and included test-driven development with JUnit tests. Lastly, the front-end uses both React and Tailwind CSS. all elements were created from scratch using the utility framework.</p></Fade>
    </div>;
  const deployContent = 
    <div className="process-content">
      <Fade><img src={require('./assets/medipin-deploy-thumbnail.png')} alt="screenshot of heroku metrics page for medipin" className='medipin-image-thumbnail'/>
      <p className='md:max-w-[40vw]'>for deploying medipin, multiple routes were considered including AWS and Heroku. Heroku was ultimately decided due to the simplicity in its services. all elements of the app are hosted on Heroku; including the backend, database, and front-end separately. in the future, AWS will be considered when resources, time, and energy are less sparse.</p></Fade>
    </div>;

  // click events for process accordian
  const openAccordian = (name) => {
    setIsEmpathizeOpen(false);
    setIsDefineOpen(false);
    setIsIdeateOpen(false);
    setIsPrototypeOpen(false);
    setIsDevelopOpen(false);
    setIsDeployOpen(false);

    switch (name) {
      case 'empathize':
        setIsEmpathizeOpen(true);
        break;
      case 'define':
        setIsDefineOpen(true);
        break;
      case 'ideate':
        setIsIdeateOpen(true);
        break;
      case 'prototype':
        setIsPrototypeOpen(true);
        break;
      case 'develop':
        setIsDevelopOpen(true);
        break;
      case 'deploy':
        setIsDeployOpen(true);
        break;
    }
  }

  return (<>
    {/* general container */}
    <div className="w-full flex flex-col gap-10 justify-center items-center">
      {/* hero */}
      <div className="w-full flex flex-col justify-center items-center py-12 gap-2 bg-gradient-to-b from-purple to-white">
        {/* hero header */}
        <Fade><h1 className='p-12'>medipin</h1></Fade>
        {/* quick links */}
        <Fade><div className="flex flex-row gap-10 justify-center items-center px-10 py-5">
          {/* site link */}
          <Link className="flex flex-col justify-center items-center gap-2 group transition-all" to='https://medipin-client-29ba1901c9d4.herokuapp.com/' target='_blank'>
            <FaComputer className='text-2xl text-darkPurple group-hover:scale-110' />
            <p className='group-hover:scale-105 text-darkPurple group-hover:underline'>site link <FaExternalLinkAlt className='inline-block text-xs text-darkPurple group-hover:scale-110 -translate-y-0.5'/></p>
          </Link>
          {/* github repo link */}
          <Link className="flex flex-col justify-center items-center gap-2 group transition-all" to='https://github.com/jsunvelascohebert/medipin' target="_blank">
            <FaGithub className='text-2xl text-darkPurple group-hover:scale-110' />
            <p className='group-hover:scale-105 text-darkPurple group-hover:underline'>github repo <FaExternalLinkAlt className='inline-block text-xs text-darkPurple group-hover:scale-110 -translate-y-0.5'/></p>
          </Link>
        </div></Fade>
        {/* hero image */}
        <Fade><img src={require('./assets/medipin-thumbnail.png')} alt="medipin note page render with laptop and phone" /></Fade>
        </div>
    </div>

    {/* basic information */}
    <Fade><p className='max-w-[75vw] md:max-w-[50vw] text-center mx-auto'>Medipin was created to bridge the gap between medical information and awareness. by allowing users to search, save, and supplement medical knowledge through it's pin-and-note application structure, Medipin offers a platform for engaging and empowering our knowledge over our personal health.</p></Fade>
    
    {/* features */}
    <div className="w-full flex flex-col gap-12 justify-center items-center py-24">
      <Fade><h2>features</h2></Fade>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch border-2 border-darkPurple">
        {/* search */}
        <Fade className='feature-card-fade-box'>
          <div className="feature-card">
            <img src={require('./assets/medipin-search.png')} alt="medipin search page shown on tablets" />
            <h3>search</h3>
            <p className='feature-card-text'>Using the built-in search feature, peruse the U.S. Department of Health and Human Services database for health-related articles.</p>
          </div>
        </Fade>
        {/* pin */}
        <Fade className='feature-card-fade-box'>
          <div className="feature-card">
            <img src={require('./assets/medipin-topic.png')} alt="medipin topic page shown phone and laptop" />
            <h3>pin</h3>
            <p className="feature-card-text">Create, edit, and delete customized topics to pin relevant or interesting articles. There are no limits to the number of topics you can create.</p>
          </div>
        </Fade>
        {/* note */}
        <Fade className='feature-card-fade-box'>
          <div className="feature-card">
            <img src={require('./assets/medipin-notes.png')} alt="medipin notes page shown on phone and tablet" />
            <h3>note</h3>
            <p className="feature-card-text">Annotate pinned articles with notes that are stored securely behind your account information. Notes can be of any length.</p>
          </div>
        </Fade>
      </div>
    </div>

    {/* process */}
    <div className="w-full flex flex-col justify-center items-center gap-10 pb-24">
      <Fade><h2>process</h2></Fade>

      {/* DESKTOP -- process elements */}
      <div className="hidden md:flex flex-col gap-10 justify-center items-center w-full">
        {/* tab bar */}
        <Fade><div className="flex flex-row justify-center items-center 
        border-2 border-darkPurple bg-lightPurple">
          {/* empathize */}
          <div className={isEmpathizeOpen ? 'accordian-tab-active' : 'accordian-tab'} onClick={() => openAccordian('empathize')}>
            {/* icon */}
            <TbMessages className='text-4xl' />
            {/* text */}
            <h5>empathize</h5>
          </div>
          {/* define */}
          <div className={isDefineOpen ? 'accordian-tab-active' : 'accordian-tab'} onClick={() => openAccordian('define')}>
            {/* icon */}
            <LuPencil className='text-4xl' />
            {/* text */}
            <h5>define</h5>
          </div>
          {/* ideate */}
          <div className={isIdeateOpen ? 'accordian-tab-active' : 'accordian-tab'} onClick={() => openAccordian('ideate')}>
            {/* icon */}
            <HiOutlinePuzzle className='text-4xl' />
            {/* text */}
            <h5>ideate</h5>
          </div>
          {/* prototype */}
          <div className={isPrototypeOpen ? 'accordian-tab-active' : 'accordian-tab'} onClick={() => openAccordian('prototype')}>
            {/* icon */}
            <FiTool className='text-4xl' />
            {/* text */}
            <h5>prototype</h5>
          </div>
          {/* develop */}
          <div className={isDevelopOpen ? 'accordian-tab-active' : 'accordian-tab'} onClick={() => openAccordian('develop')}>
            {/* icon */}
            <HiOutlineDesktopComputer className='text-4xl' />
            {/* text */}
            <h5>develop</h5>
          </div>
          {/* deploy */}
          <div className={isDeployOpen ? 'accordian-tab-active' : 'accordian-tab'} onClick={() => openAccordian('deploy')}>
            {/* icon */}
            <LuSend className='text-4xl' />
            {/* text */}
            <h5>deploy</h5>
          </div>
        </div></Fade>

        {/* tab content */}
        <div>
          {isEmpathizeOpen && empathizeContent}
          {isDefineOpen && defineContent}
          {isIdeateOpen && ideateContent}
          {isPrototypeOpen && prototypeContent}
          {isDevelopOpen && developContent}
          {isDeployOpen && deployContent}
        </div>
        

      </div>

      {/* MOBILE -- process elements */}
      <div className="flex md:hidden flex-col justify-center items-center w-[90vw] bg-purple border-2 border-darkPurple">

        {/* empathize tab */}
        <div className={isEmpathizeOpen ? 'accordian-tab-active-mobile' : 'accordian-tab-mobile'} onClick={() => openAccordian('empathize')}>
          <Fade>
          {/* icon name container */}
          <div className="flex flex-row justify-start items-center gap-2">
            {/* icon */}
            <TbMessages className='text-2xl' />
            {/* text */}
            <h5>empathize</h5>
          </div>
          {/* arrow icon */}
          {isEmpathizeOpen
            ? <BiCollapseVertical className='text-2xl' />
              : <BiExpandVertical className='text-2xl' />}
          </Fade>
        </div>

        {/* empathize content */}
        {isEmpathizeOpen &&
          <div className='accordian-content-mobile'>
            {empathizeContent}
          </div>}

        {/* define tab */}
        <div className={isDefineOpen ? 'accordian-tab-active-mobile' : 'accordian-tab-mobile'} onClick={() => openAccordian('define')}>
          <Fade>
          {/* icon name container */}
          <div className="flex flex-row justify-start items-center gap-2">
            {/* icon */}
            <LuPencil className='text-2xl' />
            {/* text */}
            <h5>define</h5>
          </div>
          {/* arrow icon */}
          {isDefineOpen
            ? <BiCollapseVertical className='text-2xl' />
              : <BiExpandVertical className='text-2xl' />}
          </Fade>
        </div>

        {/* define content */}
        {isDefineOpen &&
          <div className='accordian-content-mobile'>
            {defineContent}
          </div>}

        {/* ideate tab */}
        <div className={isIdeateOpen ? 'accordian-tab-active-mobile' : 'accordian-tab-mobile'} onClick={() => openAccordian('ideate')}>
          <Fade>
          {/* icon name container */}
          <div className="flex flex-row justify-start items-center gap-2">
            {/* icon */}
            <HiOutlinePuzzle className='text-2xl' />
            {/* text */}
            <h5>ideate</h5>
          </div>
          {/* arrow icon */}
          {isIdeateOpen
            ? <BiCollapseVertical className='text-2xl' />
              : <BiExpandVertical className='text-2xl' />}
          </Fade>
        </div>

        {/* ideate content */}
        {isIdeateOpen &&
          <div className='accordian-content-mobile'>
            {ideateContent}
          </div>}

        {/* prototype tab */}
        <div className={isPrototypeOpen ? 'accordian-tab-active-mobile' : 'accordian-tab-mobile'} onClick={() => openAccordian('prototype')}>
          <Fade>
          {/* icon name container */}
          <div className="flex flex-row justify-start items-center gap-2">
            {/* icon */}
            <FiTool className='text-2xl' />
            {/* text */}
            <h5>prototype</h5>
          </div>
          {/* arrow icon */}
          {isPrototypeOpen
            ? <BiCollapseVertical className='text-2xl' />
              : <BiExpandVertical className='text-2xl' />}
          </Fade>
        </div>

        {/* prototype content */}
        {isPrototypeOpen &&
          <div className='accordian-content-mobile'>
            {prototypeContent}
          </div>}

        {/* develop tab */}
        <div className={isDevelopOpen ? 'accordian-tab-active-mobile' : 'accordian-tab-mobile'} onClick={() => openAccordian('develop')}>
          <Fade>
          {/* icon name container */}
          <div className="flex flex-row justify-start items-center gap-2">
            {/* icon */}
            <HiOutlineDesktopComputer className='text-2xl' />
            {/* text */}
            <h5>develop</h5>
          </div>
          {/* arrow icon */}
          {isDevelopOpen
            ? <BiCollapseVertical className='text-2xl' />
              : <BiExpandVertical className='text-2xl' />}
          </Fade>
        </div>

        {/* develop content */}
        {isDevelopOpen &&
          <div className='accordian-content-mobile'>
            {developContent}
          </div>}     

        {/* deploy tab */}
        <div className={isDeployOpen ? 'accordian-tab-active-mobile' : 'accordian-tab-mobile'} onClick={() => openAccordian('deploy')}>
          <Fade>
          {/* icon name container */}
          <div className="flex flex-row justify-start items-center gap-2">
            {/* icon */}
            <LuSend className='text-2xl' />
            {/* text */}
            <h5>deploy</h5>
          </div>
          {/* arrow icon */}
          {isDeployOpen
            ? <BiCollapseVertical className='text-2xl' />
              : <BiExpandVertical className='text-2xl' />}
          </Fade>
        </div>

        {/* deploy content */}
        {isDeployOpen &&
          <div className='accordian-content-mobile'>
            {deployContent}
          </div>}

      </div>


      
    </div>

    {/* documentation */}

  </>);
}