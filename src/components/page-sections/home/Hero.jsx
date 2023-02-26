import React, { useEffect } from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {VscGithubAlt} from 'react-icons/vsc'
import {SiHashnode,SiInstagram} from 'react-icons/si'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Hero() {

    function HeroAnimations(){
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".name",{duration:0.5, opacity:'100%',stagger:0.05,delay:2.5});
    }

    useEffect(()=>{
        HeroAnimations()
    },[])

  return (
   <main className='w-full h-full lg:h-[90vh] pt-[10vh]'>
        <section className='max-w-[1600px] mx-auto h-full p-5 flex flex-col justify-center'>
            
            <section className='lg:h-[30%]'>
                <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-5'>
                    <h1 className='text-bn text-[1.5em] md:text-[3em] lg:text-[8em] tracking-wide'>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">F</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">R</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">0</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">N</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">T</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">-</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">E</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">N</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">D</span>
                    </h1>
                    <h1 className='text-bn text-[1.5em] md:text-[3em] lg:text-[8em] tracking-wide'>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">D</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">E</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">V</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">E</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">L</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">O</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">P</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">E</span>
                        <span className="name opacity-0 hover:text-white ease duration-500 cursor-pointer">R</span>
                    </h1>
                </div>
            </section>

            <hr className='border-[#777777]' />

            <section className='lg:w-[70%] py-5'>
                <p className='md:text-xl lg:text-2xl font-light'>I'm a Frontend Developer providing exceptional web experiences to clients around the world. 
                Currently, I'm focused on building responsive front-end web apps, while learning C# for backend development, and Figma for design.</p>
                <br />
                <p className='md:text-xl lg:text-2xl font-light'>Within the year, I've worked on a ton of personal projects, and recently landed my first professional contract. 
                I now spend time improving my skills through personal projects, tutorials and courses.</p>
            </section>
           
            <section className='flex gap-8'>
                <a href="https://www.linkedin.com/in/nana-kwasi-asante-abb32a226/" target="_blank" className='lg:text-2xl hover:text-white ease duration-500'>
                    <SlSocialLinkedin/>
                </a>
                <a href="https://github.com/topboyasante/" target="_blank" className='lg:text-2xl hover:text-white ease duration-500'>
                    <VscGithubAlt/>
                </a>
                <a href="https://topboyasante.hashnode.dev/" target="_blank" className='lg:text-2xl hover:text-white ease duration-500'>
                    <SiHashnode/>
                </a>
                <a href="https://www.instagram.com/topboyasante_/" target="_blank" className='lg:text-2xl hover:text-white ease duration-500'>
                    <SiInstagram/>
                </a>
            </section>
            

        </section>
   </main>
  )
}

export default Hero