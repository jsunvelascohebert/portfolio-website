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
    <div className="w-full flex flex-col md:flex-row justify-start items-start gap-2">
      <p>during the empathize phase, we spoke to current medical students starting with the question, “what are some issues in the medical field that you would want to see addressed?” the common pattern amongst their answers were centered on the discrepancy in health knowledge. upon further discussions with other involved parties, it was decided that an easily learnable app for bridging said gap would be central to the app’s development</p>
    </div>;
  const defineContent = '';
  const ideateContent = '';
  const prototypeContent = '';
  const developContent = '';
  const deployContent = '';

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

        {/* TODO : empathize content */}
        <div className={isEmpathizeOpen
          ? 'accordian-content-active-mobile'
          : 'accordian-content-mobile'}>
          <Fade>
            
            <p>during the empathize phase, we spoke to current medical students starting with the question, “what are some issues in the medical field that you would want to see addressed?” the common pattern amongst their answers were centered on the discrepancy in health knowledge. upon further discussions with other involved parties, it was decided that an easily learnable app for bridging said gap would be central to the app’s development</p>
          </Fade>
        </div>

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

      </div>


      
    </div>

    {/* documentation */}

  </>);
}