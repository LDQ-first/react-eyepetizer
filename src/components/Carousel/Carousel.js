import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'
import CarouselDiv from '../../styled/Carousel.js'
import moment from 'moment'
import {detail} from '../../router/link.js'
import {formatDuration} from '../../utils'
import {defaultWidth} from '../../styled/Carousel.js'
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight'



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
           activeIndex: 0,
           left: 0
        }
    }


    
    componentWillMount() {
       
    }

    componentWillReceiveProps(nextProps) {

    }

    
    componentDidMount() {
 
    }
    

    _setContent(index) {
        const {itemList} = this.props
        const {activeIndex, left} = this.state
        const width = this.itemList.offsetWidth

        if(index === activeIndex) {
            return
        } else if(index === itemList.length - 1) {
            this.setState({
                activeIndex: index ,
                left: - (itemList.length - 2) * width
            })
        }  else {
            this.setState({
                activeIndex: index ,
                left:  - index * width 
            })
        }  
    }


   
    
    _toggleContent(dir) {
        console.log(dir)
        const {itemList} = this.props
        const {activeIndex} = this.state
        let index = 0
        if(dir === 'next' && activeIndex === itemList.length - 1) {
            index = 0
        } else if (dir === 'next') {
            index = activeIndex + 1
        } else if (dir === 'pre' && activeIndex === 0) {
            index = itemList.length - 1
        } else if (dir === 'pre') {
            index = activeIndex - 1
        }
        this._setContent(index)
          
    }


    render() {
        const {itemList, _this} = this.props
        const {activeIndex, left} = this.state
      //  console.log(detail)




        let itemLists = null
        let activeItemLists = null
        let bullets = null
        if(itemList) {
          //  console.log('itemList: ', itemList)
            itemLists = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('itemList', {hide: activeIndex === index})}
                    ref={itemList => this.itemList = itemList}
                    style={{
                        left: `${defaultWidth * index}`,
                        background: `url(${list.videoImg}) no-repeat center/cover`
                    }}>
                        <div className="title">{index} {list.title}</div>
                        <div className="meta">#{list.category} / {formatDuration(list.duration)}</div>
                    </li>
                )
            })
            
            activeItemLists = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('activeItemList', {active: activeIndex === index})}
                    style={{
                        background: `url(${list.videoImg}) no-repeat center/cover`
                    }}>
                        <div className="title">{index} {list.title}</div>
                        <div className="meta">#{list.category} / {formatDuration(list.duration)}</div>
                    </li>
                )
            })

            bullets = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('bullet', {active: activeIndex === index})}
                    onClick={() => {this._setContent(index)}}></li>
                )
            })
        }

       // console.log(itemLists)

        return (
          <CarouselDiv >
             <Button href="javascript:;" className="controlBtn pre" onClick={() => {this._toggleContent('pre')}}>
                <KeyboardArrowLeftIcon className="controlBtn-icon"/>
             </Button>
            { itemList ? <ul className="itemLists" style={{left: `${left}`, width: `calc(50% * ${itemList.length + 1} )`}}>
                {itemLists[itemLists.length - 1] }
                {itemLists }
                {itemLists[0] }
             </ul> : null }
             <ul className="activeItemLists">
                {activeItemLists ? activeItemLists: null }
             </ul>
              <Button href="javascript:;" className="controlBtn next" onClick={() => {this._toggleContent('next')}}>
                <KeyboardArrowRightIcon className="controlBtn-icon"/>
              </Button>
              <ul className="bullets" ref={bullets => this.bullets = bullets}>
                  {bullets}
              </ul>
          </CarouselDiv>
        )
    }
}
