import React, { Component } from 'react'
import GoToFeedDiv from '../../styled/GoToFeed.js'
import RaisedButton from 'material-ui/RaisedButton'
import {feed} from '../../router/link.js'
import moment from 'moment'


export default class GoToFeed extends Component {

   static get propTypes() { 
        return { 
            _this: PropTypes.object
        }
    }

    render() {
        const {_this} = this.props
        const date = moment(new Date() - 24 * 60 * 60 * 1000).format(`YYYYMMDD`)



        return (
            <GoToFeedDiv >
                <h2 className="title" onClick={() => {_this.switchRoute(`${feed}/${date}`)}}>
                    更多往期精选视频 &gt;
                </h2>
            </GoToFeedDiv>
        )
    }
}
