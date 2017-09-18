import React, { Component } from 'react'
import AuthorInfoDiv from '../../styled/AuthorInfo.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'


export default class AuthorInfo extends Component {
     static get propTypes() { 
        return { 
           authorInfo: PropTypes.object,
            _this: PropTypes.object
        }
    }


    render() {
       const {authorInfo, _this} = this.props

       let author = null
       if(authorInfo) {
           console.log('authorInfo: ', authorInfo)
           author = (
               <div className="authorInfo">
                   <img className="icon" src={authorInfo.icon}/>
                   <h1 className="name">{authorInfo.name}</h1>
                   <p className="brief">{authorInfo.brief}</p>
                   <p className="description">{authorInfo.description}</p>
                   <p className="videoCount">
                        <span className="videoCount-content">共有 {authorInfo.videoCount} 个视频</span>
                   </p>
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
