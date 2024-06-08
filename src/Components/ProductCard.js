import React, { useState } from 'react'
import styled from 'styled-components'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import PoppupDeleted from './PoppupDeleted';
import { UseProductsContext } from '../Context/ProductsContext';



const ProductCard = ({_id,image,inventory}) => {

    const [PopupDelete,setpopupDelete] = useState(false);
    const {deleteProduct} = UseProductsContext();
 
  return (
    <Wrapper>
        <div className='product-container-list'>
            <div className="img-container">
                <img src={image[0]} alt="product img" />
            </div>
            <div>

        <h5 className='header-id'>id : {_id}</h5>
        <div className="container-products">
            <h3>Red tshirt</h3>
            <span>
                <label htmlFor="" className='label-cust'>Total stock : </label>
                <h3>10</h3>
            </span>
        </div>
        <div className="bottom-container">
            <div className="colors-available-container">
            <label htmlFor="" className='label-cust'>Availabel colors : </label>
            <div className="color-available">

                {
                    inventory.map((item,index)=>{
                        return <div className="back-color" key={index}>
                        <span className='color-bck' style={{backgroundColor:`${Object.keys(item)}`}}></span>
                        <span className="avai-text">{Object.values(item)}</span>
                        <span className='size-color'>small</span>
                        </div>
                    })
                }
                    
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className='btn-list'>
            <button onClick={()=>setpopupDelete(true)}><FaEdit /></button>
            <button onClick={()=>deleteProduct({id:_id})} ><MdDelete /></button>
        </div>
    </Wrapper>
  )
}

export default ProductCard
const Wrapper = styled.div`
border: 1px solid gray; 
border-radius: 10px;
padding:10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;

.header-id{
    font-size: 12px;
    font-weight: 500;
}
.container-products{
    display: flex;
    gap: 15px;
}
.container-products h3{
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    width: 300px;
    margin: 5px 0px;
    color: rgb(31 41 55);
}
.container-products span{
    display: flex;
    align-items: center;
}
.label-cust{
    font-size: 12px;
    min-width: 105px;
}
.color-available{
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
} 
 .color-bck{
    width: 20px;
    height: 20px; 
    border-radius: 50%;

}
.colors-available-container{
    display: flex;
    gap: 10px;
    align-items: center;
}
.back-color{
    display: flex;
    gap: 5px;
    align-items: center; 
    border: 1px solid gray;
    border-radius: 5px ;
    padding: 1px 5px; 
} 
.back-color span:nth-child(2)::before,.back-color span:nth-child(3)::before{
    content: "";  
    margin-right:5px;
    border-left: 1px solid gray; 
}
.btn-list{
    display: flex;
    gap: 15px;
    align-items: center;
}
.btn-list button{ 
    font-size: 18px;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    display: flex;
    padding: 8px;
}
.product-container-list{
     display: grid;
     grid-template-columns: 100px 1fr;
}
.img-container{ 
    margin-right: 10px;
    border-radius: 10px;
    width: 80px;
    height: 80px;
    img{
        border-radius: 8px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.popup-successfull{
    position: relative;    

} 

`