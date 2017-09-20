import React, { Component } from 'react'
import AuthorHorizontalDiv from '../../styled/AuthorHorizontal.js'
import {feed} from '../../router/link.js'
import AuthorLeftInfo from '../../components/AuthorLeftInfo/AuthorLeftInfo.js'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal.js'


export default class AuthorHorizontal extends Component {

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
                            <AuthorLeftInfo item={author} _this={_this}/>
                            <VideoHorizontal itemList={itemList} _this={_this} />
                        </li>
                    )
                })
           }


        return (
            <AuthorHorizontalDiv >
                <ul className="authors">
                    {ResultAuthors}
                </ul>
            </AuthorHorizontalDiv>
        )
    }
}
