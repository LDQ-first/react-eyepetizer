/*action creator*/

import {
    GET_INDEX, 
    GET_RELATED, 
    GET_REPLIES,
    GET_DETAIL,
    GET_AUTHOR,
    GET_SEARCH,
    GET_FEED,

    GET_HOT,
    GET_CATEGORY,
    GET_PGCA,

    GET_WEEK,
    GET_MONTH,
    GET_ALL,

    GET_FOLLOW,
} from '../const/const'

import axios from 'axios'
import {eyeApi} from '../../api/api.js' 
import fetchJsonp from 'fetch-jsonp'


//index

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
            if(tags) {
                for(let tag of tags) {
                    newTags.push({name: tag.name})
                }
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




//related

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




//replies

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






//detail

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




//authorDetail

export const getAuthor = (author) => { 
    return {
        type: GET_AUTHOR,
        author: author
    }
}



const filterAuthorData = (data) => {

   const itemList = data.itemList
   let newItemList = []
   for(let item of itemList) {
       if(item.type === 'video') {
           const data = item.data

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

            newItemList.push({
                category: data.category,
                consumption: data.consumption,
                videoImg: data.cover.feed,
                description: data.description,
                duration: data.duration,
                id: data.id,
                tags: data.tags,
                title: data.title,
                playUrl: data.playUrl,
                author: newAuthor
            })
       }
   }


   const pgcInfo = data.pgcInfo
   const newPgcInfo = {
      brief: pgcInfo.brief,
      icon: pgcInfo.icon,
      id: pgcInfo.id,
      name: pgcInfo.name,
      videoCount: pgcInfo.videoCount,
      description: pgcInfo.description
   }

  

    const newData = {
       count: data.count,
       authorVideo: newItemList,
       authorInfo: newPgcInfo
    }
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







//search

export const getSearch = (searchList) => { 
    return {
        type: GET_SEARCH,
        searchList: searchList
    }
}



const filterSearchData = (data) => {
   
   if(!data) {
       return {}
   }
   const itemList = data.itemList
   /*console.log(data.itemList)*/
   const authors = []
   const videos = []
   for(let item of itemList) {
       if(item.type === 'videoCollectionWithBrief') {
           authors.push(item)
       } else if(item.type === 'video') {
           videos.push(item)
       }
   }

 //  console.log('authors: ', authors)
 //  console.log('videos: ', videos)

   
   const newAuthor = []
   if(authors.length) {
       for(let item of authors) {
           const data = item.data

           const newItemLists = []
            if(data.itemList) {
                for(let item of data.itemList) {
                    const data = item.data

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

                    const tags = data.tags
                    const newTags = [] 
                    if(tags) {
                        for(let tag of tags) {
                            newTags.push({name: tag.name})
                        }
                    }
                    


                    const newItemList = {
                        category: data.category,
                        consumption: data.consumption,
                        videoImg: data.cover.feed,
                        description: data.description,
                        duration: data.duration,
                        id: data.id,
                        tags: newTags,
                        title: data.title,
                        playUrl: data.playUrl,
                        author: newAuthor
                    }
                    newItemLists.push(newItemList)
                }
            } 

           const newItem = {
               description: data.header.description,
               title: data.header.title,
               id: data.header.id,
               icon: data.header.icon,
               itemList: newItemLists
           }
           newAuthor.push(newItem)
       }
   }


   const newVideos = []
   if(videos.length) {
       for(let item of videos) {
           const data = item.data

        const tags = data.tags
        const newTags = [] 
        if(tags) {
            for(let tag of tags) {
                newTags.push({name: tag.name})
            }
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


         const newItem = {
               category: data.category,
               consumption: data.consumption,
               videoImg: data.cover.feed,
               description: data.description,
               duration: data.duration,
               id: data.id,
               tags: newTags,
               title: data.title,
               playUrl: data.playUrl,
               author: newAuthor
        }
        newVideos.push(newItem)

           
       }
   }


    const newData = {
        count: data.count,
        Authors: newAuthor,
        Videos: newVideos
    }
   // console.log(newData)
    return newData
}



export const getSearchData = (query) => async (dispatch) => {
   try {
       if(query === '') {
           return dispatch(getSearch(filterSearchData(null)))
       }
       let res = await axios.get(eyeApi.search(query))
    //   console.log('res.data: ', res.data)
       await dispatch(getSearch(filterSearchData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}




//feed

export const getFeed = (feed) => { 
    return {
        type: GET_FEED,
        feed: feed
    }
}



const filterFeedData = (data) => {
   const dailyList = data.dailyList[0]

   const newVideoList = []
   if(dailyList.videoList.length) {
       const videoList = dailyList.videoList
       for(let video of videoList) {

            const tags = video.tags
            const newTags = [] 
            if(tags) {
                for(let tag of tags) {
                    newTags.push({name: tag.name})
                }
            }

            let newAuthor = null
            if(video.author) {
                const author = video.author
                newAuthor = {
                    id: author.id,
                    icon: author.icon,
                    name: author.name,
                    description: author.description,
                    latestReleaseTime: author.latestReleaseTime,
                    videoNum: author.videoNum
                }
            }


           const newVideo = {
               category: video.category,
               consumption: video.consumption,
               videoImg: video.coverForFeed,
               description: video.description,
               duration: video.duration,
               id: video.id,
               tags: newTags,
               title: video.title,
               playUrl: video.playUrl,
               author: newAuthor
           }
           newVideoList.push(newVideo)
       }

   }

   
    const newData = {
        videoList: newVideoList,
        date: dailyList.date
    }
   // console.log(newData)
    return newData
}



export const getFeedData = (date) => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.feed(date))
    //   console.log('res.data: ', res.data)
       await dispatch(getFeed(filterFeedData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}



//hot
export const getHot = (hot) => { 
    return {
        type: GET_HOT,
        hot: hot
    }
}



const filterHotData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemList = []


   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)

           switch(type) {
            
           }



       }
   }

  

    const newData = {
       
    }
    console.log(newData)
    return newData
}



export const getHotData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.hot)
    //   console.log('res.data: ', res.data)
       await dispatch(getHot(filterHotData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}




//week

export const getWeek = (week) => { 
    return {
        type: GET_WEEK,
        week: week
    }
}


const filterWeekData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemList = []


   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)

           switch(type) {
            
           }
           
       }
   }


    const newData = {
       
    }
    console.log(newData)
    return newData
}



