import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {
    detailsSelector,
    authorsSelector,
    searchListsSelector,

    hotsSelector,
    categorysSelector,
    pgcasSelector,

    
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Tags from '../../components/Tags/Tags.js'
import {detail as detailLink} from '../../router/link.js'
import Search from '../../components/Search/Search.js'
import GoToTop from '../../components/GoToTop/GoToTop.js'
import Navigation from '../../components/Navigation/Navigation.js'
import Header from '../../components/Header/Header.js'
import Tabs from '../../components/Tabs/Tabs.js'

class Find extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            authors: PropTypes.obj.isRequired,
            details: PropTypes.object,
            searchLists: PropTypes.object,

            hots: PropTypes.object,
            categorys: PropTypes.object,
            pgcas: PropTypes.object,

            getAuthorData: PropTypes.func,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
            getSearchData: PropTypes.func,

            getHotData: PropTypes.func,
            getCategoryData: PropTypes.func,
            getPgcaData: PropTypes.func,
            
        }
    }

     constructor (props) {
        super(props)
        this.state = {
           
        }
    }
    

     componentWillMount() {
        const {getHotData, getCategoryData, getPgcaData} = this.props
        getHotData()
            .then(() => {
                getCategoryData()
            })

    }
    

    switchRoute(path, item) {
         const {history} = this.props
         if(item) {
           localStorage.itemList = JSON.stringify(item)
        }
         history.push(path)
        
    }

     _clearSearchData() {
       const {getSearchData} = this.props
       localStorage.searchLists = ''
       getSearchData('')
   }


    getDetail (id) {
        const {getDetailData, getRelatedData, getRepliesData, match, history} = this.props
        if(id) {
            getRelatedData(id)
            getRepliesData(id)
        }
        getDetailData(id)
    }

    render() {
        const {hots, categorys, pgcas, history} = this.props


       
        return (
            <div className="find">
                 <Header _this={this} subtitle={'全部分类'} title={'Discover'} />
                 <Tabs _this={this} hots={hots} categorys={categorys} pgcas={pgcas} />
                 <Navigation history={history} isShow={true} index={1}/>
                <GoToTop />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    authors: authorsSelector(state),
    details: detailsSelector(state),
    searchLists: searchListsSelector(state),
    hots: hotsSelector(state),
    categorys: categorysSelector(state),
    pgcas: pgcasSelector(state),
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Find))