import React, { Component } from 'react'
import PgcasDiv from '../../styled/Pgcas.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'



export default class Pgcas extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            pgcas: PropTypes.object,
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    

    render() {
       
     
       const {pgcas} = this.props

        if(pgcas) {
            console.log('pgcas: ', pgcas)
        }


        return (
            <PgcasDiv>
              
            </PgcasDiv>
        )
    }
}