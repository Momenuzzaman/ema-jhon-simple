import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {

   const [cart,setCart]=useState([]);

   useEffect(() => {
       const saveCart = getDatabaseCart();
       const productKey = Object.keys(saveCart);
       const counts = productKey.map(key =>saveCart[key]);
       console.log(counts);
   })
    return (
        <div>
            <h1> This is Review</h1>
        </div>
    );
};

export default Review;