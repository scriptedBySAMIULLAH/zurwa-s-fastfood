import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../Contexts";

function CartIcon() {
  const {cartToogle,items}=useCart()
  return (
    <>
      {(items.length && items.length >0
        ?
      <div className=" relative bg-yellow transition hover:bg-yellow-500 rounded-full p-1 " onClick={cartToogle}>
          <FiShoppingBag size={24} className="cursor-pointer"/>
        <span className="absolute right-0 -top-1/2 bg-black rounded-full text-white font-bold  px-1 ">{items.length}</span>
      
      </div>
        :
        ""
        ) }
    </>
  );
}

export default CartIcon;
