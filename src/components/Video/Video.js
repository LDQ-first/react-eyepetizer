import React, { Component } from 'react'
import VideoDiv from '../../styled/Video.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'


export default class Video extends Component {
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
       
        

        return (
            <VideoDiv>
               <video controls ></video>
            </VideoDiv>
        )
    }
}
