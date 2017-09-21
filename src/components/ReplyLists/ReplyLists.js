import React, { Component } from 'react'
import ReplyListsDiv from '../../styled/ReplyLists.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import moment from 'moment'
import IconButton from 'material-ui/IconButton'
import SocialWhatshot from 'material-ui/svg-icons/social/whatshot'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'


export default class ReplyLists extends Component {
     static get propTypes() { 
        return { 
            replyList: PropTypes.array,
            _this: PropTypes.object
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
       const {replyList} = this.props

       let replyLists = null
       if(replyList) {
           replyLists = replyList.map((reply, index) => {
               return (
                   <li key={index} className="reply">
                        <div className="reply-content">
                            <img src={reply.user.avatar} className="avatar"/>
                            <div className="reply-message">
                                 <h3 className="userName textOverflow">{reply.user.nickname}</h3>
                                <span className="time">{moment(reply.createTime).format(`YYYY-M-D H:m`)}</span>
                                <p className="message">{reply.message}</p>
                            </div>
                        </div>
                        <div className="like-hot">
                            <div className="like-count">
                                <span className="like-count-num">{reply.likeCount}</span>
                                <IconButton className="like-count-icon">
                                    <ActionThumbUp className="likeIcon"/>
                                </IconButton>
                            </div>
                            {   reply.likeCount 
                                ? <div className="isHot">
                                    <IconButton className="hot-icon">
                                        <SocialWhatshot className="hotIcon"/>
                                    </IconButton> 
                                </div>
                                : null
                            }
                            
                        </div>

                   </li>
               )
           })
       }

       


        return (
            <ReplyListsDiv >
                <header className="header" id="comment">
                    <h2 className="title">评论</h2>
                </header>
                { 
                    replyLists && replyLists.length
                    ? <ul className="reply-lists">
                        {replyLists}
                      </ul> 
                    : <p className="noReply">没有评论</p>
                }
            </ReplyListsDiv>
        )
    }
}
