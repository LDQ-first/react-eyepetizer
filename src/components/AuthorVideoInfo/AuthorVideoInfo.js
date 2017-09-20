import React, { Component } from 'react'
import AuthorVideoInfoDiv from '../../styled/AuthorVideoInfo.js'
import {formatDuration} from '../../utils'
import {author as authorLink} from '../../router/link.js'



export default class AuthorVideoInfo extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            item: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    

    render() {
       
     
       const {item, _this} = this.props
       console.log(item)

       let authorsVideos = null

       if(item) {
           authorsVideos =  (
                   <li className="author-video" 
                   onClick={() => { item.author ? _this.switchRoute(`${authorLink}/${item.author.id}`) : null }}>
                        {
                            item.author 
                            ? <img className="iconImg" src={item.author.icon} />
                            : null
                        }
                        <div className="message">
                            {
                                item.name ? <h3 className="name">{item.name}</h3> : (
                                    item.title ? <h3 className="name">{item.title}</h3> : null
                                )
                            }    
                            <div className="meta">
                               { item.author ? item.author.name + '/' : null} #{item.category} / {formatDuration(item.duration)}
                            </div>             
                        </div>
                   </li>
               )

       }


        return (
            <AuthorVideoInfoDiv 
                 style={{
                     cursor: item.author ? 'pointer' : 'auto'
                 }}>
                <ul className="authors-videos">
                    {authorsVideos}
                </ul>
            </AuthorVideoInfoDiv>
        )
    }
}
