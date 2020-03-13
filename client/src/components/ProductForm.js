import React, { useState } from 'react';
import axios from 'axios';


export default (props) => {
    const [title, setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
           title,
           price,
           description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1 className='mb-4 display-5'>Product Manager</h1>
                <p>
                    <label>Title</label>
                    <input type='text' onChange={e=>setTitle(e.target.value)} className="ml-3"/>
                </p>
                <p>
                    <label>Price</label>
                    <input type='text' onChange={e=>setPrice(e.target.value)} className="ml-3"/>
                </p>
                <p>
                    <label>Description</label>
                    <input type='text' onChange={e=>setDescription(e.target.value)} className="ml-3"/>
                </p>
                <input type='submit' value='create' className="btn btn-md btn-danger"/>
            </form>
        </div>
    )
}