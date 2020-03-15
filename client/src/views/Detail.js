import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}