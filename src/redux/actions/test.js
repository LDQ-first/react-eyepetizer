import {

    GET_SONG_REQUEST,
    GET_SONG_SUCCESS,
    GET_SONG_FAIL

} from '../const/const'
import {musicApi} from '../../api/api.js' 
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'


//song
export const getsongRequest = () => {
    return {
        type: GET_SONG_REQUEST
    }
}

export const getsongSuccess = (song) => {
    return {
        type: GET_SONG_SUCCESS,
        song: song
    }
}

export const getsongFail = () => {
    return {
        type: GET_SONG_FAIL
    }
}


export const getSong = (songid) => async (dispatch) => {

   try {
       dispatch(getsongRequest())
       let res = await fetchJsonp(musicApi.song(songid))
       console.log('data: ', res)
       await dispatch(getsongSuccess((res)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getsongFail())
   }
}


