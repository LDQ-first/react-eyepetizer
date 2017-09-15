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
        

    }
    
    switchRoute(path) {
         const {history} = this.props
        history.push(path)
    }

    getDetail (id) {
        const {getDetailData} = this.props
        getDetailData(id)
    }

    render() {
       
        const {match} = this.props

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