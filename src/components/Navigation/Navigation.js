import React, { Component } from 'react'
import NavigationDiv from '../../styled/Navigation.js'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import ActionChangeHistory from 'material-ui/svg-icons/action/change-history'
import ToggleRadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import {home, find, follow} from '../../router/link.js'



export default class Navigation extends Component {
    static get propTypes() { 
        return { 
           _this: PropTypes.object,
           history: PropTypes.object,
           isShow: PropTypes.bool,
           index: PropTypes.number
        }
    }

    constructor (props) {
        super(props)
        const {index} = props

        this.state = {
            selectedIndex: index || 0,
            isShow: false
        }
    }



     switchRoute(path) {
        const {history} = this.props
        history.push(path)
    }

    select (index, path)  {
        this.setState({
            selectedIndex: index
        })
        this.switchRoute(path)
    }



    render() {
       
       const {_this, isShow} = this.props
       const {selectedIndex } = this.state


        return (
            <NavigationDiv 
                style={{
                        display: isShow ? `block` : `none`
                    }}
                >
                <Paper zDepth={1} >
                    <BottomNavigation selectedIndex={selectedIndex}>
                        <BottomNavigationItem
                            label="首页"
                            icon={<ActionChangeHistory />}
                            onClick={() => this.select(0, `${home}`)}
                        />
                        <BottomNavigationItem
                            label="发现"
                            icon={<ToggleRadioButtonUnchecked />}
                            onClick={() => this.select(1, `${find}/hot`)}
                        />
                        <BottomNavigationItem
                            label="关注"
                            icon={<ToggleStar />}
                            onClick={() => this.select(2, `${follow}`)}
                        />
                    </BottomNavigation>
                </Paper>
            </NavigationDiv>
        )
    }
}
