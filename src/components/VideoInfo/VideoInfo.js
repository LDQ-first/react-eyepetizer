import React, { Component } from 'react'
import VideoInfoDiv from '../../styled/VideoInfo.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import {formatDuration} from '../../utils'
import IconButton from 'material-ui/IconButton'
import StarIcon from 'material-ui-icons/Star'
import InsertCommentIcon from 'material-ui-icons/InsertComment'
import ShareIcon from 'material-ui-icons/Share'


export default class VideoInfo extends Component {
     static get propTypes() { 
        return { 
            itemList: PropTypes.array
        }
    }


    render() {
       const {itemList} = this.props

       let consumption = null
       if(itemList.consumption) {

           let newConsumption = []
           const icons =  {
               collectionCount: <StarIcon className="list-icon"/>,
               replyCount: <InsertCommentIcon className="list-icon"/>,
               shareCount: <ShareIcon className="list-icon"/>
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
               <div className="download-area">
                   <div className="logo"></div>
                   <a className="appLink" href={eyeApi.appLink} target="_blank">
                    <Button className="appLinkBtn"/>
                   </a>
               </div>
            </VideoInfoDiv>
        )
    }
}
