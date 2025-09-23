import React from 'react'
import { useCart } from "../Contexts";

function TotalPrice() {
   const {items,totalPrice}=useCart();
  return (
    <>

     <div className="flex justify-between font-semibold mx-1">
          <span>Subtotal</span>
          <span>

            {items.reduce((totalPrice,item)=>{

             return  totalPrice+(item.price*item.qty)
              
            },0)}
          </span>
        
        </div>
    
    
    </>
  )
}

export default TotalPrice