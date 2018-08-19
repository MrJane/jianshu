import * as actionTypes from '../actionTypes'

const initState = {
    topicList:[],
    listData: [],
    recommendList: [],
    authors:[]
};
export default (state = initState, action) => {
    if (action.type === actionTypes.LOADHOMEDATA) {
        return {
            ...state,
            topicList:action.data.topicList,
            listData:action.data.listData,
            recommendList:action.data.recommendList,
            authors:action.data.authors
        }
    }
    return state
}