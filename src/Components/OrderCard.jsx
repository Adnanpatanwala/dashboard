import React from 'react'
import styled from 'styled-components';

const OrderCard = () => {
  return ( 
    <Wrapper> 
        <div className='order-card'>
            <h5>id : jadflkajdf4654</h5>
            <h4>Red-Tshirt</h4>
            <label htmlFor="">userName : </label>
            <span>Adnan</span>
        </div>
    </Wrapper>
  )
}

export default OrderCard;
const Wrapper = styled.div`
.order-card{
padding: 5px 10px;
border: 1px solid rgb(31 41 55);
border-radius: 10px;
margin: 10px;
h5{
    font-size: 12px;
    font-weight: 400;
}
h4{
    font-weight: 500;
    font-size: 16px;
     
}
label{
    font-weight: 400;
    font-size: 12px;
}
}
`
