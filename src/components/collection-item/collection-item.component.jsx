import React from 'react';
import './collection-item.styles.scss'
export const CollectionItem=({imageUrl, name, price, id})=>{
    console.log({name});
return(
        
            <div className="collection-item" key={id}>
                <div className="image" style={{backgroundImage:`url(${imageUrl})`}}  />
                <div className="collection-footer">
                    <span className="name" >{name}</span>
                    <span className="price" >{price}</span>
                </div>
          </div>
       
  
)
}