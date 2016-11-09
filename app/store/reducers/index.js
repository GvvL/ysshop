import ActionType from '../actionType'
import {combineReducers} from 'redux'


function brand(state=[],action) {
    switch(action.type){
        case ActionType.BRAND_ADD:
            return [...state,action.name]
            break;
        case ActionType.BRAND_SET:
            return action.data
            break;
        default:
            return state
    }
}
const banner=(state=[],action)=>{
    return action.type==ActionType.BANNER_SET?action.data:state;
}

function msg(state='no msg',action){
    if(action.type==ActionType.CHANGE_MSG){
        return action.msg
    }else{
        return state
    }
}

function loading(state=false,action) {
    return action.type==ActionType.LOADING_SET?action.loading:state;
}


//首页品牌选择
const currBrandSelected=(state=0,action)=>{
    return action.type==ActionType.SELECT_BRAND_SET?action.num:0
}


//购物车
const carts=(state=[],action)=>{
    switch(action.type){
        case ActionType.CART_ADD:
            return [...state,action.id]
        case ActionType.CART_REDUCE:
            return state
        default:
            return state
    }
}


export default combineReducers({loading,brand,msg,banner,currBrandSelected,carts})