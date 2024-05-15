export const reducer=(state,action)=>{
    if(action.type==="ADD_PRODUCTS"){
      const {name,value} = action.payload;
      return {...state,[name]:value}
    }
    
    if(action.type==="ADD_COLORS"){
      return {...state,differentType:[...state.differentType,action.payload]}
    }

    
    throw new Error(`no action of ${action.type} type found`);
  }