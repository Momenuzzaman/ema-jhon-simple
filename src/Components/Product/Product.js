import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';


    const Product = (props)=> {
       
    const {name,img,seller,price,stock,key}=props.product;

    
   
    return (
        <div className="product">
            <div>
                <img src={img} alt=""></img>
            </div>
            <div>
            <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
            <br></br>
            <p>By: {seller}</p>
            <p>${price}</p>
            <p>Only {stock} left in stock - order soon</p>
            <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;