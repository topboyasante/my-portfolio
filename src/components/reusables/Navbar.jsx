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
            <nav className='w-full h-[7vh] fixed top-0 left-0 p-5 shadow flex items-center justify-between z-[30] bg-[#010101]'>
                    {/* Logo */}
                    <Link href={`/`}>
                        <p className='lg:text-2xl font-light'>nk.🏄🏾‍♂️</p>
                    </Link>
                   <section className='flex items-center gap-5'>
                         {/* Toggle Button */}
                        <AiOutlineMenu size={30} onClick={toggleNavbar}/>
                   </section>
            </nav>
            <section className={navIsToggled?'w-screen h-screen fixed bg-[#020202] top-0 left-0 ease duration-[800ms] z-[50] p-5'
            :'w-screen h-screen fixed bg-[#010101] top-[-100vh] left-0 ease duration-[800ms] z-[50] p-5'}>
              <section className='flex justify-end p-5'>
                <AiOutlineClose size={30} onClick={toggleNavbar}/>
              </section> 
              <hr />               
            </section>
        </>
  )
}

export default Navbar