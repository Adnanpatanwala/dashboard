import React, { useState,useContext, useReducer, useEffect } from 'react'
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
  AllItems:'',
  colors:'',
  inventory:'',
  size:'',
  price:'',
  productCode:'',
  Images:[], 
}

const ProductsContext = ({children}) => {
  

  const [state,dispatch] =  useReducer(reducer,initialState);
  const [ImagesUpload,SetImagesUpload] = useState([]);
  const [products,SetProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [loadinginState,setLoadinginState] = useState(false);
  const [sizeArray,setSizes] = useState([]);
  const [colorsArray,SetColors] = useState([]);
  const [invArray,Setinv] = useState([]);
  const [invSelect,SetinvSelect] = useState('');
  const [inventoryOptions,setInventoryOptions] = useState([]);
  const [filter,setFilter] = useState();
  const [sort,setSort] = useState();


  const filterProducts = async()=>{
    try {
      
      setLoading(true);
    const data = await axios.post("http://localhost:5000/api/v1/product/filter",{newObjects:state.category},{
      headers: {
        'Content-Type': 'application/json',
      },
    withCredentials:true
    })
  setLoading(false);
  SetProducts([...data?.data]);
  } catch (error) {
      setLoading(false);
      alert(error.message);
      console.log(error);
      
    }
  }
 


  const handlerChanges =(name,e)=>{
    const value = e.target.value;
    if(name==="invSelect"){
      SetinvSelect(value); 
      return;
    }
    dispatch({type:"ADD_PRODUCTS",payload:{name,value}});
  }

  const inventoryValues = ()=>{
    let arr = [];
    sizeArray.forEach((size)=>{
      colorsArray.forEach((color)=>{
        arr = [...arr,size+color];
      })
    })
    setInventoryOptions(arr);
  }

  useEffect(()=>{
    inventoryValues();
  },[sizeArray,colorsArray])
   

  
  
  const handleSubmit = async() =>{
    try { 
      setLoadinginState(true);
      const formdata = new FormData();
      state.Images.length>0 && state.Images.forEach((file,index)=>{
        formdata.append(`form${index}`,file);
      })
 

      const { fit,fabric,wash,pattern,Images,AllItems,size,colors,inventory,...rest} = state;
       
      formdata.append("data",JSON.stringify({...rest,size:sizeArray,colors:colorsArray,inventory:invArray}));

      const data = await axios.post("http://localhost:5000/api/v1/product",formdata,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials:true
      }
      )  
      setSizes([]);
      SetColors([]);
      SetImagesUpload([]);
      if(data?.data==="Product added successfully"){
        alert("Product added successfully")
        getProducts();
      }
      setLoadinginState(false);

    } catch (error) {
      alert(error)
      setLoadinginState(false)
      console.log(error);  
    }
  }

  const handlerImage = (e) =>{
    const arr = e.target.files;
    if(arr.length<=4){
        SetImagesUpload([...ImagesUpload,...arr]);
       
    }
   
}

const handleRemove =()=>{
  dispatch({type:"REMOVE_ITEM"})
  SetImagesUpload([]);
}


const handlerAdd = ()=>{
  dispatch({type:"ADD_COLORS",payload:ImagesUpload})
}

const handleAddCns = (name)=>{
  if(name==='color' && state.colors){
    SetColors([...colorsArray,state.colors])
    return;
  }
  if(name==='size'&& state.size){
    setSizes([...sizeArray,state.size]);
    return;
  }
  if(name==='inventory' && invSelect){ 
    Setinv([...invArray,{[invSelect]:state?.inventory}]);
    return;
  }
}


const getProducts = async()=>{
  try {
    setLoading(true);
    const data = await axios.get('http://localhost:5000/api/v1/product',{
      headers: {
        'Content-Type': 'application/json',
      },
    withCredentials:true
  });
  if(!data){
    throw new Error("NO Products found");
  }
    SetProducts(data.data); 
    setLoading(false); 
    } catch (error) {
      console.log(error);
    }


}


const deleteProduct = async({id})=>{
 
  try { 
    const data = await axios.delete(`http://localhost:5000/api/v1/product/${id}`,{
      headers: {
        'Content-Type': 'application/json',
      },
    withCredentials:true
  });
  if(!data){
    throw new Error("NO Products found to be deleted");
  }  
  getProducts();
    } catch (error) {
      console.log(error);
    }
}

 

  return ( 
    <UploadContext.Provider value={{
      ...state,
      handleSubmit, 
      handlerImage, 
      handlerAdd,
      handleRemove,
      handlerChanges,
      sizeArray,
      colorsArray,
      handleAddCns,
      invSelect,
      invArray,
      products,
      loading,
      setLoading,
      getProducts,
      deleteProduct,
      inventoryOptions,
      loadinginState,
      filterProducts,
      setFilter,
      setSort

      

    }}>
        {children}
    </UploadContext.Provider>
  )
}

export default ProductsContext;

export const UseProductsContext = () =>{
    return useContext(UploadContext);
}
