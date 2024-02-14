import React, { useContext,useState} from "react";
import { userLoginObj } from "../../context/UserLogin";
import { useParams, useNavigate} from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";

const ProductDetails = () => {
  const { productdata, loginStatus} = useContext(userLoginObj);
  const { id } = useParams();
  let navigate=useNavigate();
  const [selectedSize, setSelectedSize]= useState("");
  
   //console.log(productdata,productId)
  const handleSizeChange=(event) => {
    setSelectedSize(event.target.value);
  };

  // Find the product based on the URL parameter (product ID)
  const selectedProduct = productdata.find(
    (p) => p.id === id)
  
const handleAddToCart = async (e)=>{
    if (loginStatus){
      e.preventDefault();
    
    console.log(selectedProduct)

    if(selectedSize && selectedProduct){
      const update={
          name: selectedProduct.name,
          brand: selectedProduct.brand,
          image: selectedProduct.image,
          size: selectedSize,
          price: selectedProduct.price,
    };
       let response = axios.post("http://localhost:4000/cart",update)
       console.log(response.data)
       alert("Product added to the cart")
}
  else{
  
    alert("Please select a size")
  }

}
  else{
     alert("user not Logged In, Please Login First  ")
     navigate('/login')
  }
    };
  
 
  return (
    <div className="container">
      <div className="product_details row row-col-sm-2 p-5">
        <div className="left-side col">
          <img
            className="shoes_img" 
            src={selectedProduct?.image} 
            alt={selectedProduct?.name}
          />
        </div>

        <div className="right-side col">
          <h4>{selectedProduct?.brand}</h4>
          <p className="product_name">{selectedProduct?.name}</p>
          <p className="product_price">{selectedProduct?.price}</p>
          <p className="mrp">MRP inclusive all tax</p>
          <p>Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.</p>
        <ul>
          <li>Genuine and synthetic leathers offer a durable, supportive feel.</li>
          <li>Foam midsole with Air-Sole unit in the heel and forefoot for street-ready cushioning.</li>
          <li>Rubber outsole provides durability and traction</li>
        </ul>
      <label htmlFor="size"></label>
      <select className="dropdown"
        id="size"
        value={selectedSize}
        onChange={handleSizeChange}
        required>
          <option value='' disabled>Select Size</option>
          <option value='6 Uk'>6 UK</option>
          <option value='7 UK'>7 UK</option>
          <option value='8 UK'>8 UK</option>
          <option value='9 UK'>9 UK</option>
          <option value='10 UK'>10 UK</option>
          </select>
          

          <button className="cart_button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
