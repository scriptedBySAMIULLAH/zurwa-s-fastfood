import { createContext, useContext } from "react";

export const CartContext=createContext({
        isCartOpen:false,
        cartToogle:()=>{},
        totalPrice:0,
       addItems:(item)=>{}     
});

export const useCart=()=>{

    return useContext(CartContext);

};

export const CartProvider=CartContext.Provider;

