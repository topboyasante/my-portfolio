import React from 'react'

function Contact() {
  return (
    <main className='w-full h-full'>
        <section className='max-w-[1600px] mx-auto p-5 h-full'>
            <p className='text-syne text-2xl md:text-3xl lg:text-5xl'>☎️ | Contact:</p>
            <br />
            <section>
                <p>Like what you see? Think I'm the right guy for the job at hand? Feel free to contact me!</p>
                <br />
                <section>
                    <a href="tel:+233594054494" className='hover:text-white ease duration-500'>+233-59-405-4494 | </a>
                    <a href="mailto:asantekwasi101@gmail.com" className='hover:text-white ease duration-500'>asantekwasi101@gmail.com | </a>
                </section>
            </section>
            <hr className='border-[#777777] my-5'/>
        </section>
    </main>
  )
}

export default Contact