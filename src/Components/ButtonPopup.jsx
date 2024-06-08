import React from 'react'
import { UseProductsContext } from '../Context/ProductsContext'

const ButtonPopup = () => { 
    const {handleSubmit,loadinginState} = UseProductsContext();

    if(loadinginState){
      return  <h5>Loading...</h5>
    }

  return (
    <div>
        <button className='create-btn' onClick={()=>handleSubmit()}>Create</button>
    </div>
  )
}

export default ButtonPopup
