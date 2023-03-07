import React from 'react'

function Spotlight() {
  const projects =[
    {
      id:0,
      name:'Tesla Website',
      type:'UI Design',
      link:'https://www.figma.com/file/mIH7LdJJkRhQlVPvGcXHAR/Learn-Figma-in-2023?node-id=30%3A41&t=j7WVqfzUPzMwktnb-1',
      description:`This project begins my journey as a UI Designer. Recently, it's been kind of hard to find design inspirations for my projects, so I decided to learn the basics of UI/UX.  
      I made this UI Design of Tesla's website after completing a video tutorial I saw on youtube.`,
      tools:`The design was done with Figma.`
    },
    {
      id:1,
      name:'DefinitelyNotPong',
      type:'Video Game',
      link:'https://northfrost-studios.itch.io/definitelynotpong',
      description:`Yes, I've dabbled in the world of Game Development before. In the beginning of my journey as a SWE, 
      I built this simple, two-player game. Never got it to work on Mac or Linux, but it works perfectly on windows!
      Maybe I should take up Game Development again?`,
      tools:`Built this with the Unity Game Engine.`
    },
  ]
  return (
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto p-5 h-full'>
        <p className='text-syne text-2xl md:text-3xl lg:text-5xl text-[#dad9d9]'>✨ | Spotlight:</p>
        <br />
        <p>Welcome to the section for my finished/unfinished, 'but have potential' projects 😉</p>
        <br />
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 '>
                  {
                    projects.map((item)=>{
                      return(
                          <section className='cursor-pointer rounded p-4 lg:p-5 hover:scale-105 ease duration-500 bg-[#141414] w-full lg:h-[290px] project-card'>
                            <p className='pb-2 text-[#999999]'>{item.name} | {item.type}</p>
                            <hr className='border-[#777777]'/>
                            <p className='pt-2 font-light'>{item.description}</p>
                            <br />
                            <p className='font-light'>{item.tools}</p>
                            <br />
                            <a href={item.link} target="_blank" className='text-[#999999] font-extralight underline underline-offset-8 hover:text-white ease duration-500'>Check It Out!</a>
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

export default Spotlight