import React, { Component } from 'react'
import AuthorAreaDiv from '../../styled/AuthorArea.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import {formatDuration} from '../../utils'
import {detail} from '../../router/link.js'


export default class AuthorArea extends Component {
     static get propTypes() { 
        return { 
           authorVideo: PropTypes.object,
            _this: PropTypes.object
        }
    }


    render() {
       const {authorVideo, _this} = this.props

       let author = null
       if(authorVideo) {
           author = authorVideo.map((video, index) => {
               return (
                   <li key={index} className="video">    
                        <div className="coverForFeed">
                           <img className="coverForFeedImg" src={video.videoImg} />
                        </div>
                         <div className="content" 
                         onClick={() => {_this.switchRoute(`${detail}/${video.id}`, index)}} >
                            <h3 className="title">{video.title}</h3>
                            <div className="meta"># {video.category} / {formatDuration(video.duration)}</div>
                        </div>
                   </li>
               )
           })
       }
      



        return (
           <AuthorAreaDiv>
               <ul className="authorVideo">
                    {author}
               </ul>
               <div className="end">
                    「 The End 」
               </div>
           </AuthorAreaDiv>
        )
    }
}