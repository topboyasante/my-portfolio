import React, { useEffect } from 'react'
import { gsap } from "gsap";


function LoadingScreen({shouldLoad}) {

    function loadingAnimations(){
        gsap.to(".loading",{duration:1, opacity:'100%',repeat:-1,yoyo:true});
    }

    useEffect(()=>{
        loadingAnimations()
    },[])

  return (
    <>
      {shouldLoad? 
        <main className='w-screen h-screen fixed bg-[#111111] top-0 left-0 z-[40] ease duration-[1000ms] flex justify-center items-center'>
          <p className="loading opacity-0 text-3xl md:text-5xl lg:text-8xl text-cc">asante.</p>
        </main>
      :
        <main className='w-screen h-screen fixed bg-[#111111] top-[-100vh] left-0 z-[40] ease duration-[1000ms] flex justify-center items-center'>
          <p className="loading opacity-0 text-3xl md:text-5xl lg:text-8xl text-cc">asante.</p>
        </main>
      }
    </>
  )
}

export default LoadingScreen