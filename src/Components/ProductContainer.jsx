import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { UseProductsContext } from '../Context/ProductsContext';
import Loading from './Loading';

const ProductContainer = () => {
    const {products,loading,getProducts} = UseProductsContext();

    
    useEffect(()=>{
        getProducts();
      },[])


    if(loading){
        return <div className="backloader">
            <Loading/>
        </div>
    }

    if(products.length<=0){
        return <div className="backloader">
         <p>No products found</p>
    </div>
    }
  return (
    products && products.map((item)=>{
        return <ProductCard {...item}/> 
    })
  )
}

export default ProductContainer
