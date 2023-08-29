import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null)
  
  if (resInfo === null) return <Shimmer />;
  
  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards); 

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
    {
      categories.map((category,index)=>
      //controlled component 
      <RestaurantCategory 
      key={category?.card?.card.title} 
      data={category?.card?.card}
        showItems={index===showIndex?true:false}
        setShowIndex={()=>setShowIndex(index)}
      />)
    }
    </div>
  );
};
export default RestaurantMenu;
