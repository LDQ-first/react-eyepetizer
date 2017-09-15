import React, { Component } from 'react'
/*import {increment, decrement, reset} from '../../redux/actions/counter'*/
import * as counterActions from '../../redux/actions/counter'
import {connect} from 'react-redux'
import {Container} from '../../styled'
import Button from '../../styled/button'
import PropTypes from 'prop-types'
import {
    countSelector
} from '../../selector/counter'


class Counter extends Component {
    static get propTypes() { 
        return { 
            increment: PropTypes.func.isRequired, 
            decrement: PropTypes.func.isRequired,
            reset: PropTypes.func.isRequired,
            count: PropTypes.number.isRequired
        }
    }

    render() {
        const {increment, decrement, reset, count } = this.props
        console.log(this.props)
        return (
            <Container>
                <div>当前计数为{count}(显示redux计数)</div>
                <Button className="btn" onClick={() => {
                    increment()
                }}>自增
                </Button>
                <Button className="btn" onClick={() => {
                    decrement()
                }}>自减
                </Button>
                <Button className="btn" onClick={() => {
                    reset()
                }}>重置
                </Button>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    count: countSelector(state)
})


export default connect(
    mapStateToProps,
    counterActions
)(Counter)