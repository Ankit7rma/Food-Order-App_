import {useSelector} from "react-redux";
import ItemList from "./ItemList";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const dispatch = useDispatch()
    
    const handleClearCart=()=>{
        dispatch(clearCart())

    }
    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold"> Cart</h1>
            <button className="m-2 p-2 bg-black rounded-lg text-white " onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length===0 && <h1>Add Items To Cart</h1>}
            <div className="w-6/12 m-auto p-2">
            <ItemList items={cartItems}/>
            </div>
            </div>
    )
}
export default Cart;