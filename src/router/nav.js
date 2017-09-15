import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Nav from '../styled/nav'

import menu from '../../static/img/menu.svg'
import logo from '../../static/img/favicon.ico'

import * as navActions from '../redux/actions/nav'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { openSelector } from '../selector/nav'

import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import BottomNavLink from '../styled/BottomNavLink'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'

import { counter} from './link.js'


class NavMenu extends Component {
    static get propTypes() { 
        return { 
            open: PropTypes.bool.isRequired, 
            toggleMenu: PropTypes.func.isRequired
        }
    }
    constructor (props) {
        super(props)
        this.state = {
           
        }
        this.navLists = [{
                to: counter,
                primary: 'Counter',
                secondary: '',
                icon: <FolderIcon className="list-icon"/>
            }]
    }

    



    render() {
        const { open,toggleMenu } = this.props
        

        const navList = this.navLists.map((list, index) => {
            return (
                 <ListItem  key={index} button className="menu-item">
                    <Avatar>
                        {list.icon}
                    </Avatar>
                    <Link to={list.to}>
                        <ListItemText primary={list.primary} secondary="" />
                    </Link>
                </ListItem>
            )
        })


        return (
            <Nav open={open}>
                <div className="control">
                     <Button color="contrast" className="logo">
                        <BottomNavLink  to="/">
                            <img src={logo} alt="React" title="React"/>
                        </BottomNavLink>
                    </Button>
                    <IconButton className="menu-svg" color="contrast" aria-label="Menu" 
                        onClick={() => {toggleMenu()}}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <List className="menu-list" onClick={() => {toggleMenu()}}>  
                    {navList}
                </List>
            </Nav>
        )
    }
}


const mapStateToProps = (state) => ({
    open: openSelector(state)
})


export default connect(
    mapStateToProps,
    navActions
)(NavMenu)