import React, { Component } from 'react';


class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
      <input type="checkbox" name="items"/>
        <div className='item-image'>
          <img src="/assets/item.png" />
        </div>
        <div className='item-price'><h3 style={{color:'#FF6C98'}}>300$</h3></div>
        <div className='item-description'>
          <p>Roses from the roesman With some other services</p>
        </div>
        <div className='item-icons'>
          <i className="fa fa-wrench" style={{fontSize:'48px',color:'#32B7F0'}}></i>
          <i className="fa fa-trash" style={{fontSize:'48px',color:'red'}}></i>
        </div>

      </div>
    );
  }
}

export default CartItem;
