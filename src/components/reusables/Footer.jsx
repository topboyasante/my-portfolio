import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto p-5'>
            <p className="text-center">{year} | Nana Kwasi Asante.</p>
        </section>
    </main>
  )
}

export default Footer