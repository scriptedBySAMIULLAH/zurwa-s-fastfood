import React from 'react'
import heroImage from "/assets/heroImage.webp";
import { Link } from "react-scroll";
import Button from './Button';
function Hero() {
  return (
    <>
    <section id='home' className='mt-16 sm:mt-20 bg-heroBg   w-full  px-4  sm:px-6'>
        <div className="flex flex-col  sm:flex-row sm:justify-around justify-center w-full  container mx-auto items-center gap-2  md:gap-10 sm:space-x-4  py-8 ">
            <div className='text-center sm:text-left  space-y-2 flex-1 flex flex-col  w-full   md:max-w-lg text-white items-center sm:items-start'>
                <h1 className='font-PlayfairDisplayBold text-2xl mobile:text-3xl    sm:text-4xl  leading-tight text-yellow'>
                    Zurwa’s Fast Food & Chinese
                </h1>
                <h3 className='text-sm sm:text-base  font-PlayfairDisplayBold mb-2   '>Bhurban-Murree</h3>
                <p className='text-sm mobile:text-base  sm:text-base font-PoppinsRegular   max-w-lg mx-auto  sm:leading-loose'>Get ready for a flavor blast ! Juicy burgers, cheesy pizzas, and refreshing juices.
                     <span className="font-PoppinsBold"> Zurwa’s, the taste of perfection!</span>.
                     </p>
                     <Link to='menu'
                     spy={true}
                     duration={500}
                     >
                        <Button>
                        Explore Menu
                        </Button>
                </Link>
            </div>
             <div className='w-full flex-1  rounded-2xl overflow-hidden shadow-lg max-w-sm mt-2 sm:mt-0'>
                <img src={heroImage} alt="Delicious food"
                className='w-full h-auto rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500'
                />
            </div> 
        </div>

    </section>
    </>
  )
}

export default Hero