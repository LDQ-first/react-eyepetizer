import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    videoListSelector,
    replyListSelector,
    detailSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Button from '../../styled/button'



class Detail extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            videoList: PropTypes.array,
            replyList: PropTypes.array,
            detail: PropTypes.object,
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
       
        const {match, videoList, replyList, detail} = this.props
       
       
        if(videoList.length) {
             console.log('videoList: ', videoList)
        } 
        if(replyList.length) {
             console.log('replyList: ', replyList)
        }

        if(detail.detail) {
             console.log('detail.detail: ', detail.detail)
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
    videoList: videoListSelector(state),
    replyList: replyListSelector(state),
    detail: detailSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Detail))