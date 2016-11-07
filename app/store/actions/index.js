


import ActionType from '../actionType'

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

//品牌值设置
export const brandSet=(data)=>{
    return {type:ActionType.BRAND_SET,data}
}
//获取所有品牌
export const brandGetFromServer=()=>{
    return (dispatch,getState)=>{
        dispatch(loadingSet(true))
        fetch('http://v3.wufazhuce.com:8000/api/movie/list/50',)
            .then((res)=>res.json())
            .then((data)=>{
                dispatch(loadingSet(false))
                dispatch(brandSet(data.data))
        }).catch((error)=>{
                console.log(error)
                dispatch(changemsg(error))
        })
    }
}