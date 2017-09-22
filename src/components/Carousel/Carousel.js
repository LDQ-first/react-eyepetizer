import React, { Component } from 'react'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import FlatButton from 'material-ui/FlatButton'
import CarouselDiv from '../../styled/Carousel.js'
import moment from 'moment'
import {detail} from '../../router/link.js'
import {formatDuration} from '../../utils'
import {defaultWidth} from '../../styled/Carousel.js'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'



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

    
    componentDidMount() {
        
        window.addEventListener('resize', () => {
            const {activeIndex} = this.state
            this._setContent(activeIndex)
        })
    }
    


    _setContent(index) {
        const {itemList} = this.props
        const {activeIndex} = this.state
        const width = this.itemList ? this.itemList.offsetWidth : 0

       if(index === itemList.length - 1) {
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
        const {itemList} = this.props
        const {activeIndex} = this.state
        let index = 0
        this.setState({
            dir
        })
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

    start(e) {
        e.stopPropagation()
         this.touchStart = e.targetTouches[0].clientX
         this.distance = 0
    }

    move(e) {
        e.stopPropagation()
         const touch = e.targetTouches[0]
         this.distance = touch.clientX - this.touchStart
         

    }

    end(e) {
        e.stopPropagation()
        if(this.distance < -20) {
             this._toggleContent('next')
         } if(this.distance > 20) {
             this._toggleContent('pre')
         }
    }




    render() {
        const {itemList, _this} = this.props
        const {activeIndex, left, activeTransfrom ,dir} = this.state


        let itemLists = null
        let activeItemLists = null
        let bullets = null
        if(itemList) {
            itemLists = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('itemList', {hide: activeIndex === index})}
                    ref={itemList => this.itemList = itemList}
                    style={{
                        left: `${defaultWidth * index}`,
                        background: `url(${list.videoImg}) no-repeat center/cover`
                    }}>
                        <h3 className="title">{list.title}</h3>
                        <div className="meta">#{list.category} / {formatDuration(list.duration)}</div>
                    </li>
                )
            })
            
            activeItemLists = itemList.map((list, index) => {
                return  (
                    <li key={index} className={classNames('activeItemList',
                             {active: activeIndex === index}, 
                             {'pre': dir === 'pre' && activeIndex === index},
                             {'next': dir === 'next' && activeIndex === index}
                    )}
                    style={{
                        background: `url(${list.videoImg}) no-repeat center/cover`
                    }}
                      onClick={() => {_this.switchRoute(`${detail}/${list.id}`, list)}}
                      
                      
                    >
                        <h3 className="title textOverflow">{list.title}</h3>
                        <div className="meta textOverflow"># {list.category} / {formatDuration(list.duration)}</div>
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

        return (
          <CarouselDiv >
             <button href="javascript:;" className="controlBtn pre" onClick={() => {this._toggleContent('pre')}}>
                <HardwareKeyboardArrowLeft className="controlBtn-icon"/>
             </button>
            { 
                itemList 
                ? <ul className="itemLists" 
                    style={{
                        left: `${left}`, 
                        width: `calc(50% * ${itemList.length + 2} )`
                    }}>
                    {itemLists[itemLists.length - 1] }
                    {itemLists }
                    {itemLists[0] }
                  </ul> 
                  : null 
            }
             <ul className="activeItemLists" 
                 onTouchStart={(e) => {this.start(e)}}
                 onTouchMove={(e) => {this.move(e)}}
                 onTouchEnd={(e) => {this.end(e)}}
                 >
                {activeItemLists ? activeItemLists: null }
             </ul>
              <button href="javascript:;" className="controlBtn next" onClick={() => {this._toggleContent('next')}}>
                <HardwareKeyboardArrowRight className="controlBtn-icon"/>
              </button>
              <ul className="bullets" ref={bullets => this.bullets = bullets}>
                  {bullets}
              </ul>
          </CarouselDiv>
        )
    }
}
