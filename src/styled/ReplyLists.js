import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const ReplyListsDiv = styled.div`
     color: #FFF;
     padding-top: 2em;
     background: rgba(0, 0, 0, 0.2);
     .header {    
         text-align: center;
         .title {
             font-size: 20px;
         }
     }
     .reply-lists {
         padding: 15px 15px 8px 15px; 
         .reply {
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: 1em 0;
             .reply-content {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                 .avatar {
                    height: 36px;
                    width: 36px;
                    margin: 0 13px;
                    border-radius: 50%;
                    box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
                 }
                 .reply-message {
                      display: flex;
                      flex-direction: column;
                     justify-content: center;
                     align-items: flex-start;
                     .userName {

                    }
                    .time {

                    }
                    .message {
                        word-break: break-word;
                    }
                 }
             }
             .like-hot {
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: flex-end;
                 .like-count {
                     padding: 0 1em;
                     display: flex;
                     justify-content: space-between;
                     align-items: center;
                     .like-count-num {
                         
                     }
                     .like-count-icon {
                        .likeIcon {
                            fill: #FFF;
                        }
                    }
                 }
                 .isHot {
                      padding: 0 1em;
                     .hot-icon {
                         .hotIcon {
                              fill: #FF8A65;
                         }
                     }
                 } 
             }
         }
     }
     .noReply {
         margin: 0;
         text-align: center;
         padding: 1em 0;
     }

`

export default ReplyListsDiv
