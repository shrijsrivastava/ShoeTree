import React from 'react'
import './Information.css'
import img1 from '../Assets/img1.webp'
import img2 from '../Assets/img2.jpeg'
import img3 from '../Assets/pic2.webp'
import deliver from '../Assets/deliver.png'
import Return from '../Assets/return.png'
import gift from '../Assets/gift.png'
import contact from '../Assets/contact.png'


function Information() {
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center mt-4 mb-3 ">
        <img src={img1} alt="1" className="img-fluid" />
      </div>
      <div className="col-md-4 d-flex justify-content-center mt-4 mb-3">
        <img src={img2} alt="2" className="img-fluid" />
      </div>
      <div className="col-md-4 d-flex justify-content-center mt-4 mb-3">
        <img src={img3} alt="3" className="img-fluid" />
      </div>
    </div>
  </div>


   <div className='info'>

    <div className='deliver'>
    <img src={deliver} alt="1"  />
    <h5>FREE SHIPPING</h5>  
    <p>Free shipping on all orders across country.</p>
    </div>
    <div className='Return'>
    <img src={Return} alt="1"  /> 
    <h5>30 DAYS RETURN</h5>  
    <p>No question return and easy refund in 14 days.</p> 
    </div>
    <div className='gift'>
    <img src={gift} alt="1"  /> 
    <h5>GIFT CARDS</h5>  
    <p>Buy gift cards and use coupon codes easily.</p> 
    </div>
    <div className='contact'>
    <img src={contact} alt="1"  />
    <h5>CONTACT US!</h5>  
    <p>Keep in touch via email and support system.</p>  
    </div>


   </div>
 
    

  
  </>
  )
}

export default Information
