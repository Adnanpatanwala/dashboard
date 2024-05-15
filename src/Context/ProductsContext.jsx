import React, { useState,useContext, useReducer } from 'react'
import { reducer } from '../Reducer/ProductReducer';
import axios  from 'axios';


const UploadContext = React.createContext();

const initialState = {
  category:'',
  title:'',
  description:'',
  fit:'',
  fabric:'',
  wash:'',
  pattern:'',
  differentType:[],
}

const ProductsContext = ({children}) => {
  const [differentType,setdifferentType] = useState({
  colors:'',
  inventory:'',
  size:'',
  price:'',
  Image:[],
});

  const [state,dispatch] =  useReducer(reducer,initialState);

  const handlerChanges =(name,e)=>{
    const value = e.target.value;
    if(name=="colors" || name=="inventory" || name=="size" || name=="price"){
      setdifferentType({...differentType,[name]:value});
      return;
    }
    dispatch({type:"ADD_PRODUCTS",payload:{name,value}});
  }
  
  const handleSubmit = async() =>{
    try {
      const data = await axios.post("http://localhost:5000/api/v1/product",{...state})
      console.log(data);
    } catch (error) {
      console.log(error);  
    }
  }

  const handlerImage = (e) =>{
    const file  = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () =>{
     if(differentType.Image.length<5){  
      setdifferentType({...differentType,Image:[...differentType.Image,reader.result]});
     }
    }
    if(file){
     reader.readAsDataURL(file)
    } 
}


const handlerAdd = ()=>{
  dispatch({type:"ADD_COLORS",payload:differentType})
  // setdifferentType({
  //   colors:'',
  //   inventory:'',
  //   size:'',
  //   price:'',
  //   Image:[],
  // })
    
}

  return ( 
    <UploadContext.Provider value={{
      ...state,
      handleSubmit,
      handlerChanges,
      handlerImage,
      differentType,
      handlerAdd
      

    }}>
        {children}
    </UploadContext.Provider>
  )
}

export default ProductsContext;

export const UseProductsContext = () =>{
    return useContext(UploadContext);
}
