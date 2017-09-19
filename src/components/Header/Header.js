import React, { Component } from 'react'
import HeaderDiv from '../../styled/Header.js'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import {searchArea} from '../../router/link.js'



export default class Header extends Component {
    static get propTypes() { 
        return { 
           _this: PropTypes.object,
           
        }
    }


    render() {
       
       const {_this} = this.props

        return (
            <HeaderDiv>
               <h2 className="subtitle"></h2>
               <h1 className="title"></h1>
               <IconButton 
                    style={{
                        width: 'atuo',
                        height: '36px',
                        padding: '0',
                        margin: '0 0.5rem',
                        verticalAlign: `super`
                    }}
                    iconStyle = {{
                        color: `#FFF`
                    }}
                    onClick={() => {_this._clearSearchData();_this.switchRoute(`${searchArea}`);}}
                    className="search" >
                    <ActionSearch />
                </IconButton>
            </HeaderDiv>
        )
    }
}
