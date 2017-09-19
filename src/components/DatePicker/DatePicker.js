import React, { Component } from 'react'
import DatePickerDiv from '../../styled/DatePicker.js'
import moment from 'moment'
import * as DatePickerUI from 'material-ui/DatePicker'

export default class DatePicker extends Component {

   static get propTypes() { 
        return { 
            _this: PropTypes.object
        }
    }

     constructor(props) {
        super(props)
        this.state = {
            controlledDate: null,
        }
    }

    handleChange = (event, date) => {
        this.setState({
            controlledDate: date,
        })
    }

    render() {
        const {_this} = this.props
        const date = moment(new Date() - 24 * 60 * 60 * 1000).format(`YYYYMMDD`)
        


        return (
            <DatePickerDiv onClick={() => {_this.switchRoute(`${feed}/${date}`)}}>
                <DatePickerUI
                    hintText="Controlled Date Input"
                    value={this.state.controlledDate}
                    onChange={this.handleChange}
                />
            </DatePickerDiv>
        )
    }
}
