import React, { Component } from 'react'
import HotDiv from '../../styled/Hot.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import AuthorSingle from '../../components/AuthorSingle/AuthorSingle.js'


export default class Hot extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            hots: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    

    render() {
       
     
       const {hots, _this} = this.props

        let top = null
        let text = null
        let others = null
        if(hots) {
            console.log('hots: ', hots)
            text = hots.text
            
            if(hots.videoList) {

           
            top = hots.videoList[0].map((item, index) => {
                return (
                    <li key={index}  className="video">
                        <AuthorSingle item={item} _this={_this}/>
                    </li>
                )
            })


            others = hots.videoList.map((list, index) => {
                if(index === 0) return
                console.log(index)
                let lists = null


                lists = list.map((item, index) => {
                    return (
                         <li key={index}  className="video">
                            <AuthorSingle item={item} _this={_this}/>
                        </li>
                    )
                })

                return (
                    <ul  key={index}  className="videos">
                        <header className="header">
                            <h2 className="title">
                                { 
                                    text ? text[index] : null
                                }
                            </h2>
                        </header>
                        {lists}
                    </ul>
                )

            })
             }

        }


        return (
            <HotDiv>
                <div className="top">
                    <header className="header">
                        <h2 className="title">
                            { 
                                text ? text[0] : null
                            }
                        </h2>
                    </header>
                    <ul className="videos" > 
                        {top}
                    </ul>
                </div>
                <div className="ranklist">
                    
                </div>
                <div className="others">
                    {others}
                </div>
            </HotDiv>
        )
    }
}
