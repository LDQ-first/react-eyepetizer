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

     constructor (props) {
        super(props)
        this.state = {
           
        }
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
        const {weeks, months, alls} = this.props

        if(weeks) {
            console.log('weeks: ', weeks )
        }

        if(months) {
            console.log('months: ', months)
        }

        if(alls) {
            console.log('alls: ', alls)
        }



       
        return (
            <div className="ranklist">
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