//this item is used to display the product and its details
//this item component is used in different components i.e, Popular,NewCollections,

import React from 'react'
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
       <img src={props.image} alt="" />
       <p>{props.name}</p>
       <div className="item-prices">
        <div className="item-price-new">
        ₹{props.new_price}
        </div>
        <div className="item-price-old">
        ₹{props.old_price}
        </div>
       </div>
    </div>
  )
}

export default Item
