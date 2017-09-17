import React, { Component } from 'react'
import TagsDiv from '../../styled/Tags.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import Button from 'material-ui/Button'


export default class Tags extends Component {
    static get propTypes() { 
        return { 
            tags: PropTypes.array,
            _this: PropTypes.object
        }
    }

     constructor (props) {
        super(props)
        this.state = {
            
        }
    }


    

    render() {
       const {tags} = this.props

       let tagLists = null
       if(tags) {
           tagLists = tags.map((tag, index) => {
               return (
                   <li key={index} className="tag">
                        <Button className="tagBtn"> {tag.name} </Button>
                   </li>
               )
           })
       }
       

        return (
            <TagsDiv>
                <header className="header">
                    <h2 className="title">热门标签</h2>
                </header>
               { 
                   tagLists 
                   ? <ul className="tags">
                        {tagLists}
                   </ul> 
                   : null
                }
            </TagsDiv>
        )
    }
}
