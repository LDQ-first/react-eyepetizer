import React, { Component } from 'react'
import AuthorSingleDiv from '../../styled/AuthorSingle.js'
import VideoImg from '../../components/VideoImg/VideoImg.js'
import AuthorVideoInfo from '../../components/AuthorVideoInfo/AuthorVideoInfo.js'



export default class AuthorSingle extends Component {
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


        return (
            <AuthorSingleDiv>
                <VideoImg item={item} _this={_this}/>
                <AuthorVideoInfo item={item} _this={_this}/>
            </AuthorSingleDiv>
        )
    }
}
