import React from 'react'

export default function Product_list(Props) {
   
     const {Title,Name,Material,Weight,Color}=Props;
  return (
    <div>
        <div className="Product-item"> 
         <div className="img"></div>
         <div style={{PaddingLeft:"10px",PaddingBottom:"5px"}}>
         <p className="product-title">{Title}</p>
         <p><span className="Product-span">&nbsp; Product Name:</span> {Name}</p>
         <p><span className="Product-span">&nbsp; raw material </span>: {Material}</p>
         <p><span className="Product-span">&nbsp; Grammage </span>: {Weight}</p>
         <p><span className="Product-span">&nbsp; Color </span>: {Color} </p>
         </div>
         </div> 
    </div>
  )
}
