//this one shows the offer banner page in home page so mounted in shop page

import React from 'react'
import './Offers.css'
import exclusive_img from '../Assests/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      
      <div className="offers-left">
         <h1>Exclusive</h1>
         <h1>Offers for you</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button>Check Me</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}

export default Offers
