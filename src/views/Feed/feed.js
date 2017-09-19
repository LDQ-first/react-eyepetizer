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
import ReturnIndex from '../../components/ReturnIndex/ReturnIndex.js'


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
        const {getFeedData, match} = this.props
         getFeedData(match.params.date)
    }

    
    componentWillReceiveProps(nextProps) {
        const {feeds, getFeedData, match} = nextProps
        const date = moment(feeds.date).format(`YYYYMMDD`)
        if(date !== match.params.date) {
             getFeedData(match.params.date)
        }
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
       const {videoList, date} = feeds


        return (
            <div className="feed">
              { <DatePickerCom _this={this}/>}
              <header className="date">
                   <h1 className="title">
                        {moment(date).format(`YYYYMMDD`)}
                   </h1>
               </header>
               {   
                   videoList
                   ? <VideoArea authorVideo={videoList} _this={this}/>
                   : null
                }
                <ReturnIndex/>
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