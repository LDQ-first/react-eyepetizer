import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import VideoListsDiv from '../../styled/VideoLists.js'
import moment from 'moment'
import Carousel from '../Carousel/Carousel.js'
import { withRouter } from 'react-router'

class VideoLists extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
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


    switchRoute(path, index) {
         const {history, itemList} = this.props
         console.log(path)
         history.push(path)
         console.log(index)
         console.log(itemList[index])
         console.log(JSON.stringify(itemList[index]))
         localStorage.itemList = JSON.stringify(itemList[index])
    }

    

    render() {
        const {date, itemList, location, history, match} = this.props
        if(date) {
            console.log('date: ', date)
        }
    //    console.log(location, history, match)

        return (
          <VideoListsDiv>
              <div className="date">
                  {moment(date).format('- MMM. D -')}
              </div>
              <Carousel itemList={itemList} _this={this}/>
          </VideoListsDiv>
        )
    }
}


export default withRouter(VideoLists)