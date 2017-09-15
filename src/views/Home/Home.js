import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    IndexDataSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Button from '../../styled/button'



class Home extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            IndexData: PropTypes.object,
            getIndexData: PropTypes.func,
        }
    }

    
    componentWillMount() {
        const {getIndexData} = this.props
        getIndexData()
    }
    
    switchRoute(path) {
         const {history} = this.props
        history.push(path)
    }


    render() {
       


        return (
            <div>
                home
                <div>
                    <Button  className="btn" onClick={() => {
                        this.switchRoute('/detail')
                    }}>跳转到 /detail</Button >
                    <Button  className="btn" onClick={() => {
                        this.switchRoute('/detail/48921')
                    }}>跳转到 /detai/48921</Button >
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    IndexData: IndexDataSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Home))