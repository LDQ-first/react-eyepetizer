import React, { Component } from 'react'
import VideoInfoDiv from '../../styled/VideoInfo.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import {formatDuration} from '../../utils'

export default class VideoInfo extends Component {
     static get propTypes() { 
        return { 
            itemList: PropTypes.array,
            _this: PropTypes.object
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
       const {itemList} = this.props
        if(itemList) {
            console.log('itemList: ', itemList)
        }


        return (
            <VideoInfoDiv>
               <div className="video-meta">
                   <h1 className="title">{itemList.title}</h1>
                   <h2 className="meta">{itemList.category} / {formatDuration(itemList.duration)}</h2>
                   <p className="description">{itemList.description}</p>
               </div>
            </VideoInfoDiv>
        )
    }
}
