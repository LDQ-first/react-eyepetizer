import React, { Component } from 'react'
import AuthorInfoDiv from '../../styled/AuthorInfo.js'
import {eyeApi} from '../../api/api.js' 

export default class AuthorInfo extends Component {
     static get propTypes() { 
        return { 
           authorInfo: PropTypes.object,
            _this: PropTypes.object,
        }
    }


    render() {
       const {authorInfo, _this} = this.props
      

       let author = null
       if(authorInfo) {
           author = (
               <div className="authorInfo">
                   {
                       authorInfo.icon 
                       ? <img className="icon" src={authorInfo.icon}/>
                       : null
                   }
                   {
                       authorInfo.name
                       ? <h1 className="name">{authorInfo.name}</h1>
                       : (
                           authorInfo.title 
                           ? <h1 className="name">{authorInfo.title}</h1>
                           : null
                         )
                   }
                   {
                       authorInfo.brief
                       ? <p className="brief">{authorInfo.brief}</p>
                       : null
                   }
                   {
                       authorInfo.description
                       ? <p className="description">{authorInfo.description}</p>
                       : null
                   }
                   {
                       authorInfo.videoCount
                       ? (
                           <p className="videoCount">
                                <span className="videoCount-content">共有 {authorInfo.videoCount} 个视频</span>
                            </p>

                         )
                        : null
                   }
                   
               </div>
           )    
       }
      



        return (
           <AuthorInfoDiv>
                {author}
           </AuthorInfoDiv>
        )
    }
}
