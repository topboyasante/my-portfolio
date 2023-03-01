import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Projects() {
  const projects =[
    {
      id:0,
      name:'JB Real Estate',
      type:'Web App',
      link:'https://jbrealestateandproperties.com',
      url:'jbrealestateandproperties.com',
      description:`This is a project I designed for a client who runs a real estate company.
      He needed a website where he can put new properties up for display, and a system where 
      potential customers can book to view the properties.`,
      tools:`For this Project, I used React, Next JS, Tailwind, and Sanity.`
    },
    {
      id:1,
      name:'ARX Architecture',
      type:'Landing Page',
      link:'https://arxarchitecture.netlify.app',
      url:'arxarchitecture.netlify.app',
      description:`This is a personal project I took on to learn Vite JS. 
      I've always had a thing for architecture, and so I based this website on that. 
      Initially, the plan was to sell this as a template. But plans do change right?`,
      tools:`For this Project, I used React, Vite JS, AOS, and Tailwind.`
    },
  ]

  // function HeroAnimations(){
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.to('.project-card',{
  //     scrollTrigger:{
  //       trigger:'.project-card',
  //       toggleActions:'restart pause reverse none',
  //       scrub:true
  //     },
  //     duration:5,
  //   })
  // }

  // useEffect(()=>{
  //     HeroAnimations()
  // },[])

  return (
    
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto h-full p-5'>
            <p className='text-bn text-2xl md:text-3xl lg:text-5xl'>Completed Projects:</p>
            <br />
              <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 '>
                  {
                    projects.map((item)=>{
                      return(
                          <section className='rounded p-4 lg:p-5 hover:text-white ease duration-500 bg-[#141414] w-full lg:h-[280px] project-card'>
                            <p className='pb-2 text-[#999999]'>{item.name} - {item.type}</p>
                            <hr className='border-[#777777]'/>
                            <p className='pt-2 font-light'>{item.description}</p>
                            <br />
                            <p className='font-light'>{item.tools}</p>
                            <br />
                            <a href={item.link} target="_blank" className='text-[#999999] font-extralight'>{item.url}</a>
                          </section>
                      )
                    })
                  }
              </section>
              <hr className='border-[#777777] my-5'/>
        </section>
    </main>
  )
}

export default Projects