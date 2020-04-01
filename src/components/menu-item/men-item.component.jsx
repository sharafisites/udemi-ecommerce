import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'
// import { useHistory } from "react-router-dom";
const MenuItem=({title, imgUrl, id, size, linkUrl, history, match})=>{
    // let history = useHistory();
    return(
    <div className={`${size} menu-item`}  onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage:`url(${imgUrl})`}}></div>
        <div className="content">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle"> SHOP NOW </span>
        </div>
    </div>
)}    
;
export default withRouter(MenuItem);