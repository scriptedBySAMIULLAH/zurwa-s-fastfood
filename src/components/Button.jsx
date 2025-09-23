import React from 'react'
import {FaShoppingBasket}  from "react-icons/fa";
export default function Button({children="Order Now",showIcon = false ,onClick}) {
  return (
    <>
      <button className="px-4 py-2  text-center  bg-yellow text-black sm:px-6 sm:py-3 rounded-lg font-PoppinsBold shadow-md hover:opacity-80 transition-all duration-300 mt-4 cursor-pointer flex items-center gap-4"
      onClick={onClick}
      >
              {children}
               {showIcon && <FaShoppingBasket className="text-lg" />}
              </button>
    </>
  )
}
