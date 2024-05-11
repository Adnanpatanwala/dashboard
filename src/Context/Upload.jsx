import React, { useContext } from 'react'


const UploadContext = React.createContext();


const Upload = ({children}) => {
  return ( 
    <UploadContext.Provider value={
        'jel'
    }>
        {children}
    </UploadContext.Provider>
  )
}

export default Upload;

export const UseUploadContext = () =>{
    return useContext(UploadContext);
}
