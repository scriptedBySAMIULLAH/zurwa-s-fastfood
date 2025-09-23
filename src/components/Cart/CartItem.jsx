import React from 'react'
import { useCart } from "../Contexts";
function CartItem({cartItem}) {
    const {addItems}=useCart();
      const styles = {
    btn: "px-2 text-xl font-bold cursor-pointer rounded border",
    remove: "text-red-400 cursor-pointer hover:text-red-500 transition"
  };
  if(!cartItem) return;

  const updateItem=(e,item)=>{
    if(e.target.tagName=="BUTTON")
    {
      const btnId=e.target.id;
       addItems(item,btnId)
    }
  }
  return (
    <>
      <div className=" cart-item flex items-center justify-between gap-2 border-b border-slate-700 pb-2" id={cartItem.id}>
          <div className="flex-1">
            <h2 className="font-medium"> {cartItem.name} {cartItem.size && `(${cartItem.size})`}</h2>
            <h5 className="text-sm text-gray-300">
              Rs {cartItem.price}  x <span>{cartItem.qty}</span>
               = Rs <span>{cartItem.price * cartItem.qty}</span>
            </h5>
          </div>

          <div className="flex items-center space-x-2" onClick={(e)=>{
            updateItem(e,cartItem)
          }}>
            <button className={styles.btn} id='-'>-</button>
            <h3 className="font-light sm:font-normal">{cartItem.qty}</h3>
            <button className={styles.btn} id='+'>+</button>
             <button className={styles.remove}id="remove">Remove</button>
          </div>

         
        </div>
    </>
  )
}

export default CartItem