import { Menu_API } from "../utils/constants";
import React from "react";
import { useEffect,useState } from "react";


const useRestaurantMenu =(resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
      const fetchMenu = async () => {
        const data = await fetch(Menu_API + resId);
    
        const json = await data.json();
        setResInfo(json.data);
        console.log(json);
      };

    return resInfo;
}
export default useRestaurantMenu;

