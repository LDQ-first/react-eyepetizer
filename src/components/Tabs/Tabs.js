import React, { Component } from 'react'
import TabsDiv from '../../styled/Tabs.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import {Tabs as TabsUI, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Hot from '../../components/Hot/Hot.js'
import Categorys from '../../components/Categorys/Categorys.js'
import Pgcas from '../../components/Pgcas/Pgcas.js'

export default class Tabs extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            hots: PropTypes.object,
            categorys: PropTypes.object,
            pgcas: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0,
        }
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        })

    }

    

    render() {
       
       const {slideIndex} = this.state

       const {hots, categorys, pgcas, _this} = this.props



        return (
            <TabsDiv>
               <TabsUI
                    onChange={this.handleChange}
                    value={slideIndex}
                    >
                    <Tab label="热门" value={0} />
                    <Tab label="分类" value={1} />
                    <Tab label="作者" value={2} />
                </TabsUI>
                <SwipeableViews
                    index={slideIndex}
                    onChangeIndex={this.handleChange}
                    >
                    <Hot _this={_this} hots={hots} />
                    <Categorys _this={_this} categorys={categorys} />
                    <Pgcas _this={_this} pgcas={pgcas} />
                </SwipeableViews>
                <div className="end">
                    「 The End 」
                </div>
            </TabsDiv>
        )
    }
}
