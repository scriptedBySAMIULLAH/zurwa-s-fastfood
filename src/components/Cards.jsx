import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
function Cards({ activeTab }) {
  const [items, setItems] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch("/data/foodItems.json");
        const result = await res.json();
        setItems(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    fetchFood();
  }, []);

  const foodItem = items[activeTab] || {};
  if(foodItem.length==0) return  <h1>No Item Found</h1>;
  return (
    <>
      {loader ? (
        <div className="text-center w-full flex justify-center">
          <Spinner loader={loader} />
        </div>
      ) : (

        <div className="container mx-auto px-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {foodItem.map((item) => (
            <Card 
            key={item.id} 
            foodData={item}
            />
          ))}
        </div>
        </div>

      
      )}
    </>
  );
}

export default Cards;
