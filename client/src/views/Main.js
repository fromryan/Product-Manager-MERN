import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/getallproducts')
            .then (res => {
                setProductList(res.data);
                setLoaded(true);
            });
    },[])
    
    return (
        <div>
            <ProductForm />
            {loaded && <ProductList productList={productList}/>}
        </div>
    )
}