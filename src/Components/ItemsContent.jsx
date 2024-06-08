import React from 'react'
import { UseProductsContext } from '../Context/ProductsContext';


const ItemsContent = ({Image}) => {
  const {handleRemove} =  UseProductsContext();
 
  return (
    <div className="items-inv"> 
                <div className="img-inv">
                     <div className='img-cont'>
                       <img src={Image} alt="" />
                      </div>
                </div>
    </div>
               
  )
}

export default ItemsContent
