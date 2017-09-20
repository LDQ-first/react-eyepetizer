import React, { Component } from 'react'
import AuthorSingleDiv from '../../styled/AuthorSingle.js'
import VideoImg from '../../components/VideoImg/VideoImg.js'
import AuthorLeftInfo from '../../components/AuthorLeftInfo/AuthorLeftInfo.js'

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
       console.log(item)

        return (
            <AuthorSingleDiv>
                <VideoImg item={item} _this={_this}/>
                { item.author ? <AuthorLeftInfo item={item.author} _this={_this}/> : null }
            </AuthorSingleDiv>
        )
    }
}
