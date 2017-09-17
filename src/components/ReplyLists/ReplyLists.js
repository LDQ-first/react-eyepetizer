import React, { Component } from 'react'
import ReplyListsDiv from '../../styled/ReplyLists.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import moment from 'moment'
import IconButton from 'material-ui/IconButton'
import WhatshotIcon from 'material-ui-icons/Whatshot'
import ThumbUpIcon from 'material-ui-icons/ThumbUp'


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
         console.log('replyList: ', replyList)
           replyLists = replyList.map((reply, index) => {
               return (
                   <li key={index} className="reply">
                        <div className="reply-content">
                            <img src={reply.user.avatar} className="avatar"/>
                            <div className="reply-message">
                                 <h3 className="userName">{reply.user.nickname}</h3>
                                <span className="time"></span>
                                <p className="message">{reply.message}</p>
                            </div>
                        </div>
                        <div className="like-hot">
                            <div className="like-count">
                                <span className="like-count-num">{reply.likeCount}</span>
                                <IconButton className="like-count-icon">
                                    <ThumbUpIcon className="likeIcon"/>
                                </IconButton>
                            </div>
                            {   reply.likeCount 
                                ? <div className="isHot">
                                    <IconButton className="hot-icon">
                                        <WhatshotIcon className="hotIcon"/>
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
            <ReplyListsDiv>
                <header className="header">
                    <h2 className="title">评论</h2>
                </header>
                { 
                    replyLists 
                    ? <ul className="reply-lists">
                        {replyLists}
                      </ul> 
                    : <p className="noReply">没有评论</p>
                }
            </ReplyListsDiv>
        )
    }
}
