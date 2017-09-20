import React, { Component } from 'react'
import TabsDiv from '../../styled/Tabs.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import {Tabs as TabsUI, Tab} from 'material-ui/Tabs'
import Hot from '../../components/Hot/Hot.js'
import Categorys from '../../components/Categorys/Categorys.js'
import Pgcas from '../../components/Pgcas/Pgcas.js'
import Slider from 'material-ui/Slider'
import {find} from '../../router/link.js'


export default class Tabs extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            hots: PropTypes.object,
            categorys: PropTypes.object,
            pgcas: PropTypes.object,
            match: PropTypes.obj.isRequired,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    handleChange = (value) => {
        const { _this} = this.props
        this.setState({
            value: value,
        })
        let type = ''
        switch(value) {
            case 0: 
                type = 'hot'
                break
            case 1:
                type = 'category'
                break
            case 2:
                type = 'pgca'
                break
        }
        _this.switchRoute(`${find}/${type}`)
    }

    componentWillMount() {
        const {match} = this.props
        
        if(match) {
            const type = match.params.type
            let index = 0
            switch(type) {
                case 'hot': 
                    index = 0    
                    break
                case 'category':
                    index = 1 
                    break
                case 'pgca':
                    index = 2
                    break
            }
            this.setState({
                value: index
            })
        }
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
