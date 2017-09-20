import React, { Component } from 'react'
import HotDiv from '../../styled/Hot.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'



export default class Hot extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            hots: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    

    render() {
       
     
       const {hots} = this.props

        if(hots) {
            console.log('hots: ', hots)
        }


        return (
            <HotDiv>
              
            </HotDiv>
        )
    }
}
