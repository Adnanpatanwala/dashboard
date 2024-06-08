import React from 'react'
import styled from 'styled-components';

const Loading = () => {
  return (
   <Wrapper> 
    <div className='loading'></div>
   </Wrapper>
  )
}

export default Loading;

const Wrapper = styled.div`
 .loading{
    width: 30px;
    height: 30px;
    border: 3px solid #f1f0f0;
    border-top: 3px solid rgb(31 41 55); 
    border-bottom: 3px solid rgb(31 41 55);
    border-radius: 50%;
    animation: rotate 1s linear infinite; 
 }
 @keyframes rotate {
    0%{
        transform: rotate(0deg);
    }
    50%{

    }
    100%{
        transform: rotate(360deg);
    }
 }
`
