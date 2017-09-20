import React, { Component } from 'react'
import VideoImgDiv from '../../styled/VideoImg.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import {detail} from '../../router/link.js'


export default class VideoImg extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            item: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    

    render() {
       
     
       const {item, _this} = this.props

        return (
            <VideoImgDiv>
                <img src={item.videoImg} className="img"
                 onClick={() => {_this.switchRoute(`${detail}/${item.id}`, item)}}
                 />
            </VideoImgDiv>
        )
    }
}
