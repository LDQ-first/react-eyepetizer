import React, { Component } from 'react'
import AuthorCarouselDiv from '../../styled/AuthorCarousel.js'
import {feed} from '../../router/link.js'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo.js'
import Carousel from '../Carousel/Carousel.js'

export default class AuthorCarousel extends Component {

   static get propTypes() { 
        return { 
            _this: PropTypes.object,
            authors: PropTypes.array,
        }
    }

    render() {
        const {_this, authors} = this.props
       
        let ResultAuthors = null 
        if(authors) {
            ResultAuthors = authors.map((author, index) => {
                const itemList = author.itemList

                return (
                    <li key={index} className="author" >
                        <AuthorInfo authorInfo={author} _this={_this}/>
                        <Carousel  itemList={itemList} _this={_this}/>
                    </li>
                    
                )
            })

           
        }




        return (
            <AuthorCarouselDiv >
               <ul className="authors">
                   {ResultAuthors}
               </ul>
            </AuthorCarouselDiv>
        )
    }
}
