import React from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import OrderCard from '../Components/OrderCard'
const Orders = () => {
  return (
    <Wrapper>
        <Header title={"Orders"}/>
        <div className="orders-container">
            <nav className='order-nav'>
                <button>Pending</button>
                <button>Returned</button>
                <button>Fullfilled</button>
            </nav>

            <div className="data-orders">
                <OrderCard/>
            </div>
        </div>
    </Wrapper>
  )
}

export default Orders

const Wrapper  = styled.div`
padding: 0px 20px;
background-color: aliceblue;
.orders-container{
    margin-top: 30px;
    background-color: white;
    height: calc(100vh - 140px);
    overflow-y: auto;
    border-radius: 10px;
}

.order-nav{
    display: block;
}
.order-nav button{
    background-color: rgb(31 41 55);
    color: white;
    border: none;
    width: 33.3%;
    padding: 5px 10px;
    border-right: 1px solid white;
    box-sizing: border-box;
}
 
`
