import React, { Component } from 'react'
import TagsDiv from '../../styled/Tags.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'


export default class Tags extends Component {
    static get propTypes() { 
        return { 
            itemList: PropTypes.array,
            _this: PropTypes.object
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
       


        return (
            <TagsDiv>
               
            </TagsDiv>
        )
    }
}
