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
        <section className='max-w-[1600px] mx-auto h-full p-5 flex flex-col lg:flex-row lg:items-center gap-5'>
            <section className='lg:w-[20%] font-light md:text-lg lg:text-3xl'>
                <p className='text-bn tracking tracking-widest'>Technologies</p>
            </section>
            <section className='lg:w-[80%] lg:text-xl flex flex-col md:flex-row border'>
               
            </section>
        </section>
    </main>
  )
}

export default Tools