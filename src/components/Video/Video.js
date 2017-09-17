import React, { Component } from 'react'
import VideoDiv from '../../styled/Video.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'


export default class Video extends Component {
    static get propTypes() { 
        return { 
            itemList: PropTypes.array,
            _this: PropTypes.object
        }
    }


     constructor (props) {
        super(props)
        this.state = {
            play: false
        }
    }

    componentDidMount() {
       window.addEventListener('resize', () => {
           this._setVideoWrap()
       })
    }

    _setVideoWrap () {
        const vww = this.videoWrap.offsetWidth
        const ww = window.innerWidth
        const vwh = vww / 1.78
        this.setState({
            vwh
        })
    }
    
    _playVideo() {
        this.setState({
            play: true
        })
        this.video.play()
    }

    

    render() {
       const {itemList} = this.props
       const {vwh, play} = this.state
      /*  if(itemList) {
            console.log('itemList: ', itemList)
        }*/


        return (
            <VideoDiv>
               <div className="video-wrap"  style={{  height: `${vwh}` }}
                    ref={videoWrap => this.videoWrap = videoWrap}>
                   <video className="video" controls src={itemList.playUrl} 
                        ref={video => this.video = video}
                        onCanPlay={() => {this._setVideoWrap()}} >
                    </video>
                    <div className={classNames('cover', {'none': play})} style={{
                             background: `url(${itemList.videoImg}) no-repeat bottom/cover`
                        }}>
                    </div>
                    <Button className={classNames('play-btn', {'none': play})} style={{
                        backgroundImage: `url(${eyeApi.playerBtn})`
                    }} onClick={() => {this._playVideo()}}>
                    </Button>
               </div>
            </VideoDiv>
        )
    }
}
