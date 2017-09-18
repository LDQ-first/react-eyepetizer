import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
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
import {detail as detailLink} from '../../router/link.js'
import GoToTop from '../../components/GoToTop/GoToTop.js'

class Detail extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
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
         if(localStorage.itemList) {
            const itemList = JSON.parse(localStorage.itemList)
            this.setState({
                itemList: itemList
            })
        }
        
    }
    

    

    
    componentWillReceiveProps(nextProps) {
        const {getRelatedData, getRepliesData, match, details} = nextProps
        const {detail} = details
        if(detail && this.props.details.detail !== detail) {
            const newItemListData = {
                category: detail.category,
                consumption: detail.consumption,
                videoImg: detail.coverForFeed,
                duration: detail.duration,
                description: detail.description,
                id: detail.id,
                tags: detail.tags,
                title: detail.title,
                playUrl: detail.playUrl,
                author: detail.author
            }
            this.setState({
                itemList: newItemListData
            })
            localStorage.itemList = JSON.stringify(newItemListData)
            if(match.params.id !== newItemListData.id + '') {
                this.switchRoute(`${detailLink}/${newItemListData.id}`) 
            }
         }
       /*  this._gotoTop()*/
         

    }

    _gotoTop () {
        const timer = setInterval(() => {
            if(document.body.scrollTop === 0) {
                clearInterval(timer)
            }
            else {
                document.body.scrollTop -=  document.body.scrollTop * 0.2
            }
        }, 100)
    }
    
    switchRoute(path) {
        const {history} = this.props
        history.push(path)
    }

    getDetail (id) {
        const {getDetailData, getRelatedData, getRepliesData, match} = this.props
        if(id) {
            getRelatedData(id)
            getRepliesData(id)
        }
        getDetailData(id)
    }

    render() {
       
        const {match, videoLists, replyLists, details} = this.props
        const {itemList} = this.state
        const {videoList} = videoLists
        const {replyList} = replyLists
        const {detail} = details

       
       
        return (
            <div className="detail">
                <Video itemList={itemList}/>
                <VideoInfo itemList={itemList} _this={this}/>
                <RelatedVideo videoList={videoList} detail={detail} _this={this}/>
                <ReplyLists replyList={replyList}/>
                { itemList.tags.length ? <Tags tags={itemList.tags} /> : null}
                <DetailFooter _this={this}/>
                <GoToTop />
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