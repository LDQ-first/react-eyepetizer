import React, { Component } from 'react'
import CategorysDiv from '../../styled/Categorys.js'
import {eyeApi} from '../../api/api.js' 
import AuthorCarousel from '../../components/AuthorCarousel/AuthorCarousel.js'


export default class Categorys extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            categorys: PropTypes.object
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
       
     
       const {categorys, _this} = this.props



       let categoryAuthor = null
        if(categorys) {
            const {authors} = categorys
            console.log('authors: ', authors)

            if(authors) {
                categoryAuthor = (
                    <AuthorCarousel _this={_this} authors={authors} />
                )
            }


        }

       


        return (
            <CategorysDiv>
                {categoryAuthor}
            </CategorysDiv>
        )
    }
}
