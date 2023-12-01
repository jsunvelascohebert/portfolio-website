import React from 'react';

export default function SupportiveValues() {
  return (<>
    {/* general container */}
    <div className="base-container pt-12 gap-20">
      {/* header */}
      <h5 className='w-[75vw] md:w-[50vw]'>Protecting and nurturing this cycle are the values of respect, relationality, reciprocity, and responsiblity. Through the constant upkeep of these core Indigenous values, empathy is maintained and the process of "designing" in this context may continue smoothly.</h5>

      {/* values container */}
      <div className="w-[90vw] md:w-[95vw] flex flex-col justify-center items-center gap-0 border-2 border-darkPurple">

        {/* values */}
        <div className="w-full flex flex-wrap">
          <div className="design-process-value-container">
            <h3 className='text-left'>reciprocity</h3>
            {/* content */}
            <p>ensuring the equitable and accessible engagement of diverse peoples within the space in ways that promote mutual trust, sharing, and equal gift-giving</p>
          </div>

          <div className="design-process-value-container">
            <h3 className='text-left'>relationality</h3>
            {/* content */}
            <p>understanding the diverse range of contexts, cultures, and communities that make up the multiple ecologies within and around the gathering spaces</p>
          </div>

          <div className="design-process-value-container">
            <h3 className='text-left'>responsibility</h3>
            {/* content */}
            <p>recognizing and upholding the roles and rules within the gathering spaces to ensure both individual and collective needs are being met</p>
          </div>

          <div className="design-process-value-container">
            <h3 className='text-left'>wholism</h3>
            {/* content */}
            <p>working towards the development of the wholistic form of every participant -- fostering growth within their heart, mind, body, and spirit</p>
          </div>
        </div>
      </div>
    </div>
  </>);
}