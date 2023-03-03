import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [navIsToggled ,setNavIsToggled] = useState(false)

  function toggleNavbar(){
    setNavIsToggled(!navIsToggled)
  }

  

  return (
        <>
            <nav className='w-full h-[7vh] fixed top-0 left-0 p-5 shadow flex items-center justify-between z-[30] bg-[#111111]'>
                    {/* Logo */}
                    <Link href={`/`}>
                        <p className='lg:text-2xl font-extrabold'>nk.🏄🏾</p>
                    </Link>
                   <section className='flex items-center gap-5'>
                         {/* Toggle Button */}
                        {/* <AiOutlineMenu size={30} onClick={toggleNavbar}/> */}
                        <a href="#">
                          <p className='border px-2 py-1 border-[#777777] rounded hover:text-white ease duration-500'>Resume</p>
                        </a>
                   </section>
            </nav>

            <section className={navIsToggled?'w-screen h-screen fixed bg-[#121212] top-0 left-0 ease duration-[800ms] z-[50] p-5'
            :'w-screen h-screen fixed bg-[#111111] top-[-100vh] left-0 ease duration-[800ms] z-[50] p-5'}>
              <section className='flex justify-between p-5'>
                  <a href={`/`}>
                        <p className='lg:text-2xl font-extrabold'>nk.🏄🏾</p>
                  </a>
                <AiOutlineClose size={30} onClick={toggleNavbar}/>
              </section> 
              <hr /> 
              <section className='flex justify-center items-center h-[90vh]'>
                <a rel="stylesheet" href="#">
                  <p className='text-3xl text-cc hover:text-white ease duration-500'>My Resume</p>
                </a>
              </section>              
            </section>
        </>
  )
}

export default Navbar