import React, { useState } from 'react'
import styled from 'styled-components';
import { IoMdCloseCircleOutline } from "react-icons/io";


const PopupProducts = ({setPopUp}) => {

  const [Image,setImage] = useState([]);

  const handlerImage = (e) =>{
     const file  = e.target.files[0];
     const reader = new FileReader();
     reader.onloadend = () =>{
      setImage(reader.result);
     }
     if(file){
      reader.readAsDataURL(file)
     } 
}

  
  return (
    <Wrapper> 
        <div className="popupcontainer">
          <button className='close' onClick={()=>setPopUp(false)}><IoMdCloseCircleOutline /></button>
            <div className="header-popup">
              <div className='category-popup'>
                <label htmlFor="category" className='popup-label'>category</label>
                <input type="text" className='input-popup'/>
              </div>
              <div className='title-popup'>
              <label htmlFor="title" className='popup-label'>Title</label>
                <input type="text" className='input-popup' />
              </div> 
            </div>


            <div className="middle-container">
              <div className='middle-container-inside'>


              <div>
                <label htmlFor="category" className='popup-label'>Color</label>
                <input type="text" className='input-popup'/>
              </div> 

              <div className='inventory'>
                <label htmlFor="category" className='popup-label'>inventory</label>
                <input type="text" className='input-popup'/>
              </div>

              </div>


              <div className='middle-container-inside'>
 
              <div className='inventory'>
                <label htmlFor="category" className='popup-label'>Size</label>
                <select name="" id="" className='select-size'>
                  <option value="">small</option>
                  <option value="">medium</option>
                  <option value="">large</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                  <option value="">XXXL</option>
                </select> 
              </div>

              <div>
                <label htmlFor="category" className='popup-label'>Price</label>
                <input type="text" className='input-popup'/>
              </div>

              </div>

 
            <div>
              <input type="file" name="" id="" 
               accept="image/*"
              onChange={handlerImage}
              />
              <button className='add-color'>Add</button>
            </div>


              <div className="bottom-middle-container">
 
              <div className="items-inv">
                <div className='item-inv-color'></div>
                <p>10</p>
                <p>small</p>
                <p>₹100</p>
                <button>X</button>
              </div>
               
              </div>
            </div>




            <div className="middle-container-2">
               <div className="description">
               <label htmlFor="category" className='popup-label'>description</label>
                 <textarea name="" id=""></textarea>
               </div>
            </div>


            <button className='create-btn'>Create</button>
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
    max-height: 500px;
    overflow-y: auto;
    max-width: 600px;
}
.bottom-middle-container{
  flex-wrap: wrap;
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
  .middle-container{
    background-color: rgb(31 41 55);
    padding: 10px;
    border-radius: 10px;
    color: white ;
    align-items: start; 
    
  }
  .add-color{  
    border: none;
    background-color: gray;
    padding: 2px 15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin-top: 12px;
  }
  .middle-container{
    margin-top: 20px;
  }
  .middle-container-inside{
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }
  .item-inv-color{
    background-color: red;
    width: 12px;
    height: 12px;
    border-radius: 50%; 
    
  }
  .items-inv{
    p{
      font-size: 12px;
    }
    display: flex;
    gap: 5px;
    align-items: center;
    background-color: white;
    padding: 2px 5px;
    border-radius: 5px;
    color: black;
    button{
      display: flex;
      background: #fd3737; 
      width: 15px;
      height: 15px;
      border: none;
      padding: 2px 0px;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .bottom-middle-container{
    display: flex;
    gap: 10px;
    margin-top: 10px;

  }
  .description{
    margin-top: 10px;
    textarea{
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid rgb(31 41 55) ;
    font-size: 12px;
    padding: 5px;
    height: 100px; 
    padding: 8px;
    }
  }
  .select-size{
    padding: 2px;
  }
  .create-btn{
    background-color: rgb(31,41,55);
    color: white;
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
  }
`