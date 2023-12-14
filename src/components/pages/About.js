import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function About() {
  return (<>
    <div className="base-container">
        {/* header */}
        <div className="page-header-spaced">
        <Fade>
          <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1>about jsun</h1>
          </div>  
        </Fade>
      </div>

      {/* image and core summary */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full p-10">
        <img src={require('./../assets/jvh_headshot.png')} alt="jsun headshot" className='w-full md:w-1/2' />
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4">
          <p>heyo, i'm jsun velasco-hébert — a neurodivergent, non-binary, and multiracial storyteller immersed in design, development, and education.</p>
          <p>i'm passionate about decolonization, design thinking for social impact, education, and community engagement. these are my tools for creating opportunities and resilience within communities, thanks to my adaptability, resourcefulness, and creativity rooted in my unique background and identity. as a multiracial designer, i blend my Filipinx heritage with the Abenaki values that shaped my upbringing. navigating through predominantly cis-heteronormative and colonial spaces, i embrace my identity as a queer, non-binary, and gender-non-conforming AMAB individual. coming from a neurodivergent, first-generation college background with a challenging past, i intimately understand the intersectional struggles faced by individuals and communities within the oppressive systems that surround us.</p>
          <p>in my journey of self-discovery, i've made it a life goal to use my unique position to support positive change. i'm here to amplify diverse voices, listen to shared struggles, and back change-makers crafting self-driven solutions. let's join forces in creating a future where our collective stories shape a better world.</p>
        </div>
      </div>

      {/* what drives me */}
      <div className="flex flex-col justify-center items-center gap-5 mx-auto max-w-[65vw]">
        <h2>what drives me</h2>
        <p>I find inspiration in the present and future convergence of design and education, seeing them as catalysts for uniting communities in the pursuit of collaborative solutions to shared challenges. Emphasizing the principles of sovereignty and self-determination, I believe in affording communities the chance and resources to cultivate resilience through collaborative projects, support systems, and partnerships. Motivated by a commitment to decolonization, my inner drive is to establish respectful and reciprocal relationships with the diverse worldviews that surround me.</p>
      </div>

      {/* what i bring gallery */}
      <div className="flex flex-col justify-center items-center">
        <h2>what i bring</h2>
        <div className='flex flex-col sm:flex-row w-full'>
          {/* adaptability */}
          <div className="about-value-item">
            <h3>adaptability</h3>
            <p>My life journey has involved diverse, short-lived experiences, each providing valuable life lessons. With a quick grasp of the basics and a tendency to synthesize information over time, I am skilled at learning on the fly and completing tasks with determination.</p>
          </div>
          {/* Resourcefulness */}
          <div className="about-value-item">
            <h3>Resourcefulness</h3>
            <p>Regardless of the task or available resources, I am confident in my ability to devise practical solutions. Whether it's adjusting a live workshop to engage a reserved group of young designers in a shared goal or improvising a phone camera setup with wire and tinfoil for a friend's short film, my resourcefulness is a practical asset.</p>
          </div>
          {/* Intersectionality */}
          <div className="about-value-item">
            <h3>Intersectionality</h3>
            <p>I bring a unique perspective as a multiracial, neurodivergent, queer designer. Grounded in this intersectional identity, my capacity to listen, learn, and empathize with diverse communities forms the basis for understanding and collaboration.</p>
          </div>
          {/* Creativity */}
          <div className="about-value-item">
            <h3>Creativity</h3>
            <p>Influenced by my neurodivergent and Abenaki heritage, my creativity is shaped by a worldview that perceives the world as a series of cycles and interconnected webs. Exposed to a range of stories beyond the predominant Euro-Western narrative, my approach to creativity reflects a diversity and depth inspired by varied perspectives.</p>
          </div>
          
        </div>
      </div>

    </div>
  </>);
}