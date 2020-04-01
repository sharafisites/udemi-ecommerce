import React from 'react'
import './custom-button.styles.scss'

export const CustomButton=({children , IsGoogleSignIn , ...otherProps})=>{
    return(
        <button className={`${IsGoogleSignIn ? 'google-sign-in'  : ''} custom-button `} { ...otherProps}>
            {children}
        </button>
    )
}