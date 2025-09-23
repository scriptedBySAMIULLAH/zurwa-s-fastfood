import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from './components/Cart/Cart.jsx';
import { CartProvider } from "./components/Contexts";
import { jsxs } from "react/jsx-runtime";
function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [items, setIsItem] = useState([]);
  const hasMounted = useRef(false);

  const cartToogle = () => {
    setCartOpen((prev) => !prev);
  };

   const removeItem=(prev,item)=>{
   return  prev.filter(pre=>pre.id!=item.id)
  }
  const updateItem=(exists,prev,item,btnId)=>{
   let updatedQty=exists.qty;

   if(btnId=="+")
   {
    updatedQty=exists.qty + 1
   }

   else if(btnId=="-" && exists.qty >1)
   {
    updatedQty=exists.qty - 1
   }
   else if((btnId=="-" && exists.qty==1) || btnId=="remove")
   {
    return removeItem(prev,item)
   }
    
     const updatedItem = { ...exists, qty: updatedQty };
        return prev.map(pre => 
        pre.id === item.id ? updatedItem : pre
        );
      
  }


 
    const addItems = (item,btnId="+") => {
      setIsItem((prev) => { 
        if (prev.length > 0) {
        const exists = prev.find(pre => pre.id === item.id);
    if (exists) {
    return updateItem(exists,prev,item,btnId);
    } else {

      return [item, ...prev];
    }
  }
  return [item];
});

    };

  // local storage
  useEffect(() => {
    //get

    const savedItems = JSON.parse(localStorage.getItem("cart-items") || "[]");

    if (savedItems) {
      setIsItem(savedItems);
    }
  }, []);
  useEffect(() => {
    //set
    if (hasMounted.current) {
      localStorage.setItem("cart-items", JSON.stringify(items));
    } else {
      hasMounted.current = true;
    }
  }, [items]);
  return (
    <CartProvider value={{ isCartOpen, cartToogle, addItems,items}}>
      <Navbar />
      <Hero />
      <Menu />
      <Specials />
      <About />
      <Footer />
      <Cart />
    </CartProvider>
  );
}

export default App;
