import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components';
import { IoMdCloseCircleOutline } from "react-icons/io";
import ItemsContent from './ItemsContent';
import axios from 'axios'
import { UseProductsContext } from '../Context/ProductsContext';
import Loading from './Loading';
import ButtonPopup from './ButtonPopup';


const PopupProducts = ({ setPopUp }) => {
  const {   handlerChanges, category, title, description, fit, fabric, wash, pattern, handlerImage, handlerAdd, colors, inventory, size, price, Images,handleRemove,productCode,colorsArray,sizeArray,handleAddCns,invSelect,invArray,inventoryOptions,loadinginState} = UseProductsContext();

 

  return (
    <Wrapper>
      <div className="popupcontainer">
        
        <button className='close' onClick={() => setPopUp(false)}><IoMdCloseCircleOutline /></button>
        <div className="header-popup">
          <div className='category-popup'>
            <label htmlFor="category" className='popup-label'>category</label>
            <input type="text" className='input-popup' value={category} onChange={(e) => handlerChanges("category", e)} placeholder='category' />
          </div>
          <div className='title-popup'>
            <label htmlFor="title" className='popup-label'>Title</label>
            <input type="text" className='input-popup' value={title} onChange={(e) => handlerChanges("title", e)}  placeholder='title'/>
          </div>
          <div className='title-popup'>
            <label htmlFor="title" className='popup-label'>ProductCode</label>
            <input type="text" className='input-popup' value={productCode} onChange={(e) => handlerChanges("productCode", e)}  placeholder='productCode'/>
          </div>
        </div>


        <div className="middle-container">
          <div className='middle-container-inside'>


            <div>
              <label htmlFor="category" className='popup-label'>Color</label>
              <input type="text" className='input-popup' value={colors} onChange={(e) => handlerChanges("colors", e)} placeholder='color'/>
              <button className='add-btn-cns' onClick={()=>handleAddCns("color")}>add color</button>
              <div className="color-div">
            {
              colorsArray.length>0 && colorsArray.map((item)=>{
                return <p>{item}</p>
              })
            }
          </div>


            </div>

            <div className='inventory'>
              <label htmlFor="category" className='popup-label'>inventory</label>
              <div className='inside-inv'> 
              <select name="" id="" className='inside-inv-select'  value={invSelect} onChange={(e)=>handlerChanges("invSelect", e)}>
                <option value="" selected disabled hidden>select</option>
                {
                  inventoryOptions.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })
                }
              </select>
               
                
              <input type="text" className='input-popup' value={inventory} onChange={(e) => handlerChanges("inventory", e)} placeholder='inventory'/>
              <button className='addtoinv' onClick={()=>handleAddCns("inventory")}>addTo Inv</button>
              </div>
              <div className='inv-values-container'>
                {
                    invArray.map((item,index)=>{
                    return <p className='inv-values' key={index}>{Object.keys(item)+" : "+Object.values(item)}</p>
                  })
                }
              </div>
            </div>


          </div>

         


          <div className='middle-container-inside'>

            <div className='inventory'>
              <label htmlFor="category" className='popup-label'>Size</label>
              <select name="" id="" className='select-size' value={size} onChange={(e) => handlerChanges("size", e)}>
                <option value="" disabled selected hidden >Select</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="XXXL">XXXL</option>
              </select>
              <button className='add-btn-cns' onClick={()=>handleAddCns("size")}>add size</button>
            </div>

            <div>
              <label htmlFor="category" className='popup-label'>Price</label>
              <input type="text" className='input-popup' value={price} onChange={(e) => handlerChanges("price", e)} placeholder='price'/>
            </div>

          </div>

          <div className="sizes-div">
            {
              sizeArray.length>0 && sizeArray.map((item)=>{
                return <p>{item}</p>
              })
            }
          </div>


          <div>
            <input type="file" name="" id=""
              accept="image/*"
              onChange={handlerImage}
              multiple
            />
            <button className='add-color' onClick={() => handlerAdd()}>Add</button>
          </div>

          {
            Images.length >= 1 &&
            <div className="img-inv">
              {
                Images.map((item) => {
                  return <div className='img-cont'>
                    <img src={item} alt="" />
                  </div>

                })
              }
              <button className='remove-btn' onClick={()=>handleRemove()}><IoMdCloseCircleOutline /></button>
            </div>
          }



        </div>




        <div className="middle-container-2">
          <div className="description">
            <label htmlFor="category" className='popup-label'>description</label>
            <textarea name="" id="" value={description} onChange={(e) => handlerChanges("description", e)} placeholder='Description'></textarea>
          </div>
        </div>

        <div className="specification">

          <div className="specification-content">
            <label htmlFor="" className='specification-label'>Fit</label>
            <select name="" id="" className='specification-select' value={fit} onChange={(e) => handlerChanges("fit", e)}>
              <option value="" disabled selected hidden >Select</option>
              <option value="Relaxed fit">Relaxed fit</option>
              <option value="Slim fit">Slim fit</option>
              <option value="Regular fit">Regular fit</option>
              <option value="Custom fit">Custom fit</option>
            </select>
          </div>


          <div className="specification-content">
            <label htmlFor="" className='specification-label'>Fabric</label>
            <select name="" id="" className='specification-select' value={fabric} onChange={(e) => handlerChanges("fabric", e)}>
              <option value="" disabled selected hidden >Select</option>
              <option value="100% Cotton">100% Cotton</option>
              <option value="Polyester">Polyester</option>
              <option value="Blend">Blend</option>
              <option value="Silk">Silk</option>
              <option value="Linen">Linen</option>
            </select>
          </div>

          <div className="specification-content">
            <label htmlFor="" className='specification-label'>Wash</label>
            <select name="" id="" className='specification-select' value={wash} onChange={(e) => handlerChanges("wash", e)}>
              <option value="" disabled hidden >Select</option>
              <option value="Machine Wash">Machine Wash</option>
              <option value="Hand Wash">Hand Wash</option>
              <option value="Dry Clean">Dry Clean</option>
              <option value="No Wash Required">No Wash Required</option>
            </select>
          </div>

          <div className="specification-content">
            <label htmlFor="" className='specification-label'>Pattern</label>
            <input type="text" className='pattern' value={pattern} onChange={(e) => handlerChanges("pattern", e)} placeholder='Pattern'/>
          </div>


        </div>


            <ButtonPopup/>
      </div>
    </Wrapper>
  )
}



