import React, { Component } from 'react'
import DetailFooterDiv from '../../styled/DetailFooter.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'


export default class DetailFooter extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {

        const {_this} = this.props

        return (
            <DetailFooterDiv>
               <button className="indexLink" onClick={() => {_this.switchRoute('/')}}>
                    <div className="bottom-logo"></div>
               </button>
               <img src={eyeApi.eyepetizerWxQr} className="eyepetizerWxQr"/>
               <div className="qr-tips">长按二维码关注「开眼 Eyepetizer」微信公众号</div>
            </DetailFooterDiv>
        )
    }
}
