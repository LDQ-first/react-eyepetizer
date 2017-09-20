import React, { Component } from 'react'
import PgcasDiv from '../../styled/Pgcas.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import AuthorLeftInfo from '../../components/AuthorLeftInfo/AuthorLeftInfo.js'
import AuthorCarousel from '../../components/AuthorCarousel/AuthorCarousel.js'

export default class Pgcas extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            pgcas: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    

    render() {
       
     
       const {pgcas, _this} = this.props

        
        let authors = null
        if(pgcas) {
            console.log('pgcas: ', pgcas)
            const {text} = pgcas
            const {authorList }= pgcas
           
            if(text && authorList) {
               authors = text.map((item, index) => {  
                    const authorTitle = (
                        <h2 className="title">
                            {item}
                        </h2>
                    )

                 let carouselIndex = null

                for( let author of authorList[index]) {
                    if(author.itemList && author.itemList.length) {
                            carouselIndex = index
                            break;
                      }  
                    }
                 
                 let authorContent = null
                 if(carouselIndex) {
                     authorContent = (
                         <AuthorCarousel authors={authorList[index]} _this={_this}/>
                     )
                 } else {
                     authorContent = authorList[index].map((author, i) => {
                         return (
                             <AuthorLeftInfo key={i} authorInfo={author} _this={_this}/>
                         )
                     })
                 }


                 return (
                     <div key={index} className="authors">
                         {authorTitle}
                         {authorContent}
                     </div>
                 )


                })

                


            }
        }


        return (
            <PgcasDiv>
              {authors}
            </PgcasDiv>
        )
    }
}
