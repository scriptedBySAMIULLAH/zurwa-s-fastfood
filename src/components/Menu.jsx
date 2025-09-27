import React, { lazy, useState } from 'react'
import MenuButton from './MenuButton'
import Cards from './Cards'

function Menu() {

  const [isActiveButton,setIsActiveButton]=useState("Pizza")
    const menuButtons=
    [
    { id: 'Pizza', label: 'Pizza' },
    { id: 'Soup', label: 'Soup' },
    { id: 'Ice_Cream', label: 'Ice Cream' },
    { id: 'Chinese', label: 'Chinese' },
    { id: 'Bar_Drinks', label: 'Bar Drinks' },
    { id: 'Icecream_Shakes', label: 'Ice Cream Shakes' },
    { id: 'Appetizers', label: 'Appetizers' },
    { id: 'Pasta', label: 'Pasta' },
    { id: 'Burger', label: 'Burger' },
    { id: 'Sandwich_Rolls', label: 'Sandwich & Rolls' }
    ]
    // setIsActiveButton('Pizza')
    const selectedButton=(e)=>{
  
    // console.log(e.target.id);
    setIsActiveButton(e.target.id)
    }

  return (
    <>
    <section className='px-6  w-full max-w-7xl mx-auto mt-1 sm:mt-2' id="menu">
        <h1 className='font-PoppinsBold  text-lg   sm:text-2xl border-yellow  w-fit border-b-2  sm:border-b-4'>Menu</h1>
        <div className="btn-containers flex overflow-x-auto whitespace-nowrap gap-2 container mt-1 mb-2 snap-x snap-mandatory">

          {
            menuButtons.map((btn)=>(
                <MenuButton
                id={btn.id}
                key={btn.id}
                text={btn.label}
                onClick={selectedButton}
                activeBtn={isActiveButton==btn.id}
                />
            ))
          }

        </div>
       
    </section>
     <Cards activeTab={isActiveButton}/>
    </>
  )
}

export default Menu