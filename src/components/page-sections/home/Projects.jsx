import Image from 'next/image'
import React from 'react'

function Projects() {
  const projects =[
    {
      id:0,
      name:'JB Real Estate',
      type:'Web App',
      link:'https://jbrealestateandproperties.com',
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
      description:`This is a personal project I took on to learn Vite JS. 
      I've always had a thing for architecture, and so I based this website on that. 
      Initially, the plan was to sell this as a template. But plans do change right?`,
      tools:`For this Project, I used React, Vite JS, and Tailwind.`
    },
  ]

  return (
    
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto h-full p-5'>
            <p className='text-bn text-2xl md:text-3xl lg:text-5xl'>Completed Projects:</p>
            <br />
              <section className='grid lg:grid-cols-3 gap-5 place-items-center'>
                  {
                    projects.map((item)=>{
                      return(
                          <section className='rounded p-3 lg:p-5 hover:text-white ease duration-500 bg-[#141414]'>
                            <p className='pb-2'>{item.name} - {item.type}</p>
                            <hr className='border-[#777777]'/>
                            <p className='pt-2 font-light'>{item.description}</p>
                            <br />
                            <p className='font-light'>{item.tools}</p>
                            <br />
                            <a href={item.link} target="_blank" className='text-gray-300 font-extralight'>arxarchitecture.netlify.app</a>
                          </section>
                      )
                    })
                  }
              </section>
        </section>
    </main>
  )
}

export default Projects