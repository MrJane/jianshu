import * as actionTypes from '../actionTypes'
import {obj} from "./topicData";

const initState = {
    topicList:obj.result
};
export default (state = initState, action) => {
    if (action.type === actionTypes.SEARCH_FOUCS) {

    } else if (action.type === actionTypes.SEARCH_BLUR) {

    }
    return state
}