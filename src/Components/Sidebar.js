import React from 'react'
import styled from 'styled-components' 
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
        <Wrapper>  
            <div className="sidebar">
            <h2>Adnan</h2>
            <div>   
                <Link to="/">Dashboard</Link>
                <Link to="/products">Products</Link>
                <Link to="/order">orders</Link>
                <Link to="/">Statics</Link>
                
            </div>
            </div>
        </Wrapper>
  )
}

export default Sidebar;

const Wrapper = styled.div`
.sidebar{

    width: 250px;
    background-color: rgb(31 41 55);;
    height: 100vh;
    color:white; 
    padding-left: 30px;
    padding-right: 20px;
    box-sizing: border-box;
    h2{ 
        padding-top: 50px;   
        border-bottom: 2px solid gray;
        padding-bottom: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        a{
            margin: 5px 0px;
            padding: 10px;
            text-decoration: none;
            color: white;
        }
        
    } 
}

 
     
`
