import * as actionTypes from '../actionTypes'

const initState = {
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
};
export default (state = initState, action) => {
    if (action.type === actionTypes.SEARCH_FOUCS) {
        return {
            ...state,
            focused: true
        }
    } else if (action.type === actionTypes.SEARCH_BLUR) {
        return {
            ...state,
            focused: false
        }
    } else if (action.type === actionTypes.CHANGE_HOTLIST) {
        return {
            ...state,
            list: action.data,
            totalPage: action.totalPage
        }
    } else if (action.type === actionTypes.MOUSEENTER) {
        return {
            ...state,
            mouseIn:true
        }
    }else if(action.type===actionTypes.MOUSELEAVE){
        return{
            ...state,
            mouseIn:false
        }
    }else if(action.type===actionTypes.CHNAGEPAGE){
        return{
            ...state,
            page:action.page
        }
    }

    return state
}