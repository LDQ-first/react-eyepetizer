import React, { Component } from 'react'
import TabsDiv from '../../styled/Tabs.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import {Tabs as TabsUI, Tab} from 'material-ui/Tabs'
import Hot from '../../components/Hot/Hot.js'
import Categorys from '../../components/Categorys/Categorys.js'
import Pgcas from '../../components/Pgcas/Pgcas.js'
import Slider from 'material-ui/Slider'



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
            value: 0,
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        })

    }

    

    render() {
       
       const {value} = this.state

       const {hots, categorys, pgcas, _this} = this.props



        return (
            <TabsDiv>
               <TabsUI className="tabsui"
                    onChange={this.handleChange}
                    value={value}
                    >
                    <Tab label="热门" value={0} />
                    <Tab label="分类" value={1} />
                    <Tab label="作者" value={2} />
                </TabsUI>
                 {value === 0 && <Hot _this={_this} hots={hots} />}
                 {value === 1 && <Categorys _this={_this} categorys={categorys} />}
                 {value === 2 && <Pgcas _this={_this} pgcas={pgcas} />}
                <div className="end">
                    「 The End 」
                </div>
            </TabsDiv>
        )
    }
}
