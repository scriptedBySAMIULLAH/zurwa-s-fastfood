import React from 'react'

function MenuButton({id,text,onClick,activeBtn}) {
  return (
    <>
    <button id={id} className={`px-3 flex-1 py-2 rounded-md text-nowrap cursor-pointer text-center  hover:opacity-80  shadow-md  font-PoppinsBold
     ${activeBtn?'bg-black text-white ':'bg-gray-100'}`
    }
    onClick={onClick}
    >
        {text}
    </button>
    
    </>
  )
}

export default MenuButton