export default PopupProducts;

const Wrapper = styled.div`
 

.inside-inv-select{
  width: 100px;
}

.inv-values-container{
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 8px;
  max-width: 300px;

}

.inv-values{
  font-size: 10px;
  display: inline-block;
  color: white;
  padding: 2px 5px;
  border-radius: 8px;
  background-color: black;
}

.inside-inv{
  display: flex;
  gap: 10px;
}
 
.addtoinv{
  padding: 2px 5px;
  border-radius: 8px;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
}
 
.sizes-div,.color-div{
  display: flex;
  gap: 5px;
  font-size: 10px;
  margin: 5px; 
  width: min-content;
  p{
    background-color: black;
    padding: 2px 5px;
    border-radius: 8px;
  }
}
.add-btn-cns{
  margin: 0px 10px;
  padding: 2px 5px;
  font-size: 12px;
  text-transform: capitalize;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #ccc;
  cursor: pointer;
  
}
.add-btn-cns:hover{
  box-shadow: 0px 0px 2px white;
}
.remove-btn{
  background:none;
border: none;
outline: none;
font-size: 18px; 
display: flex;
justify-content: center;
cursor: pointer;
}
.img-inv{
  display: flex;
  gap: 10px; 
  background-color: white;
  width: min-content;
padding: 5px 10px;
border-radius: 8px;
margin: 10px 0px;
align-items: center;
}
.img-cont{
  width: 30px;
  height: 30px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid black;
  }
}
.specification-select,.pattern{
  font-size: 12px;
  padding: 2px 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
.specification-label{
  display: block;
  font-size: 10px;
  font-weight: 400;
}
.specification{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
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
    overflow-y: auto;
    max-height: 600px; 
    width: 600px;
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
    width:100px
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
    margin-top: 20px;
  }
`