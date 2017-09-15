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
    console.log(data.date)
    console.log(data.itemList)
    const newItemList = []
    for(let item of data.itemList) {
        if(item.type === TYPE) {
            newItemList.push(item)
        } else {
            break
        }
    }
    console.log(newItemList)
    console.log(newItemList.length)


    const newData = {
        itemList: newItemList,
        date: data.date
    }
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





export const getRelated = () => { 
    return {
        type: GET_RELATED
    }
}









export const getReplies = () => { 
    return {
        type: GET_REPLIES
    }
}








export const getDetail = () => { 
    return {
        type: GET_DETAIL
    }
}


