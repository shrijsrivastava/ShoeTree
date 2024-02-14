import React from 'react'
import './Gender.css'
import { useContext } from 'react'
import { userLoginObj } from '../../context/UserLogin'
import {Link} from'react-router-dom'


function Gender(props) {
    const {productdata} = useContext(userLoginObj);
    const {category} = props;

    const filteredProducts = productdata.filter((product) => product.category === category);

  return (
    <>
    <div className='hero_section'>
        <img src={props.banner} alt='a'/>
    </div>
    <div className='container mt-4'>
        <div className='row'>
    {filteredProducts.map((product)=>(
        <div key={product.id} className="col-md-4 mb-4">
          <Link to={`/products/${product.id}`} className="link-style">
            <div className='card fixed-height'>
            <img className='card-img-top'src={product.image}  alt={product.name}/>
            <div className='card-body'>
              <h5 className='card-brand' style={{ fontWeight:"bold"}}>{product.brand}</h5>
              <p className='card-title' style={{ color:'rgb(63, 60, 60)'}}>{product.name}</p>
              <p className='card-text'style={{ fontWeight:"bold"}} >{product.price}</p>
              </div>
             </div>
          </Link>
        </div>
        
        
        ))}
        </div>
        </div>
    </>
  )
}

export default Gender