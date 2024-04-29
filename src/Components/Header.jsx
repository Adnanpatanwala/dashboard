import React from 'react'
import styled from 'styled-components';

const Header = ({title}) => {
  return (
           <Wrapper>
            <div className="header">
                <h3>{title}</h3> 
            </div>
            </Wrapper> 
  )
}

export default Header;
const Wrapper= styled.div`
    .header{
        margin: 20px 0px; 
        display: flex;
        justify-content: space-between;
        margin-top: 50px; 
        position: relative;
         
        h3{
            font-weight: 600;
            font-size: 25px; 
        }
    }
    .header::after{
    content: ""; 
    position: absolute;
    left: 0%;
    bottom: -30%;
    width: 100%;   
    border-bottom: 1px solid rgb(31 41 55);;
}

`
