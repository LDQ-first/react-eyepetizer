import React, { Component } from 'react'
import AuthorCarouselDiv from '../../styled/AuthorCarousel.js'
import {feed} from '../../router/link.js'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo.js'
import Carousel from '../Carousel/Carousel.js'

export default class AuthorCarousel extends Component {

   static get propTypes() { 
        return { 
            _this: PropTypes.object,
            itemList: PropTypes.array,
            authors: PropTypes.array,
        }
    }

    render() {
        const {_this, authors, itemList} = this.props
       


        return (
            <AuthorCarouselDiv >
                <AuthorInfo authorInfo={authors.authorInfo}/>
                <Carousel itemList={itemList} _this={_this}/>
            </AuthorCarouselDiv>
        )
    }
}
