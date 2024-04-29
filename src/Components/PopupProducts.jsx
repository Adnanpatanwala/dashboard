import React from 'react'
import styled from 'styled-components';
import { IoMdCloseCircleOutline } from "react-icons/io";


const PopupProducts = () => {
  
  return (
    <Wrapper> 
        <div className="popupcontainer">
          <button className='close'><IoMdCloseCircleOutline /></button>
            <div className="header-popup">
              <div className='title-popup'>
              <label htmlFor="title" className='popup-label'>Title</label>
                <input type="text" className='input-popup' />
              </div>
              <div className='subtitle-popup'>
                <label htmlFor="subtitle" className='popup-label'>Subtitle</label>
                <input type="text" className='input-popup'/>
              </div>
              <div className='category-popup'>
                <label htmlFor="category" className='popup-label'>category</label>
                <input type="text" className='input-popup'/>
              </div>
            </div>
            <div className="middle-container">
              <div>
                <label htmlFor="category" className='popup-label'>Price</label>
                <input type="text" className='input-popup'/>
              </div>
              <div className='inventory'>
                <label htmlFor="category" className='popup-label'>inventory</label>
                <input type="text" className='input-popup'/>
              </div>
            </div>
            <div className="middle-container-2">
              <div>
                <label htmlFor="category" className='popup-label'>Color</label>
                <input type="text" className='input-popup'/>
              </div>
              <div className='inventory'>
                <label htmlFor="category" className='popup-label'>Size</label>
                <input type="text" className='input-popup'/>
              </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default PopupProducts;

const Wrapper = styled.div` 
 .close{
  display: block;
  margin-left: auto;
  font-size: 20px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

 }
.popupcontainer{  
    background-color: white; 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 15px;
}
 
  .popup-label{
    display: block;
    font-size: 10px;
    margin-bottom: 1px;
    font-weight: 500;
    text-transform: capitalize;

  }
  .header-popup{
    display: flex;
    gap: 10px;
  }
  .input-popup{
    border: 1px solid gray; 
    font-size: 14px;
    padding: 2px 5px;
    border-radius: 5px;
  }
  .middle-container,.middle-container-2{
    display: flex;
    gap: 10px;
    margin-top: 15px; 
  }
`