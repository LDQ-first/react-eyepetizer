/*action creator*/

import {
    GET_INDEX, 
    GET_RELATED, 
    GET_REPLIES,
    GET_DETAIL,
    GET_AUTHOR,
} from '../const/const'

import axios from 'axios'
import {eyeApi} from '../../api/api.js' 
import fetchJsonp from 'fetch-jsonp'




export const getIndex = (IndexData) => { 
    return {
        type: GET_INDEX,
        IndexData: IndexData
    }
}


const filterIndexData = (data) => {
    const TYPE = 'video'
    const newItemList = []
    let newItemListData = {}
    for(let item of data.itemList) {
        if(item.type === TYPE) {
            const itemdata = item.data
            const tags = itemdata.tags
            const newTags = [] 
            for(let tag of tags) {
                newTags.push({name: tag.name})
            }

            let newAuthor = null
            if(itemdata.author) {
                const author = itemdata.author
                newAuthor = {
                        id: author.id,
                        icon: author.icon,
                        name: author.name,
                        description: author.description,
                        latestReleaseTime: author.latestReleaseTime,
                        videoNum: author.videoNum
                    }
            }

 

            newItemListData = {
                category: itemdata.category,
                consumption: itemdata.consumption,
                videoImg: itemdata.cover.feed,
                duration: itemdata.duration,
                description: itemdata.description,
                id: itemdata.id,
                tags: newTags,
                title: itemdata.title,
                playUrl: itemdata.playUrl,
                author: newAuthor
            }
            newItemList.push(newItemListData)
        } else if(item.type === 'textFooter'){
            break
        }
    }
    

    const newData = {
        itemList: newItemList,
        date: data.date
    }
 //   console.log(newData)
    return newData
}


export const getIndexData = () => async (dispatch) => {

   try {
       
       let res = await axios.get(eyeApi.index)
    //   console.log('res.data: ', res.data)
       await dispatch(getIndex(filterIndexData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}






export const getRelated = (videoList) => { 
    return {
        type: GET_RELATED,
        videoList: videoList
    }
}



const filterRelatedData = (data) => {
//   console.log(data.videoList)
   const newVideoList = []
   for(let video of data.videoList) {
      // console.log(video)
       newVideoList.push({
           category: video.category,
           coverForFeed: video.coverForFeed,
           duration: video.duration,
           id: video.id,
           title: video.title
       })
   }

    const newData = {
        videoList: newVideoList
    }
  //  console.log(newData)
    return newData
}



export const getRelatedData = (id) => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.related(id))
    //   console.log('res.data: ', res.data)
       await dispatch(getRelated(filterRelatedData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}






export const getReplies = (replyList) => { 
    return {
        type: GET_REPLIES,
        replyList: replyList
    }
}



const filterRepliesData = (data) => {
//   console.log(data.replyList)
   const newReplyList = []
   for(let replyList of data.replyList) {
     //  console.log(replyList) 

       newReplyList.push({
           likeCount: replyList.likeCount,
           message: replyList.message,
           user: {
               nickname: replyList.user.nickname,
               avatar: replyList.user.avatar
           },
           hot:  replyList.hot,
           createTime: replyList.createTime
       })
   }

    const newData = {
        replyList: newReplyList
    }
 //   console.log(newData)
    return newData
}




export const getRepliesData = (id) => async (dispatch) => {
   
   try {
       let res = await axios.get(eyeApi.replies(id))
      // console.log('res.data: ', res.data)
       await dispatch(getReplies(filterRepliesData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}




export const getDetail = (data) => { 
    return {
        type: GET_DETAIL,
        detail: data
    }
}


const filterDetailData = (data) => {
 //  console.log(data)
   const tags = data.tags
   const newTags = [] 
   for(let tag of tags) {
       newTags.push({name: tag.name})
   }
    let newAuthor = null
    if(data.author) {
        const author = data.author
        newAuthor = {
                id: author.id,
                icon: author.icon,
                name: author.name,
                description: author.description,
                latestReleaseTime: author.latestReleaseTime,
                videoNum: author.videoNum
            }
    }

   const newdata = {
       consumption: data.consumption,
       description: data.description,
       playUrl: data.playUrl,
       tags: newTags,
       title: data.title,
       id: data.id,
       category: data.category,
       duration: data.duration,
       coverForFeed: data.coverForFeed,
       author: newAuthor
   }


    const newData = {
        detail: newdata
    }
   // console.log(newData)
    return newData
}



export const getDetailData = (id) => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.detail(id))
    //   console.log('res.data: ', res.data)
       await dispatch(getDetail(filterDetailData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}





export const getAuthor = (Author) => { 
    return {
        type: GET_AUTHOR,
        Author: Author
    }
}



const filterAuthorData = (data) => {
   console.log(data)

   const itemList = data.itemList
   let newItemList = []
   for(let item of itemList) {
       if(item.type === 'video') {
           const data = item.data

            newItemList.push({
                category: data.category,
                consumption: data.consumption,
                coverForFeed: cover.feed,
                
            })
       }
   }
  

    const newData = {
       count: data.count,

    }
    console.log(newData)
    return newData
}



export const getAuthorData = (id) => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.authorDetail(id))
    //   console.log('res.data: ', res.data)
       await dispatch(getAuthor(filterAuthorData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}