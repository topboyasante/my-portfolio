import Navbar from '@/components/reusables/Navbar'
import React from 'react'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout