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
import TopScreen from '../../components/TopScreen/TopScreen.js'
import VideoLists from '../../components/VideoLists/VideoLists.js'
import Download from '../../components/Download/Download.js'
import Footer from '../../components/Footer/Footer.js'


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

    
    componentWillReceiveProps(nextProps) {
        
    }
    
    
    switchRoute(path) {
         const {history} = this.props
        history.push(path)
    }


    render() {
       
        const {IndexData} = this.props
        const {date, itemList} = IndexData
        /*if(date) {
            console.log('date: ', date)
        }
        if(itemList) {
            console.log('itemList: ', itemList)
        }*/
        
    

        return (
            <div className="index">
                {/*home
                <div>
                    <Button  className="btn" onClick={() => {
                        this.switchRoute('/detail')
                    }}>跳转到 /detail</Button >
                    <Button  className="btn" onClick={() => {
                        this.switchRoute('/detail/48921')
                    }}>跳转到 /detai/48921</Button >
                </div>*/}
                <TopScreen />
                <VideoLists date={date} itemList={itemList}/>
                <Download />
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