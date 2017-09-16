import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    videoListsSelector,
    replyListsSelector,
    detailsSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Button from '../../styled/button'



class Detail extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            itemList: PropTypes.array,
            videoLists: PropTypes.array,
            replyLists: PropTypes.array,
            details: PropTypes.object,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
        }
    }

    
    componentWillMount() {
        const {getRelatedData, getRepliesData, match} = this.props
        if(match.params.id) {
            getRelatedData(match.params.id)
            getRepliesData(match.params.id)
        }
        console.log('willmount')
    }
    

    
    componentWillReceiveProps(nextProps) {
        const {getRelatedData, getRepliesData, match} = nextProps

    }
    
    switchRoute(path) {
         const {history} = this.props
        history.push(path)
    }

    getDetail (id) {
        const {getDetailData, getRelatedData, getRepliesData, match} = this.props
        if(match.params.id) {
            getRelatedData(id)
            getRepliesData(id)
        }
        getDetailData(id)
    }

    render() {
       
        const {match, itemList, videoLists, replyLists, details} = this.props
        const {videoList} = videoLists
        const {replyList} = replyLists
        const {detail} = details

        /*console.log('videoList: ', videoList)
        console.log('replyList: ', replyList)
        console.log('replyList: ', replyList)
        console.log('detail: ', detail)
        
*/
        if(itemList) {
            console.log('itemList: ', itemList)
        }

        if(videoList) {
             console.log('videoList: ', videoList)
        } 
        if(replyList) {
             console.log('replyList: ', replyList)
        }

        if(detail) {
             console.log('detail: ', detail)
        }

        return (
            <div>
                detail
                <div>
                  {match.params.id ?  <Button  className="btn" onClick={() => {
                        this.getDetail(match.params.id)
                    }}>获取 {match.params.id} 的详情</Button > : null }
                    <Button  className="btn" onClick={() => {
                        this.switchRoute('/')
                    }}>跳转到 /</Button >
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    videoLists: videoListsSelector(state),
    replyLists: replyListsSelector(state),
    details: detailsSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Detail))