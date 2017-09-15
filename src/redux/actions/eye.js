/*action creator*/

import {
    GET_INDEX, 
    GET_RELATED, 
    GET_REPLIES,
    GET_DETAIL
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
    console.log(data.itemList)
    const newItemList = []
    for(let item of data.itemList) {
        if(item.type === TYPE) {
            newItemList.push(item)
        } else {
            break
        }
    }
    

    const newData = {
        itemList: newItemList,
        date: data.date
    }
    console.log(newData)
    return newData
}



export const getIndexData = () => async (dispatch) => {

   try {
       
       let res = await axios.get(eyeApi.index)
       console.log('res.data: ', res.data)
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
   

    const newData = {
        videoList: data.videoList
    }
    console.log(newData)
    return newData
}



export const getRelatedData = (id) => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.related(id))
       console.log('res.data: ', res.data)
       await dispatch(getIndex(filterRelatedData(res.data)))
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
   

    const newData = {
        replyList: data.replyList
    }
    console.log(newData)
    return newData
}




export const getRepliesData = (id) => async (dispatch) => {
   
   try {
       let res = await axios.get(eyeApi.replies(id))
       console.log('res.data: ', res.data)
       await dispatch(getIndex(filterRepliesData(res.data)))
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
   

    const newData = {
        detail: data
    }
    console.log(newData)
    return newData
}



export const getDetailData = (id) => async (dispatch) => {

   try {
       let res = await axios.get(eyeApi.detail(id))
       console.log('res.data: ', res.data)
       await dispatch(getIndex(filterDetailData(res.data)))
   } catch (err) {
       console.log('err:', err)
   }
}
