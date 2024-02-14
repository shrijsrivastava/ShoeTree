import axios from "axios";
import React, { useContext, useEffect} from "react";
import { userLoginObj } from "../../context/UserLogin";
import './Cart.css';

const Cart = () => {
  const { cart , setCart} = useContext(userLoginObj);

  useEffect(() =>{
    axios.get("http://localhost:4000/cart")
    .then(function(response){
      setCart(response.data);
    })
  })

  const handleRemoveProduct = async (productId) => {
    console.log(productId);
    
    try{
         await axios.delete(`http://localhost:4000/cart/${productId}`)
       let updateCart= (cart.filter((item)=>item.id!== productId));
        setCart(updateCart)
       
    }
    catch(e){
        alert("error")
    }
    
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
    
        <div className="cart-container">
           
          {cart.map((item) => (
            
            <div className="cart1" key={item.id}>
                <div className='cart_img'>
                  <img src={item.image} alt={item.name} />
                </div>
                    <div className="cart_data">
                        <h6>{item.brand}</h6>
                        <p>{item.name}</p>
                        <p>Size: {item.size}</p>
                        <p>{item.price}</p>
                    </div>
                        <div className="cart_remove">
                            <button  onClick={() => handleRemoveProduct(item.id)}>
                            <i class="fa-solid fa-xmark"></i>
                            </button>
                            
                        </div>
            </div>
        ))}
    </div>
)}
    </div>
  );
};

export default Cart;