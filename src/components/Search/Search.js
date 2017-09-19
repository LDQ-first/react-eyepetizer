import React, { Component } from 'react'
import SearchDiv from '../../styled/Search.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'


export default class Search extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object
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

    _enterSearch () {
        if(e.keyCode === 13) {
            this._search()
        }
    }

    _wordSearch (value) {
        this._search(value)
    }

     _search (value) {
        const search = this._searchInput
        let searchValue = search.value
        if(value) {
            console.log(value)
            searchValue = value
        }
        console.log(searchValue)


    }

    _cancel () {

    }

    

    render() {
       const {_this} = this.props
       const {hotWords} = this.state
       
       const hotWord = hotWords.map((word, index) => {
           return (
               <li key={index} className="hotWord"
               onClick={() => {this._wordSearch(word)}}>
                    {word}
               </li>
           )
       })
       

      
       

        return (
            <SearchDiv>
                <header className="header">
                     <IconButton 
                        style={{
                            width: 'atuo',
                            height: '36px',
                            padding: '0',
                            margin: '0 0.5rem',
                            verticalAlign: `super`,
                            background: `rgba(255, 255, 255, 0.15)`
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
                        ref={input = this._searchInput = input}
                        onKeyDown={(e) => {this._enterSearch(e)}}
                        />
                     </span>
                     <button className="cancelBtn"
                     onClick={() => {this._cancel()}}
                     >取消</button>
                </header>
                <article className="main">
                    { 
                        isShowResult 
                        ? <section className="result">
                             <p className="resultNum">共有 个搜索结果</p>
                          </section>
                        : <section className="hotWordArea">
                             <aside className="tipArea">
                                 <p className="tip">输入标题或描述中的关键词找到更多视频</p>
                             </aside>
                             <h2>- 热门搜索词 -</h2>
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
