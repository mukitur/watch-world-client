import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    } ,[])
    return (
        <div>
            <h2>Total Products {products.length}</h2>
        </div>
    );
};

export default Products;