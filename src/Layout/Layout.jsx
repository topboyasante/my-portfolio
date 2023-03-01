import Footer from '@/components/reusables/Footer'
import Navbar from '@/components/reusables/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  )
}

export default Layout