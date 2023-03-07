import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'


function Experience() {

  const experienceDetails=[
    {
      id:0,
      PlaceOfWork:'Axon Information Systems',
      title:'Frontend Developer Intern',
      duration:'Sep. 2022 - Jan. 2023',
      description:[
        {
          id:1,
          task:`
          Worked with a team on a project to build a Blood Bank System primarily using JavaScript, React, Tailwind CSS.
          Backend was built with C#.`
        },
        {
          id:2,
          task:`Tasked with building a template for the company's official website.`
        }
      ]
    },
    {
      id:1,
      PlaceOfWork:'The R Group',
      title:'Freelance Frontend Engineer',
      duration:'Sep. 2022 - Jan. 2023',
      description:[
        {
          id:1,
          task:`Built the Company's Official Website with React, Next JS, Tailwind and Sanity.`
        },
        {
          id:2,
          task:`Added APIs to build a booking system where clients can book consultation sessions.`
        },
      ]
    },
    {
      id:2,
      PlaceOfWork:'JB Real Estates',
      title:'Freelance Frontend Engineer',
      duration:'Sep. 2022 - Jan. 2023',
      description:[
        {
          id:1,
          task:`Built the Company's Official Website with React, Next JS, Tailwind and Sanity.`
        },
        {
          id:2,
          task:`Added APIs to build a booking system where potential customers can book to see properties.`
        },
      ]
    },
  ]

  return (
    <main className='w-full h-full'>
      <section className='max-w-[1600px] mx-auto p-5 h-full'>
        <p className='text-syne text-2xl md:text-3xl lg:text-5xl text-[#dad9d9]'>📌 | Experience:</p>
        <br />
        {/* Big Screens */}
        <section className='w-full h-full'>
          <Tab.Group vertical>
            <section className='flex justify-between items-center gap-5 h-full'>
              <Tab.List className={`flex flex-col items-start lg:w-[30%] bg-[#121212] p-3 gap-5`}>

                {
                  experienceDetails.map((item)=>{
                    return(
                      <Tab as={Fragment} key={item.id}>
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                              className={
                                selected ? 'text-white ease duration-200 outline-none border-none appearance-none text-sm lg:text-lg text-left' 
                                : 'ease duration-200 outline-none border-none appearance-none text-sm lg:text-lg text-left'
                              }
                            >
                              <p>{item.PlaceOfWork}</p>
                            </button>
                          )}
                        </Tab>
                    )
                  })
                }

              </Tab.List>
              <Tab.Panels className={`lg:w-[70%]`}>
                  {
                    experienceDetails.map((item)=>{
                      return(
                        <Tab.Panel key={item.id}>
                          <p>{item.title}</p>
                          <p>{item.duration}</p>
                          <hr className='border-[#777777] my-3'/>
                          {item.description.map((item)=>{
                            return(
                              <li key={item.id}>{item.task}</li>
                            )
                          })}
                        </Tab.Panel>
                      )
                    })
                  }
              </Tab.Panels>

            </section>
          </Tab.Group>
        </section>
        <hr className='border-[#777777] my-5'/>
      </section>
    </main>
  )
}

export default Experience