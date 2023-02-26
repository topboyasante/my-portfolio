import Image from 'next/image'
import React from 'react'

function Projects() {
  const projects =[
    {
      id:0,
      name:'JB Real Estate',
      type:'Web App',
    }
  ]

  return (
    
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto h-full p-5'>
              <section>
                  {
                    projects.map((item)=>{
                      return(
                        <section className={`rounded p-5`}>
                          <p className='text-8xl text-bn text-right'>{item.name}</p>
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