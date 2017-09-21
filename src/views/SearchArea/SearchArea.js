import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {
    detailsSelector,
    authorsSelector,
    searchListsSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Tags from '../../components/Tags/Tags.js'
import {detail as detailLink} from '../../router/link.js'
import Search from '../../components/Search/Search.js'
import GoToTop from '../../components/GoToTop/GoToTop.js'

class SearchArea extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            authors: PropTypes.obj.isRequired,
            details: PropTypes.object,
            searchLists: PropTypes.object,
            getAuthorData: PropTypes.func,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
            getSearchData: PropTypes.func,
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

    


    search (searchValue) {
        const {getSearchData} = this.props
        getSearchData(searchValue)
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
         let {searchLists} = this.props
         if( !searchLists &&localStorage.searchLists) {
             searchLists =  JSON.parse(localStorage.searchLists)
         }
       
        return (
            <div className="searchArea">
                <Search _this={this} searchLists={searchLists} />
                <GoToTop />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    authors: authorsSelector(state),
    details: detailsSelector(state),
    searchLists: searchListsSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(SearchArea))