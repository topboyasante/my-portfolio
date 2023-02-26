import React from 'react'

function Tools() {
  const languages = [
    {
        id:0,
        name:'JavaScript'
    },
    {
        id:1,
        name:'C#'
    },
  ]
  const frameworks = [
    {
        id:0,
        name:'React'
    },
    {
        id:1,
        name:'Vite JS'
    },
    {
        id:2,
        name:'Next JS'
    },
    {
        id:3,
        name:'Tailwind CSS'
    },
  ]
  return (
    <main className='w-full h-full'>
        <section className='max-w-[1400px] mx-auto h-full p-5 flex flex-col lg:flex-row lg:items-center gap-5'>
            <section className='lg:w-[20%] font-light md:text-xl lg:text-3xl text-gray-500'>
                <p>Technologies</p>
            </section>
            <section className='lg:w-[80%] lg:text-2xl flex flex-col md:flex-row justify-around '>
                {/* Map through Language Array */}
                <section>
                    <p className='text-gray-500 py-3 font-extralight'>Languages:</p>
                    <ul>
                        {
                            languages.map((lang)=>{
                                return(
                                        <li>
                                           <p className='font-light text-lg'>{lang.name}</p>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </section>
                {/* Map through tools array */}
                <section>
                    <p className='text-gray-500 py-3 font-extralight'>Tools & Frameworks:</p>
                    <ul>
                        {
                            frameworks.map((item)=>{
                                return(
                                        <li>
                                           <p className='font-light text-lg'>{item.name}</p>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Tools