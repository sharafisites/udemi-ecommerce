

import React from 'react';

import MenuItem from '../menu-item/men-item.component';
import './directory.styles.scss';
import { createContext } from 'react';
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {
                  title: 'hats',
                  imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: '/hats'
                },
                {
                  title: 'jackets',
                  imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    
                    this.state.sections.map(({id ,...otherProps})=>(
                        <MenuItem key={id} {...otherProps}/>
                        )
                    )
                }

            </div>
        )
    }

}

export default  Directory;