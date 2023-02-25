import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {VscGithubAlt} from 'react-icons/vsc'
import {SiHashnode,SiInstagram} from 'react-icons/si'

function Hero() {
  return (
    <main className='w-full h-full pt-[7vh]'>
        <section className='max-w-[1600px] mx-auto flex flex-col h-full justify-center p-5'>
            {/* text */}
            <section className='lg:w-[70%] text-gray-300'>
                <p className='md:text-xl lg:text-3xl font-extralight'>I'm a Frontend Developer providing exceptional web experiences to clients around the world. 
                Currently, I'm focused on building responsive front-end web apps while learning game development as a hobby.</p>
                <br />
                <p className='md:text-xl lg:text-3xl font-extralight'>Within the year, I've worked on a ton of personal projects, and recently landed my first professional contract. 
                I now spend time improving my skills through personal projects, tutorials and courses.</p>
            </section>
           <br />
            <section className='flex gap-8'>
                <a href="https://www.linkedin.com/in/nana-kwasi-asante-abb32a226/" target="_blank">
                    <SlSocialLinkedin size={30}/>
                </a>
                <a href="https://github.com/topboyasante/" target="_blank">
                    <VscGithubAlt size={30}/>
                </a>
                <a href="https://topboyasante.hashnode.dev/" target="_blank">
                    <SiHashnode size={30}/>
                </a>
                <a href="https://www.instagram.com/topboyasante_/" target="_blank">
                    <SiInstagram size={30}/>
                </a>
            </section>
            <br />
            <hr />
            <br />
        </section>
    </main>
  )
}

export default Hero