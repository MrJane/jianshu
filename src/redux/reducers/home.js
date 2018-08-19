import * as actionTypes from '../actionTypes'
import {obj,listData,recommendList} from "./data";
const initState = {
    topicList:obj.result,
    list:listData.result,
    recommendList:recommendList.result
};
export default (state = initState, action) => {
    if (action.type === actionTypes.SEARCH_FOUCS) {

    } else if (action.type === actionTypes.SEARCH_BLUR) {

    }
    return state
}