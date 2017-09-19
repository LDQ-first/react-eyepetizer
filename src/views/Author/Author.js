import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {
    detailsSelector,
    authorsSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Tags from '../../components/Tags/Tags.js'
import {detail as detailLink} from '../../router/link.js'
import AuthorDiv from '../../styled/Author.js'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo.js'
import AuthorVideo from '../../components/AuthorVideo/AuthorVideo.js'
import ReturnIndex from '../../components/ReturnIndex/ReturnIndex.js'
import GoToTop from '../../components/GoToTop/GoToTop.js'

class Author extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            authors: PropTypes.obj.isRequired,
            details: PropTypes.object,
            getAuthorData: PropTypes.func,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
        }
    }

     constructor (props) {
        super(props)
        this.state = {
           
        }
    }
    
    componentWillMount() {
        const {getAuthorData, match} = this.props
        if(match.params.id) {
            getAuthorData(match.params.id)
        }
        
    }
    

    switchRoute(path, index) {
         const {history, authors} = this.props
         const {authorVideo} = authors
         if(index) {
           localStorage.itemList = JSON.stringify(authorVideo[index])
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
       
        const {match, details, authors} = this.props
        const {detail} = details
       
        return (
            <AuthorDiv >
                <AuthorInfo authorInfo={authors.authorInfo}/>
                <AuthorVideo authorVideo={authors.authorVideo} _this={this}/>
                <ReturnIndex/>
                <GoToTop />
            </AuthorDiv>
        )
    }
}


const mapStateToProps = (state) => ({
    authors: authorsSelector(state),
    details: detailsSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Author))