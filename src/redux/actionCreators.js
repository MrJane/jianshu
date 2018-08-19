import * as actionTypes from './actionTypes';
import axios from 'axios'
import {actioTypes} from "./store";

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOUCS
});
export const changeList = (data) => ({
    type: actionTypes.CHANGE_HOTLIST,
    data,
    totalPage: Math.ceil(data.length / 10)
});
export const mouseEnter = () => ({
    type: actioTypes.MOUSEENTER
});
export const mouseLeave = () => ({
    type: actionTypes.MOUSELEAVE
})
export const changePage = (page) => ({
    type: actionTypes.CHNAGEPAGE,
    page
})
export const getHotItems = () => {
    return (dispatch) => {
        axios.get('/api/headerHot.json').then((res) => {
            dispatch(changeList(res.data.result))
        }).catch((error) => {
            console.log(error);
        })
    }
}
export const getHomeData=(data)=>({
    type:actionTypes.LOADHOMEDATA,
    data
});
export const loadMoreList=()=>{

}