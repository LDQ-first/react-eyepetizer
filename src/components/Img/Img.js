import React, { Component } from 'react'
import Img from '../../styled/img'
import loadingGif from '../../../static/img/loading.gif'
import PropTypes from 'prop-types'

export default class Imgs extends Component {
    
    static get propTypes() { 
        return { 
            src: PropTypes.string, 
            alt: PropTypes.string,
            title: PropTypes.string,
            className: PropTypes.string
        }
    }


    constructor(props) {
        super(props)
        this.state = { 
            imageStatus: 0,
            imgUrl: loadingGif,
            show: false,
            winHeight: window.innerHeight,
            winTop: window.scrollY
        }
    }

    
     
    _check (imgs) {
        const {winTop, winHeight} = this.state
        if( winTop + winHeight > imgs.offsetTop  && 
            winTop < imgs.offsetTop + imgs.offsetHeight) {
            this.setState({
                show: true
            })
        }
    }

    _showImg () {
         if(!this.imgs) {
             this.setState({
                show: true
            })
             return
         }
        this.setState({
                winTop: window.scrollY
            })
        this._check(this.imgs)
    }
    
    componentDidMount() {
        
        this._check (this.imgs)
       
        window.addEventListener('scroll', () => {
            this._showImg()
        })
    }
    
    _handleImageLoaded() {
        this.setState({ 
            imageStatus: 200
        })
    }
    
    _handleImageErrored() {
        this.setState({ imageStatus: 404 })
    }

    render() {
        const {src, alt, title, className} = this.props
        const {imageStatus, imgUrl, show} = this.state
        const img = show ? (src ? src: imgUrl) : imgUrl
        return (
            <div ref={div => this.imgs = div} className="lazyImgWrapper">
                <Img className={className} src={img} alt={alt} title={title} 
                    show={imageStatus !== 200 ? true: false}/>
                <Img className={className} src={img} alt={alt} title={title} 
                onLoad={this._handleImageLoaded.bind(this)}
                onError={this._handleImageErrored.bind(this)} 
                show={imageStatus === 200 ? true: false}/> 
            </div>   
        )
    }
}
