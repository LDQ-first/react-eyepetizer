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
            controlledDate: null,
        }
    }

    handleChange = (event, date) => {
        this.setState({
            controlledDate: date,
        })
    }

    
    componentWillUpdate(nextProps, nextState) {
        const {controlledDate} = nextState
        console.log(controlledDate)
        if(controlledDate) {
            const date = moment(controlledDate).format(`YYYYMMDD`)
            console.log(date)
        }
        
    }
    
    

    render() {
        const {_this} = this.props
        const date = moment(new Date() - 24 * 60 * 60 * 1000).format(`YYYYMMDD`)
       


        return (
            <DatePickerDiv >
                
                <DatePicker
                    className="picker"
                    hintText="选择日期"
                    value={this.state.controlledDate}
                    onChange={this.handleChange}
                    onClick={() => {/*_this.switchRoute(`${feed}/${date}`)*/}}
                    style = {{
                        height: `36px`,
                        width: `120px`,
                        
                    }}
                    textFieldStyle = {{
                        textAlign: `center`,
                        cursor: `pointer`,
                        color: `#FFF`
                    }}
                >
                    <ActionDateRange />
                </DatePicker>
               
            </DatePickerDiv>
        )
    }
}
