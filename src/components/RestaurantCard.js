
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="m-4 p-4 rounded-lg bg-pink-100 w-[250px] hover:bg-pink-200 hover:w-[251px] " >
      <img className="rounded-lg" alt="res" src={CDN_URL + cloudinaryImageId} />
      <h3  className="font-bold py-2 text-lg">{ name}</h3>
      <h4 >{cuisines.join(", ")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{ costForTwo}</h4>
      <h4>{ deliveryTime}</h4>
    </div>
  );
};

//Higher Order Components
// Takes Input as RestaurantCard and Return PromotedRestrorantCard
export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{

    return(
    
    <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <RestaurantCard {...props}/>
    </div>)
  }
}


export default RestaurantCard;