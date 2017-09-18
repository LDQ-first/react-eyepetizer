import React, { Component } from 'react'
import VideoInfoDiv from '../../styled/VideoInfo.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import FlatButton from 'material-ui/FlatButton'
import {formatDuration} from '../../utils'
import IconButton from 'material-ui/IconButton'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import EditorInsertComment from 'material-ui/svg-icons/editor/insert-comment'
import SocialShare from 'material-ui/svg-icons/social/share'
import moment from 'moment'
import {author as authorLink} from '../../router/link.js'


export default class VideoInfo extends Component {
     static get propTypes() { 
        return { 
            itemList: PropTypes.array,
            _this: PropTypes.object
        }
    }


    render() {
       const {itemList, _this} = this.props


       let consumption = null
       if(itemList.consumption) {

           let newConsumption = []
           const icons =  {
               collectionCount: <ToggleStar className="list-icon"/>,
               replyCount: <EditorInsertComment className="list-icon"/>,
               shareCount: <SocialShare className="list-icon"/>
            }
            
           for(let key in itemList.consumption ) {
               newConsumption.push({
                   num: itemList.consumption[key],
                   icon: icons[key]
               })
           }

           consumption = newConsumption.map((item, index) => {
               return (
                   <li key={index} className="consumption">
                        <IconButton className="iconBtn">
                            {item.icon}
                        </IconButton>
                        <span className="num">{item.num}</span>
                   </li>
               )
           })
       }

       let author = null
       if(itemList.author) {
        /*   console.log('itemList.author: ', itemList.author)*/
           const item = itemList.author
           author = (
                <div className="author" onClick={() => {_this.switchRoute(`${authorLink}/${item.id}`)}}>
                    <img className="iconImg" src={item.icon} />
                    <div className="message">
                        <h3 className="name">{item.name}</h3>
                        <span className="lastTime">最新更新时间  {moment(item.latestReleaseTime).format(`YYYY-M-D hh:mm`)}</span>
                        <p className="des">{item.description}</p>              
                    </div>
                    <span className="videoNum">视频数 {item.videoNum}</span> 
               </div>
           )     
           
       }



        return (
            <VideoInfoDiv>
               <div className="video-meta">
                   <h1 className="title">{itemList.title}</h1>
                   <h2 className="meta">{itemList.category} / {formatDuration(itemList.duration)}</h2>
                   <p className="description">{itemList.description}</p>
               </div>
              { consumption && consumption.length
                ?  <ul className="consumptions">
                        {consumption}
                </ul> 
                : null
               }
               {author}
               <div className="download-area">
                   <div className="logo"></div>
                   <a className="appLink" href={eyeApi.appLink} target="_blank">
                    <FlatButton className="appLinkBtn"/>
                   </a>
               </div>
            </VideoInfoDiv>
        )
    }
}
