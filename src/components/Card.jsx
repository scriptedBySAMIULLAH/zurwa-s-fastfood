import React, { useState } from "react";
import Button from "./Button";
import { useCart } from "./Contexts";
function Card({ foodData = [], dealsData = [] }) {
  const [selectedSize, setSelectedSize] = useState("sm");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const {cartToogle,addItems}=useCart();
  let cartObj = {};
  const addToCart = (e) => {
    let price;
    let size;
    if (foodData?.sizes) {
      price = selectedPrice || foodData.sizes[0].price;
      size = selectedSize;
    } else {
      price = foodData?.price || dealsData?.price;
    }
    cartObj = {
      id:`${foodData.name || dealsData.description}-${size || "default"}`,
      name: foodData.name || dealsData.description,
      price:price,
    ...(size && { size }),
       qty:1
    };
    cartToogle();
    addItems(cartObj)
  };
  const selectSize = (pizza) => {
    setSelectedSize(pizza.size)
    setSelectedPrice(pizza.price);
  };
  
  if (!foodData && !dealsData) return;
  return (
    <>
      <div className="card  bg-cardBg  w-full flex flex-col h-full  rounded-2xl shadow-lg  max-w-sm overflow-hidden">
        <img
          src={foodData.image || dealsData.image}
          alt="img"
          className="w-full h-auto sm:h-[15rem]  object-contain sm:object-cover  hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="p-2 sm:p-4 flex-grow">
          <div className="title_price flex justify-between mt-2 sm:mt-4  items-center mb-4 sm:mb-6 gap-1">
            <h1 className="font-PoppinsBold font-medium   sm:font-black ">
              {foodData.name}
            </h1>
            <h5 className=" text-priceColor font-PoppinsBold font-bold">
              {foodData?.sizes
                ? null
                : `Rs.${foodData?.price || dealsData?.price}`}
            </h5>
          </div>
          <div className="pizza_price  w-fit gap-1 grid container grid-cols-1  mobile:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 mb-2 items-center">
            {foodData.sizes
              ? foodData.sizes.map((pizza, index) => (
                  <div
                    className={`rounded-full w-fit  px-1 ${pizza.size==selectedSize
                      ?
                      "bg-yellow"
                      :
                      "bg-slate-100"
                    }`} 
                    key={index}
                    onClick={(e) => selectSize(pizza)}
                  >
                    <span className=" text-black font-PoppinsBold font-bold">
                      {`Rs.${pizza.price}`}
                    </span>
                    <span className="ml-1">{pizza.size}</span>
                  </div>
                ))
              : null}
          </div>
          <p className="font-OpenSansRegular leading-normal text-gray-600 mb-1 flex-grow text-base">
            {foodData.description || dealsData.description}
          </p>
          <Button showIcon={true} onClick={addToCart}></Button>
        </div>
      </div>
    </>
  );
}

export default Card;
