import React from 'react'

const ItemsContent = ({Image}) => {
  return (
    <div className="items-inv">
                <div className='item-inv-color' style={{backgroundColor:"red"}}></div>
                <div className="img-inv">
                    {
                        Image.map((item)=>{
                            return <div className='img-cont'>
                                    <img src={item} alt="" />
                                  </div>
                        })
                    }
                </div>
                <p>10</p>
                <p>small</p>
                <p>₹100</p>
                <button>X</button>
    </div>
               
  )
}

export default ItemsContent
