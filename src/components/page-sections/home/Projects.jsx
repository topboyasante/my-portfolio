import Image from 'next/image'
import React from 'react'
import JB from '../../../../public/img/jbrealestate.png'
import lotus from '../../../../public/img/lotusai.png'
import arx from '../../../../public/img/arx.png'

function Projects() {
  return (
    <main className='w-full h-full'>
        <section className='max-w-[1400px] mx-auto h-full p-5 flex flex-col lg:flex-row items-center gap-5'>
          <section className='font-light text-2xl lg:w-[20%]'>
            <p>Projects</p>
          </section>
          <section className='lg:w-[80%] grid lg:grid-cols-2 gap-5'>
              <Image src={JB} alt="jb"/>
              <Image src={arx} alt="jb"/>
          </section>
        </section>
    </main>
  )
}

export default Projects