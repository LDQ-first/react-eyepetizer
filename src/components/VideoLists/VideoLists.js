import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ShowQRCode from '../showQRCode/showQRCode.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import VideoListsDiv from '../../styled/VideoLists.js'
import moment from 'moment'

export default class VideoLists extends Component {
    static get propTypes() { 
        return { 
            date: PropTypes.string.isRequired,
            itemList: PropTypes.array,
            _this: PropTypes.object
        }
    }


    constructor (props) {
        super(props)
        this.state = {
           
        }
    }


    
    componentWillMount() {
       
    }
    

    render() {
        const {date, itemList} = this.props
        if(date) {
            console.log('date: ', date)
        }
        if(itemList) {
            console.log('itemList: ', itemList)
        }



        return (
          <VideoListsDiv>
              <div className="date">
                  {moment(date).format('- MMM. D -')}
              </div>
          </VideoListsDiv>
        )
    }
}
