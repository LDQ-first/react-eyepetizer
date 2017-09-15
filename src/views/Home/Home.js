import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    IndexDataSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'




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
    


    render() {
        const {history} = this.props


        return (
            <div>
                home

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