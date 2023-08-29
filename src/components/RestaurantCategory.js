import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    // if RestraurantCategory is uncontrolled component
     // const [showItems,setShowItems] = useState(false)
    const handleClick=()=>{
        setShowIndex()

    }
    return (
        <div className="w-6/12 shadow-lg mx-auto my-5 p-4  bg-gray-50">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
            <span className="font-semibold text-lg">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {showItems &&
            <ItemList items = {data.itemCards}/>
            }

        </div>
    )
}
export default RestaurantCategory;