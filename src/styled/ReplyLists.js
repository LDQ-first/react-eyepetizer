import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const ReplyListsDiv = styled.div`
     color: #FFF;
     padding-top: 2em;
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
                  justify-content: flex-start;
                  align-items: center;
                   width: calc(100% - 90px);
                   ${mediaQuery(768)} {
                    width: calc(100% - 70px);
                  }
                 .avatar {
                    height: 36px;
                    width: 36px;
                    margin: 0 13px;
                    border-radius: 50%;
                    box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
                    ${mediaQuery(768)} {
                       margin: 0 8px 0 0;
                    }
                 }
                 .reply-message { 
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                     justify-content: center;
                     align-items: flex-start;
                     width: calc(100% - 44px);
                    .userName {
                       width: 100%;
                       font-size: 16px;
                       ${mediaQuery(768)} {
                           font-size: 14px;
                        }
                    }
                    .time {

                    }
                    .message {
                        word-break: break-word;
                        ${mediaQuery(768)} {
                           font-size: 14px;
                        }
                    }
                 }
             }
             .like-hot {
                 width: 90px;
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: flex-end;
                 ${mediaQuery(768)} {
                    width: 68px;
                 }
                 .like-count {
                     padding: 0 1em;
                     display: flex;
                     justify-content: space-between;
                     align-items: center;
                      ${mediaQuery(768)} {
                        padding: 0 0.5em;
                      }
                     .like-count-num {
                         
                     }
                     .like-count-icon {
                         ${mediaQuery(768)} {
                            padding: 6px !important;
                            width: 36px !important;
                            height: 36px !important;

                        }
                        .likeIcon {
                            fill: #FFF !important;
                        }
                    }
                 }
                 .isHot {
                      padding: 0 1em;
                      ${mediaQuery(768)} {
                        padding: 0 0.5em ;
                      }
                     .hot-icon {
                         ${mediaQuery(768)} {
                            padding: 6px !important;
                            width: 36px !important;
                            height: 36px !important;
                        }
                         .hotIcon {
                              fill: #FF8A65 !important;
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
