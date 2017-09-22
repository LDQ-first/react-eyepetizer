import React, { Component } from 'react'
import VideoHorizontalDiv from '../../styled/VideoHorizontal.js'
import {detail} from '../../router/link.js'
import {formatDuration} from '../../utils'

export default class VideoHorizontal extends Component {
    static get propTypes() { 
        return { 
           itemList: PropTypes.object,
           _this: PropTypes.object,
           
        }
    }


    render() {
        const {itemList, _this} = this.props


        const videoLists = itemList.map((item, index) => {
            return (
                <li key={index} className="video" >
                    <div className="videoImg" 
                    style = {{
                        background: `url(${item.videoImg}) no-repeat center/cover`
                    }}
                    onClick={() => {_this.switchRoute(`${detail}/${item.id}`, item)}}>
                    </div>
                    <div className="videoDes">
                        <h3 className="name textOverflow">{item.title}</h3>
                        <div className="meta textOverflow"># {item.category} / {formatDuration(item.duration)}</div>
                    </div>
                </li>
            )
        })


        return (
            <VideoHorizontalDiv>
                <ul className="authorVideos" >
                    {videoLists}
                </ul>
            </VideoHorizontalDiv>
        )
    }
}
