import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    IndexDataSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import TopScreen from '../../components/TopScreen/TopScreen.js'
import VideoLists from '../../components/VideoLists/VideoLists.js'
import Download from '../../components/Download/Download.js'
import Footer from '../../components/Footer/Footer.js'
import GoToFeed from '../../components/GoToFeed/GoToFeed.js'
import Navigation from '../../components/Navigation/Navigation.js'

class Home extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            IndexData: PropTypes.object,
            getIndexData: PropTypes.func,
            getSearchData: PropTypes.func,
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            isShow: false
        }
    }

    
    componentWillMount() {
        const {getIndexData} = this.props
        getIndexData()
    }

    
    componentWillReceiveProps(nextProps) {
        
    }
    
    
    switchRoute(path) {
         const {history} = this.props
        history.push(path)
    }

    _isShowNav () {
        
        if(document.body.scrollTop > window.innerHeight) {
            this.setState({
                isShow: true
            })
        } else {
            this.setState({
                isShow: false
            })
        }
    }


    render() {
       
        const {IndexData, getSearchData, history} = this.props
        const {date, itemList} = IndexData
        const {isShow} = this.state

        return (
            <div className="index"
                onWheel={() => {this._isShowNav()}}
            >
                <TopScreen _this={this} getSearchData={getSearchData}/>
                <VideoLists date={date} itemList={itemList}/>
                <GoToFeed _this={this}/>
                <Download />
                <Navigation history={history} isShow={isShow}/>
                <Footer />
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