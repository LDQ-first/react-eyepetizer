import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {
    detailsSelector,
    authorsSelector,
    searchListsSelector,

    weeksSelector,
    monthsSelector,
    allsSelector,
    
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Tags from '../../components/Tags/Tags.js'
import {detail as detailLink} from '../../router/link.js'
import Search from '../../components/Search/Search.js'
import GoToTop from '../../components/GoToTop/GoToTop.js'
import ReturnIndex from '../../components/ReturnIndex/ReturnIndex.js'
import {Tabs as TabsUI, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import VideoArea from '../../components/VideoArea/VideoArea.js'
import {ranklist} from '../../router/link.js'


class Ranklist extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            authors: PropTypes.obj.isRequired,
            details: PropTypes.object,
            searchLists: PropTypes.object,

            weeks: PropTypes.array,
            months: PropTypes.array,
            alls: PropTypes.array,

            getAuthorData: PropTypes.func,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
            getSearchData: PropTypes.func,

            getWeekData: PropTypes.func,
            getMonthData: PropTypes.func,
            getAllData: PropTypes.func,

           
        }
    }

      constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0,
        }
    }

    handleChange = (index) => {
        this.setState({
            slideIndex: index,
        })
        let type = ''
        switch(index) {
            case 0: 
                type = 'week'
                break
            case 1:
                type = 'month'
                break
            case 2:
                type = 'all'
                break
        }
        this.switchRoute(`${ranklist}/${type}`)
     
    }
    
    
    componentWillMount() {
        const {match, getWeekData, getMonthData, getAllData} = this.props
        const type = match.params.type
        console.log(type)
        let index = 0
        switch(type) {
            case 'week': 
                index = 0
                break
            case 'month':
                index = 1
                break
            case 'all':
                index = 2
                break
        }
        this.setState({
            slideIndex: index
        })
        getWeekData()
    }
    
    

    switchRoute(path, item) {
         const {history} = this.props
         if(item) {
           localStorage.itemList = JSON.stringify(item)
        }
         history.push(path)
        
    }

    


    getDetail (id) {
        const {getDetailData, getRelatedData, getRepliesData, match} = this.props
        if(id) {
            getRelatedData(id)
            getRepliesData(id)
        }
        getDetailData(id)
    }

    render() {
        const {weeks, months, alls } = this.props
        const {slideIndex} = this.state

        let weekVideo = []
        if(weeks) {
            console.log('weeks: ', weeks )
            weekVideo = weeks.videos
        }

        if(months) {
            console.log('months: ', months)
        }

        if(alls) {
            console.log('alls: ', alls)
        }



       
        return (
            <div className="ranklist">
                <TabsUI
                    onChange={this.handleChange}
                    value={slideIndex}
                    >
                    <Tab label="周排行" value={0} />
                    <Tab label="月排行" value={1} />
                    <Tab label="总排行" value={2} />
                </TabsUI>
                <SwipeableViews
                    index={slideIndex}
                    onChangeIndex={this.handleChange}
                    >
                    <VideoArea authorVideo={weekVideo} _this={this}/>
                    <div>1</div>
                    <div>2</div>
                </SwipeableViews>
                <ReturnIndex />
                <GoToTop />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    authors: authorsSelector(state),
    details: detailsSelector(state),
    searchLists: searchListsSelector(state),
    
    weeks: weeksSelector(state),
    months: monthsSelector(state),
    alls: allsSelector(state),

})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Ranklist))