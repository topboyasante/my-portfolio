import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [navIsToggled ,setNavIsToggled] = useState(false)

  function toggleNavbar(){
    setNavIsToggled(!navIsToggled)
  }

  

  return (
        <>
            <nav className='w-full h-[7vh] fixed top-0 left-0 p-5 shadow flex items-center justify-between z-[30]'>
                    {/* Logo */}
                    <Link href={`/`}>
                        <p className='lg:text-2xl font-light'>nk.🏄🏾‍♂️</p>
                    </Link>
                   <section className='flex items-center gap-5'>
                         {/* Toggle Button */}
                        <button className={navIsToggled?"hamburger hamburger--collapse is-active":"hamburger hamburger--collapse"} type="button" onClick={toggleNavbar}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                   </section>
            </nav>
            <section className={navIsToggled?'w-screen h-[30vh] fixed bg-[#ffffff] bottom-0 left-0 ease duration-500 z-[50]'
            :'w-screen h-[30vh] fixed bg-[#232323] bottom-[-100vh] left-0 ease duration-500 z-[50]'}>
                
            </section>
        </>
  )
}

export default Navbar