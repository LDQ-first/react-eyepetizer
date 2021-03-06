import React, { Component } from 'react'
import RelatedVideoDiv from '../../styled/RelatedVideo.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import {formatDuration} from '../../utils'


export default class RelatedVideo extends Component {
    static get propTypes() { 
        return { 
            videoList: PropTypes.array,
            _this: PropTypes.object
        }
    }


     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
        const {videoList, _this} = this.props
        
        
        
        let videoLists = null
        if(videoList) {
            videoLists = videoList.map((video, index) => {
                return (
                    <li key={index} className="video-list" onClick={() => {_this.getDetail(video.id)}}>
                        <div className="coverForFeed">
                           <img className="coverForFeedImg" src={video.coverForFeed} />
                        </div>
                        <div className="content">
                            <h3 className="title">{video.title}</h3>
                            <div className="meta"># {video.category} / {formatDuration(video.duration)}</div>
                        </div>
                    </li>
                )
            })
        }


        return (
            <RelatedVideoDiv>
               <ul className="video-lists">
                   {videoLists ? videoLists : null}
               </ul>
            </RelatedVideoDiv>
        )
    }
}
