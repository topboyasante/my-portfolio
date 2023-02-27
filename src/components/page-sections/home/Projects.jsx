import Image from 'next/image'
import React from 'react'

function Projects() {
  const projects =[
    {
      id:0,
      name:'JB Real Estate',
      type:'Web App',
      link:'https://jbrealestateandproperties.com',
      align:'right'
    },
    {
      id:1,
      name:'The R Group',
      link:'https://jbrealestateandproperties.com',
      type:'Web App',
      align:'left'
    },
  ]

  return (
    
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto h-full p-5'>
            <p className='text-bn text-2xl'>Completed Projects:</p>
              <section className='flex flex-col gap-5'>
                  {
                    projects.map((item)=>{
                      return(
                        <a href={item.link} target="_blank">
                          <section className={`rounded p-5 hover:text-white ease duration-500 bg-[#151515]`}>
                            <p className={`text-3xl md:text-5xl lg:text-8xl text-bn text-${item.align}`}>{item.name} - {item.type}</p>
                          </section>
                        </a>
                      )
                    })
                  }
              </section>
            <hr className='border-[#777777]' />
        </section>
    </main>
  )
}

export default Projects