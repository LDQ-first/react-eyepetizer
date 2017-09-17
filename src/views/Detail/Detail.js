import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    IndexDataSelector,
    videoListsSelector,
    replyListsSelector,
    detailsSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Button from '../../styled/button'
import Video from '../../components/Video/Video.js'
import VideoInfo from '../../components/VideoInfo/VideoInfo.js'
import RelatedVideo from '../../components/RelatedVideo/RelatedVideo.js'
import ReplyLists from '../../components/ReplyLists/ReplyLists.js'
import Tags from '../../components/Tags/Tags.js'
import DetailFooter from '../../components/DetailFooter/DetailFooter.js'

class Detail extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            IndexData: PropTypes.object,
            videoLists: PropTypes.array,
            replyLists: PropTypes.array,
            details: PropTypes.object,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
        }
    }

     constructor (props) {
        super(props)
        this.state = {
           
        }
    }
    
    componentWillMount() {
        const {getRelatedData, getRepliesData, match} = this.props
        if(match.params.id) {
            getRelatedData(match.params.id)
            getRepliesData(match.params.id)
        }
        console.log('willmount')
        const {IndexData} = this.props
        const {itemList} = IndexData

         if(localStorage.itemList) {
            console.log('localStorage.itemList: ', localStorage.itemList)
            console.log('JSON.parse(localStorage.itemList): ', JSON.parse(localStorage.itemList))
            this.setState({
                itemList: JSON.parse(localStorage.itemList)
            })
        }
        
    }
    
    
    componentDidMount() {
        /*const {IndexData} = this.props
        const {itemList} = IndexData
         if(itemList) {
            console.log('itemList: ', itemList)
        }*/
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
       
        const {match, IndexData, videoLists, replyLists, details} = this.props
       /* const {itemList} = IndexData*/
       const {itemList} = this.state
        const {videoList} = videoLists
        const {replyList} = replyLists
        const {detail} = details

      
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
            <div className="detail">
               { /*detail
                <div>
                  {match.params.id ?  <Button  className="btn" onClick={() => {
                        this.getDetail(match.params.id)
                    }}>获取 {match.params.id} 的详情</Button > : null }
                    <Button  className="btn" onClick={() => {
                        this.switchRoute('/')
                    }}>跳转到 /</Button >
                </div>*/}
                <Video/>
                <VideoInfo/>
                <RelatedVideo />
                <ReplyLists />
                <Tags />
                <DetailFooter />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    IndexData: IndexDataSelector(state),
    videoLists: videoListsSelector(state),
    replyLists: replyListsSelector(state),
    details: detailsSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Detail))