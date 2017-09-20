import React, { Component } from 'react'
import CategorysDiv from '../../styled/Categorys.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'



export default class Categorys extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            categorys: PropTypes.object
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
       
     
       const {categorys} = this.props


        if(categorys) {
            console.log('categorys: ', categorys)
        }

       


        return (
            <CategorysDiv>
              
            </CategorysDiv>
        )
    }
}
