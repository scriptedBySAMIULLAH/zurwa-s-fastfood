import React from 'react'
import about_1 from "/assets/about_1.avif";
import about_2 from "/assets/about_2.avif";

function About() {
  return (
    <>

    <section id='about' className='container mx-auto  grid  mt-8 bg-slate-50 grid-cols-1 sm:grid-cols-2 items-center place-items-center px-2 py-2 space-y-4'>

        <div className="left h-full  flex flex-col  justify-center px-4 sm:px-2">

            <div className="heading text-center   mb-6 sm:text-left">
                <h1 className='font-PlayfairDisplayBold text-xl  sm:text-5xl text-black'>Zurwas</h1>
                <h4 className='font-PoppinsRegular'>Bhurban-Murree</h4>
            </div>
            <p className=' font-OpenSansRegular text-gray-700   max-w-lg  leading-relaxed'>
               Our restaurant is the premier choice in Bhurban, offering the finest fast food and authentic Chinese cuisine. With the highest quality standards and a family-friendly environment, it is the perfect place to enjoy with family and friends.
            </p>
        </div>
        <div className="right relative  h-full ">
              
                <img
        src={about_1}
        alt="About 1"
        className="w-64 h-80 object-cover rounded-2xl shadow-lg"
      />
      <img
        src={about_2}
        alt="About 2"
        className="w-64 h-80 object-cover rounded-2xl shadow-lg absolute -top-10 left-40 hidden  sm:block"
      />
       

        </div>

    </section>
    
    
    </>
  )
}

export default About