export const getWeekData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.weekly)
    //   console.log('res.data: ', res.data)
       await dispatch(getWeek(filterWeekData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}



//month

export const getMonth = (month) => { 
    return {
        type: GET_MONTH,
        month: month
    }
}


const filterMonthData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemList = []


   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)

           switch(type) {
            
           }
           
       }
   }


    const newData = {
       
    }
    console.log(newData)
    return newData
}



export const getMonthData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.monthly)
    //   console.log('res.data: ', res.data)
       await dispatch(getMonth(filterMonthData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}




//all

export const getAll = (all) => { 
    return {
        type: GET_ALL,
        all: all
    }
}


const filterAllData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemList = []


   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)

           switch(type) {
            
           }
           
       }
   }


    const newData = {
       
    }
    console.log(newData)
    return newData
}



export const getAllData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.historical)
    //   console.log('res.data: ', res.data)
       await dispatch(getAll(filterAllData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}











//category

export const getCategory = (category) => { 
    return {
        type: GET_CATEGORY,
        category: category
    }
}




const filterCategoryData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemList = []


   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)

           switch(type) {
            
           }
           


       }
   }

  

    const newData = {
       
    }
    console.log(newData)
    return newData
}



export const getCategoryData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.category)
    //   console.log('res.data: ', res.data)
       await dispatch(getCategory(filterCategoryData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}







//pgca

export const getPgca = (pgca) => { 
    return {
        type: GET_PGCA,
        pgca: pgca
    }
}






const filterPgcaData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemList = []


   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)

           switch(type) {
            
           }
           
       }
   }

  

    const newData = {
       
    }
    console.log(newData)
    return newData
}



export const getPgcaData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.pgca)
    //   console.log('res.data: ', res.data)
       await dispatch(getPgca(filterPgcaData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}





//follow

export const getFollow = (follow) => { 
    return {
        type: GET_FOLLOW,
        follow: follow
    }
}






const filterFollowData = (data) => {
   console.log(data.itemList)
   const itemList = data.itemList

   const newItemLists = []

   if(itemList) {
       for(let item of itemList) {
           const type = item.type
           console.log(type)
           const data = item.data

           switch(type) {
             case 'videoCollectionWithBrief':
             case 'videoCollectionOfHorizontalScrollCard':
                const newItemList = []
                const author = data.header
                const itemList = data.itemList


                const newHeader = {
                    id: author.id,
                    icon: author.icon,
                    name: author.name,
                    description: author.description,
                    latestReleaseTime: author.latestReleaseTime,
                    videoNum: author.videoNum
                }


                for(let item of itemList) {
                    const video = item.data

                    const tags = video.tags
                    const newTags = [] 
                    if(tags) {
                        for(let tag of tags) {
                            newTags.push({name: tag.name})
                        }
                    }

                    let newAuthor = null
                    if(video.author) {
                        const author = video.author
                        newAuthor = {
                            id: author.id,
                            icon: author.icon,
                            name: author.name,
                            description: author.description,
                            latestReleaseTime: author.latestReleaseTime,
                            videoNum: author.videoNum
                        }
                    }


                    const newVideo = {
                        category: video.category,
                        consumption: video.consumption,
                        videoImg: video.cover.feed,
                        description: video.description,
                        duration: video.duration,
                        id: video.id,
                        tags: newTags,
                        title: video.title,
                        playUrl: video.playUrl,
                        author: newAuthor
                    }

                    newItemList.push(newVideo)
                }

                newItemLists.push({
                    ...newHeader,
                    itemList: newItemList,
                    type
                })               
                break
             default :
                break
           }
           
       }
   }

  

    const newData = {
       authors: newItemLists
    }
    console.log(newData)
    return newData
}



export const getFollowData = () => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.follow)
    //   console.log('res.data: ', res.data)
       await dispatch(getFollow(filterFollowData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}

