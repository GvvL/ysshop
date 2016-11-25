


import ActionType from '../actionType'
import {SHOP_INDEX_URL} from '../../config'

//品牌添加
export const brandAdd=(name)=>({type:ActionType.BRAND_ADD,name})

export const changemsg=(msg)=>({type:ActionType.CHANGE_MSG,msg})

export const getDataInServer=(msg)=>{
    return (dispatch,getState)=>{
        dispatch(changemsg('begin'))
        setTimeout(()=>{
            dispatch(changemsg('ok'))
        },3000)
    }
}
//加载加载状态
export const loadingSet=(isloading)=>({type:ActionType.LOADING_SET,loading:isloading})

//banner设置
export const bannerSet=(data)=>{
    return {type:ActionType.BANNER_SET,data}
}

//品牌值设置
export const brandSet=(data)=>{
    return {type:ActionType.BRAND_SET,data}
}
//品牌选择
export const brandSelected=(num)=>{
    return {type:ActionType.SELECT_BRAND_SET,num}
}

//添加购物车
export const cartAdd=(id)=>({type:ActionType.CART_ADD,id})
export const cartReduce=(id)=>({type:ActionType.CART_REDUCE,id})

//获取所有品牌
export const brandGetFromServer=()=>{
    return (dispatch,getState)=>{
        dispatch(loadingSet(true))
        fetch(SHOP_INDEX_URL,)
            .then((res)=>res.json())
            .then((data)=>{
                dispatch(bannerSet(data.data.banner))
                dispatch(brandSet(data.data.brand))
                dispatch(loadingSet(false))
        }).catch((error)=>{
                console.log(error)
                dispatch(changemsg(error))
        })
    }
}