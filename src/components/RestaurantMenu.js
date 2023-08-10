import { useEffect } from "react";
const RestaurantMenu = ()=>{
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu =async()=>{
     const data = await fetch("https://www.zomato.com/webroutes/auth/init")       
    
    const json = await data.json();
    console.log(json)}
    return (
        <div>
            <h1>Name of Restautant.</h1>
            <h2>Menu</h2>
            <ul>
                <li>
                    Paneer
                </li>
                <li>
                    Veg Dum Aloo
                </li>
                <li>
                    Sahi Paneer
                </li>
                <li>
                    Kadai Paneer
                </li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;