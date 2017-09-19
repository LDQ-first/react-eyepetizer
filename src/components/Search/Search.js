import React, { Component } from 'react'
import SearchDiv from '../../styled/Search.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel'
import FlatButton from 'material-ui/FlatButton'
import {home} from '../../router/link.js'
import {formatDuration} from '../../utils'

export default class Search extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            searchLists: PropTypes.object
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            isShowResult: false,
            hotWords: [   '脱口秀', '城会玩', '666', '笑cry', '漫威',
                            '清新', '匠心', 'VR', '心理学', '舞蹈', 
                            '品牌广告', '粉丝自制', '电影相关', '萝莉',
                                '魔性', '第一视角', '教程', '毕业设计', 
                                '奥斯卡', '燃', '冰与火之歌', '温情',
                                '线下campaign', '公益'
                     ],
        }
    }

    
    componentDidMount() {
        this._searchInput.value = ''
    }
    

    _enterSearch (e) {
        if(e.keyCode === 13) {
            this._search()
        }
    }

    _wordSearch (value) {
        this._search(value)
    }

     _search (value) {
        const {_this} = this.props
        const search = this._searchInput
        let searchValue = search.value
        if(value) {
          /*  console.log(value)*/
            searchValue = value
        }
        /*console.log(searchValue)*/
        _this.search(searchValue)

    }

    _cancel () {

    }

    _clearInput () {
        this._searchInput.value = ''
    }

    

    render() {
       const {_this, searchLists} = this.props
       const {hotWords, isShowResult} = this.state
       
       const hotWord = hotWords.map((word, index) => {
           return (
               <li key={index} className="hotWord"
               onClick={() => {this._wordSearch(word)}}>
                    <FlatButton
                         style={{
                            width: 'auto',
                            height: '36px',
                            margin: '0',
                            padding: '0 10px',
                            verticalAlign: `super`,
                            color: `#FFF`
                        }}
                    >
                        {word}
                    </FlatButton>
               </li>
           )
       })


       let searchResult = null 
       let searchResultAuthors = null 
       let searchResultVideos = null 

       if(searchLists && searchLists.Authors && searchLists.Videos) {
           console.log('searchLists', searchLists)        
           const Authors = searchLists.Authors
           const Videos = searchLists.Videos
           console.log('Authors', Authors)
           console.log('Videos', Videos)




           if(Authors) {
                searchResultAuthors = Authors.map((author, index) => {

                    const itemList = author.itemList

                    const videoLists = itemList.map((item, index) => {
                        return (
                            <li key={index} className="video"
                                onClick={() => {}}
                            >
                                <img src={item.videoImg} />
                                <div className="videoDes">
                                    <h3 className="name">{item.title}</h3>
                                    <div className="meta"># {item.category} / {formatDuration(item.duration)}</div>
                                </div>
                            </li>
                        )
                    })



                    return (
                        <li key={index} className="author" onClick={() => {}}>
                            <img className="icon" src={author.icon} />
                            <div className="des">
                                <h2 className="title">{author.title}</h2>
                                <p className="description">{author.description}</p>
                            </div>
                            {   
                                videoLists ?
                                <ul className="authorVideos">
                                  {videoLists}
                                </ul>
                                : null
                           }
                        </li>
                    )
                })
           }

           if(Videos) {
                searchResultVideos = Videos.map((video, index) => {
                    return (
                        <li key={index} className="video" onClick={() => {}}>
                                
                        </li>
                    )
                })
           }

           searchResult = (
               <div className="searchResult">
                  {
                      searchResultAuthors 
                       ? <ul className="authors">
                         {searchResultAuthors}
                         </ul> 
                      : null
                  }
                  {
                      searchResultVideos 
                      ? <ul className="videos">
                         {searchResultVideos}
                        </ul> 
                      : null
                   }
               </div>
           )
       }
       

      
       

        return (
            <SearchDiv>
                <header className="header">
                     <div className="content">
                     <IconButton 
                        style={{
                            width: '32px',
                            height: '32px',
                            marginLeft: '10px',
                            padding: '0',
                            verticalAlign: `super`,
                        }}
                        iconStyle = {{
                            color: `#FFF`
                        }}
                        onClick={() => {this._search()}}
                        className="searchBtn" >
                        <ActionSearch />
                     </IconButton>
                     <span className="searchArea">
                        <input type="text" placeholder="帮你找到感兴趣的视频" className="searchInput"
                        ref={input => this._searchInput = input}
                        onKeyDown={(e) => {this._enterSearch(e)}}
                        />
                     </span>
                     <IconButton 
                        style={{
                            width: '32px',
                            height: '32px',
                            padding: '0',
                            verticalAlign: `super`,
                        }}
                        iconStyle = {{
                            color: `#FFF`
                        }}
                        onClick={() => {this._clearInput()}}
                        className="clearBtn" >
                        <NavigationCancel/>
                     </IconButton>
                     <button className="cancelBtn"
                     onClick={() => {_this.switchRoute(`${home}`)}}
                     >取消</button>
                     </div>
                </header>
                <article className="main">
                    { 
                        searchResult 
                        ? <section className="result">
                             <p className="resultNum">共有 {searchLists.count}个搜索结果</p>

                          </section>
                        : <section className="hotWordArea">
                             <aside className="tipArea">
                                 <p className="tip">输入标题或描述中的关键词找到更多视频</p>
                             </aside>
                             <h2 className="title">- 热门搜索词 -</h2>
                             <ul className="hotWords">
                                 {hotWord}
                             </ul>
                          </section>
                    }
                </article>
            </SearchDiv>
        )
    }
}
