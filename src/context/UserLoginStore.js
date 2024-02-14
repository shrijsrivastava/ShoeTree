import axios from "axios";
import React, { useState, useEffect } from "react";
import { userLoginObj } from './UserLogin';
 
function UserLoginStore({ children }) {
  let [loginStatus, setLoginStatus] = useState(false);
  let [curUser, setCurUser] = useState({});
  let [productdata, setProductData]= useState ([]);
  let [cart, setCart] = useState([]);
  


 
  const handleUserLogin = async (obj) => {
    try {
      //Getting data from the axios based on the username
      let res = await axios.get(`http://localhost:4000/users?username=${obj.username}`
      );
 
      if (res.status === 200) {
        //check if the user exists
        let data = res.data;
        //if the user does not exist
        if (data.length === 0) {
          alert("User not found");

        //if user is found  
        } else {
          if (obj.password === data[0].password) {
            setLoginStatus(true);
            setCurUser(data[0]);
            return true;
          }
          return false;
        }
      }
    } catch (error) {
      alert("Error Occurred ");
    }
  };


  useEffect(()=>{
    const fetchdata =async ()=>{
        try{
            const response=await axios.get('http://localhost:4000/product')
            setProductData(response.data)

            const response1=await axios.get('http://localhost:4000/cart')
            setCart(response1.data)
            console.log(response1.data)
 
        }
        catch(error){
            alert("Error fetching data:")
        }
    }
    fetchdata();
  },[])
 
  return (
    <userLoginObj.Provider
      value={{
        curUser,
        loginStatus,
        productdata,
        cart,
        setCurUser,
        setLoginStatus,
        handleUserLogin,
        setCart
      }}
    >
      {children}
    </userLoginObj.Provider>
  );
}
 
export default UserLoginStore;