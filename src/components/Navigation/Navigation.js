import React, { Component } from 'react'
import NavigationDiv from '../../styled/Navigation.js'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import {searchArea} from '../../router/link.js'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'


export default class Navigation extends Component {
    static get propTypes() { 
        return { 
           _this: PropTypes.object,
           
        }
    }

    constructor (props) {
        super(props)
        this.state = {
            selectedIndex: 0,
        }
    }

   

    select (index) { 
        this.setState({
            selectedIndex: index
       })
    }



    render() {
       
       const {_this} = this.props
       const {selectedIndex} = this.state

        return (
            <NavigationDiv>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={selectedIndex}>
                    <BottomNavigationItem
                        label="首页"
                        icon={}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="发现"
                        icon={}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="关注"
                        icon={}
                        onClick={() => this.select(2)}
                    />
                    </BottomNavigation>
                </Paper>
            </NavigationDiv>
        )
    }
}
