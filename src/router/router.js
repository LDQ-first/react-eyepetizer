import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'react-router-redux'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'

import NotFound from 'bundle-loader?lazy&name=notFound!../views/NotFound/NotFound'
import Home from 'bundle-loader?lazy&name=Home!../views/Home/Home'
import Detail from 'bundle-loader?lazy&name=Detail!../views/Detail/Detail'
import Author from 'bundle-loader?lazy&name=Author!../views/Author/Author'
import SearchArea from 'bundle-loader?lazy&name=SearchArea!../views/SearchArea/SearchArea'
import Feed from 'bundle-loader?lazy&name=Feed!../views/Feed/Feed'

import Find from 'bundle-loader?lazy&name=Find!../views/Find/Find'
import Follow from 'bundle-loader?lazy&name=Follow!../views/Follow/Follow'
import Ranklist from 'bundle-loader?lazy&name=Ranklist!../views/Ranklist/Ranklist'


/*import NavMenu from './nav'*/


import createHistory from 'history/createHashHistory'


import {home, detail, author, searchArea, feed, find, ranklist, follow} from './link.js'

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
)

let open = false


const getRouter = () => (
    <ConnectedRouter history={createHistory()}>  
        <div className="routes">
           { /*<NavMenu></NavMenu>  */}
            <Switch>  
                <Route exact path={home} component={createComponent(Home)}/>
                <Route path={`${detail}/:id`} component={createComponent(Detail)}/>  
                <Route path={detail} component={createComponent(Detail)}/>         
                <Route path={`${author}/:id`} component={createComponent(Author)}/>         
                <Route path={author} component={createComponent(Author)}/>         
                <Route path={searchArea} component={createComponent(SearchArea)}/>         
                <Route path={`${feed}/:date`} component={createComponent(Feed)}/>         
                <Route path={feed} component={createComponent(Feed)}/>      

                <Route path={`${find}/:type`} component={createComponent(Find)}/>         
                <Route path={find} component={createComponent(Find)}/>         
                <Route path={follow} component={createComponent(Follow)}/>         
                <Route path={`${ranklist}/:type`} component={createComponent(Ranklist)}/>
                <Route path={ranklist} component={createComponent(Ranklist)}/>
                         
                <Route component={createComponent(NotFound)}/>
            </Switch>
        </div>
    </ConnectedRouter>
)
export default getRouter
