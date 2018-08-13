const initState = {focused:false};
export default (state=initState,action)=>  {
    if(action.type==='search_focuse'){
        return{
            focused:true
        }
    }else if(action.type==='search_blur'){
        return{
            focused:false
        }
    }
    return state
}