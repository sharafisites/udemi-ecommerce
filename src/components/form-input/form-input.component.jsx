import React from 'react';
import './form-input.styles.scss';
export const FormInput=({handleChange,...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}></input>
            {
            otherProps.label ?
            <div className={`${otherProps.value.length ? 'shrink' : '' } form-input-label `} >
            {otherProps.label}
            </div>
            :
            null
            }
        </div>
    )
}