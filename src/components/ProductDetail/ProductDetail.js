import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {_id} = useParams();
    const [product , setProducts] = useState({});
    useEffect(()=>{
        fetch('https://rocky-harbor-58398.herokuapp.com/product/' + _id)
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, [_id])
    // const product = products.find(pd => pd.key === _id);
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;