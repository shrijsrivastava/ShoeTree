import React from 'react'
import MyNavbar from './Components/Navbar/MyNavbar';
import { Routes, Route } from 'react-router-dom'; 
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home';
import Gender from './Pages/Gender/Gender';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Men_banner from './Components/Assets/menbanner.webp'
import Women_banner from './Components/Assets/womenbanner.webp'
import Kid_banner from './Components/Assets/kidsbanner.webp'
import Cart from './Pages/Cart/Cart';
import PageNotFound from './Pages/PageNotFound/PageNotFound';



function App() {
  return (
    <>
    
    <MyNavbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/men' element={<Gender banner={Men_banner} category='men'/>}/>
       <Route path='/women' element={<Gender banner={Women_banner} category='women'/>}/>
       <Route path='/kids' element={<Gender banner={Kid_banner} category='kid'/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/products/:id' element={<ProductDetails/>}/>
       <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    <Footer/>
  
    
    </>
  )
}

export default App