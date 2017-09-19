import React, { Component } from 'react'
import DatePickerDiv from '../../styled/DatePicker.js'
import moment from 'moment'
import DatePicker from 'material-ui/DatePicker'
import {feed} from '../../router/link.js'
import ActionDateRange from 'material-ui/svg-icons/action/date-range'

export default class DatePickerCom extends Component {

   static get propTypes() { 
        return { 
            _this: PropTypes.object
        }
    }

     constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    handleChange = (event, date) => {
        const {_this} = this.props
        const formatDate = moment(date).format(`YYYYMMDD`)
        _this.switchRoute(`${feed}/${formatDate}`)
    }
    
    

    render() {
        const {_this} = this.props

        return (
            <DatePickerDiv >
                
                <DatePicker
                    className="picker"
                    hintText="选择日期"
                    onChange={this.handleChange}
                    style = {{
                        height: `36px`,
                        width: `120px`,
                        
                    }}
                    dialogContainerStyle = {{
                        top: `-40px`
                    }}
                >
                    <ActionDateRange />
                </DatePicker>
               
            </DatePickerDiv>
        )
    }
}
