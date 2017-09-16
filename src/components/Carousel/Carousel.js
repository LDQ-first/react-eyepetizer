import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import CarouselDiv from '../../styled/Carousel.js'
import moment from 'moment'
import {detail} from '../../router/link.js'
import {formatDuration} from '../../utils'

export default class Carousel extends Component {
    static get propTypes() { 
        return { 
            itemList: PropTypes.array,
            _this: PropTypes.object
        }
    }


    constructor (props) {
        super(props)
        this.state = {
           
        }
    }


    
    componentWillMount() {
       
    }
    

    render() {
        const {itemList, _this} = this.props
        console.log(detail)
        let itemLists = null
        if(itemList) {
            console.log('itemList: ', itemList)
            itemLists = itemList.map((itemList, index) => {
                return (
                    <li key={index} className="itemList">
                        <div className="title">{itemList.title}</div>
                        <div className="meta">#{itemList.category} / {formatDuration(itemList.duration)}</div>
                    </li>
                )
            })
        }

        console.log(itemLists)

        return (
          <CarouselDiv>
             <ul className="itemLists">
                {itemLists ? itemLists: null }
             </ul>
          </CarouselDiv>
        )
    }
}
