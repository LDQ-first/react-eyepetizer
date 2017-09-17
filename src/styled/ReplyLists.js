import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const ReplyListsDiv = styled.div`
     color: #FFF;
     .header {
         background: rgba(0, 0, 0, 0.2);
         text-align: center;
         .title {
             font-size: 20px;
         }
     }
     .reply-lists {
         background: rgba(0, 0, 0, 0.2);
         padding: 15px 15px 8px 15px; 
         .reply {
             display: flex;
             justify-content: space-between;
             align-items: center;
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

                    }
                 }
             }
             .like-hot {
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: flex-start;
                 .like-count {
                     
                     .like-count-num {
                         .like-count-icon {
                             .likeIcon {

                             }
                         }
                     }
                 }
                 .isHot {
                     .hot-icon {
                         .hotIcon {

                         }
                     }
                 } 
             }
         }
     }

`

export default ReplyListsDiv
