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
    
    
    _toggleContent(dir) {
        console.log(dir)
    //    console.log(this.itemList)
       const {itemList} = this.props
        const {activeIndex, left} = this.state
        const width = this.itemList.offsetWidth
        console.log(activeIndex, width)
       
        

        if(dir === 'next' && activeIndex === itemList.length - 2) {
            this.setState({
                activeIndex: activeIndex + 1,
                left: left
            })
        } else if(dir === 'next' && activeIndex === itemList.length - 1) {
            this.setState({
                activeIndex: 0,
                left: 0
            })
        }  else if (dir === 'next') {
             this.setState({
                  activeIndex: activeIndex + 1,
                  left: left - width
            })
        }  else if(dir === 'pre' && activeIndex === itemList.length - 1) {
             this.setState({
                activeIndex: activeIndex - 1,
                left: left
            })
        } else if(dir === 'pre' && activeIndex === 0) {
             this.setState({
                activeIndex: itemList.length - 1,
                left: - (itemList.length - 2 ) * width
            })
        } else if(dir === 'pre') {
            this.setState({
                activeIndex: activeIndex - 1,
                left: left + width
            })
        }
        
    }


    render() {
        const {itemList, _this} = this.props
        const {activeIndex, left} = this.state
      //  console.log(detail)




        let itemLists = null
        let activeItemLists = null
        if(itemList) {
          //  console.log('itemList: ', itemList)
            itemLists = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('itemList', {hide: activeIndex === index})}
                    ref={itemList => this.itemList = itemList}
                    style={{left: `${defaultWidth * index}`}}>
                        <div className="title">{index} {list.title}</div>
                        <div className="meta">#{list.category} / {formatDuration(list.duration)}</div>
                    </li>
                )
            })
            
            activeItemLists = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('activeItemList', {active: activeIndex === index})}>
                        <div className="title">{index} {list.title}</div>
                        <div className="meta">#{list.category} / {formatDuration(list.duration)}</div>
                    </li>
                )
            })

        }

       // console.log(itemLists)

        return (
          <CarouselDiv>
             <Button href="javascript:;" className="controlBtn pre" onClick={() => {this._toggleContent('pre')}}>
                <KeyboardArrowLeftIcon className="controlBtn-icon"/>
             </Button>
             <ul className="itemLists" style={{left: `${left}`}}>
                {itemLists ? itemLists[itemLists.length - 1] : null}
                {itemLists ? itemLists: null }
                {itemLists ? itemLists[0] : null}
             </ul>
             <ul className="activeItemLists">
                {activeItemLists ? activeItemLists: null }
             </ul>
              <Button href="javascript:;" className="controlBtn next" onClick={() => {this._toggleContent('next')}}>
                <KeyboardArrowRightIcon className="controlBtn-icon"/>
              </Button>

          </CarouselDiv>
        )
    }
}
