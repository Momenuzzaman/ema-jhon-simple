import React from 'react';

const cart = (props) => {
    const cart = props.cart;

    const totalPrice = cart.reduce((total,product) => total+product.price,0);

    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice >15){
        shipping = 5;
    }
    else if(totalPrice >0){
        shipping = 12;
    }
    return (
        <div>
            <h2>Summay </h2>
            <p>Item Ordered: {cart.length}</p>
            <p>Product price: {totalPrice}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Total Price: {totalPrice + shipping}</p>
            <button className="main-button">Review Order</button>
        </div>
    );
};

export default cart;