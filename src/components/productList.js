import React from 'react'
import productlist from '../productlist.json'
import ProductCard from './productCard'

const ProductList = () => {
    return (
        <div>
            {productlist.map((product) => <ProductCard product={product}/>)}
        </div>
    );
}

export default ProductList