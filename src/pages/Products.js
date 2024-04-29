import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import ProductCard from '../Components/ProductCard';
import PopupProducts from '../Components/PopupProducts';
import Header from '../Components/Header';
import {Link} from 'react-router-dom'
import CreateOrder from '../Components/CreateOrder';

const data = [

]

const Products = () => { 
  return (
    <Wrapper> 
      <div className="products-container">
            <Header title={"Products"}/>
            <div className="product-main-container">
              <div className="search-product">
                <input type="text" placeholder='search products' />
                <i><FaSearch /></i>
              </div>
              <div className='right-container'> 
                <Link className='btn-create-prd' to='/createorder'>Create Products</Link>
                <div className='right-filter'>

                 <div className="sort-btn">
                <label htmlFor="sort" className='sort'>Sort : </label>
                <select name="" id="">
                  <option value="latest">latest</option>
                  <option value="">oldest</option>    
                </select>
              </div>
              <div className="category-container">
              <label htmlFor="category" className='category'>category : </label>
              <select name="" id="">
                <option value="">All</option>
                <option value="">T-shirt</option>
              </select>
              </div>
              </div>
            </div>
            </div>


            <div className="product-data">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
      </div>

      <div className="popup-container-product">
        <PopupProducts/>
      </div>
    </Wrapper>
  )
}

export default Products;
const Wrapper = styled.div`
padding: 0px 20px;
background-color: aliceblue;

 
 
.search-product{
  position: relative;
}
.search-product input{
  padding: 5px;
  width: 300px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  padding-left: 35px;
  font-size: 16px;
}
.search-product i{
  position: absolute;
  top: 8px;
  left: 10px; 
}
.product-main-container{
  display: flex;
  justify-content: space-between;
}
.sort-btn select,.category-container select,.btn-create-prd{
  padding: 5px;
  font-size: 14px;
}
.category-container select{
  width: 150px;
}
.sort-btn label,.category{
  font-size: 14px;
}
.right-container{
  display: flex;
  gap: 20px;
  align-items: center;
}
.product-data{
  margin-top: 30px;
  height: calc(100vh - 200px);
  background-color: white;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px lightgray;
  overflow-y: auto;

}
.btn-create-prd{
  background-color: rgb(31 41 55);
  color: white;
  border: 1px solid gray;
  padding:5px 15px ;
  border-radius: 5px;
  text-decoration: none;
}
.products-container{
  position: relative;
}
.popup-container-product{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px; 
  top: 0px;
  background-color: rgb(0,0,0,0.7);
} 

.right-filter{
  display: flex;
  gap: 10px;
}

@media screen and (max-width:767px) {
  .product-main-container{
    display: block;
  }
        .search-product input{
            width: 100%;
            box-sizing: border-box;
        }
        .right-container{
          display: block;
        }
        .btn-create-prd{
          margin: 10px 0px;
        }
        .sort-btn{
          font-size: 12px;
        }
        .category,.sort{
          display: block;
          font-size: 12px !important;
        }
        .colors-available-container,.color-available{
          display: inline-block;
        }
        .label-cust{  
          display: block;
        }
        .container-products h3{
          width: auto;
        }
        
      }
`
