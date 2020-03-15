import React, { useState } from 'react'
import axios from 'axios';

const ProductList = ({productList}) => {
  
    return (
        <div>
            {productList.map((product, i) => (
                <div key={i}>
                    <p> {product.title} </p>
                </div>
            ))}
        </div>
    )
}


export default ProductList
