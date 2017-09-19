import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    feedsSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import VideoArea from '../../components/VideoArea/VideoArea.js'
import DatePickerCom from '../../components/DatePicker/DatePicker.js'
import moment from 'moment'

class Feed extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            feeds: PropTypes.object,
            getFeedData: PropTypes.func,
        }
    }

    
    componentWillMount() {
        const {getFeedData} = this.props
        const date = moment(new Date() - 24 * 60 * 60 * 1000).format(`YYYYMMDD`)
        getFeedData(date)
       
    }

    
    componentWillReceiveProps(nextProps) {
        
    }
    
    
    switchRoute(path, item) {
         const {history} = this.props
         if(item) {
           localStorage.itemList = JSON.stringify(item)
        }
         history.push(path)
        
    }


    render() {
       const {feeds} = this.props
       const {videoList} = feeds

       if(videoList) {
           console.log('videoList: ', videoList)
       }


        return (
            <div className="feed">
              { <DatePickerCom _this={this}/>}
               
               {   
                   videoList
                   ? <VideoArea authorVideo={videoList} _this={this}/>
                   : null
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    feeds: feedsSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Feed))