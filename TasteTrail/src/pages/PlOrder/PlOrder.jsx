import React, { useContext } from 'react';
import './PlOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="tital">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
               
                <div className="multi-fields">
                    
                    <input type="text" placeholder='Street' />
                    <input type="text" placeholder='City' />
                </div>
                
                <div className="multi-fields">
                    <input type="text" placeholder='State' />
                    <input type="text" placeholder='Zip code' />
                </div>
                <input type="text" placeholder='Phone No' />
                <input type="email" placeholder='Email address' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                    <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
            </div>
                    </div>
                    <button>PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlOrder;
