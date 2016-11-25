
import {Dimensions} from 'react-native'
const {width, height} =Dimensions.get('window')

const getPrice=(carts,data)=>{
    let price=0;
    let tempArr=[]
    for (let rowData of data){
        tempArr=[...tempArr,...rowData.invigorants]
    }
    for (let id of carts){
        const arr=tempArr.filter(v=>v.id==id)
        if(arr.length>0){
            price+=arr[0].price
        }else{
            throw new Error('id不存在')
        }
    }
    return price
}

const getCartData=(carts,data)=>{
    let cartData={}
    let rowIds=[]
    let sectionIds=[]
    let tempArr=[]
    for (let rowData of data){
        tempArr=[...tempArr,...rowData.invigorants]
    }
    for (let id of carts){
        const arr=tempArr.filter(v=>v.id==id)
        if(arr.length>0){
            price+=arr[0].price
        }else{
            throw new Error('id不存在')
        }
    }


}
const getCartBrandNotZore=(carts,data)=>{
    let sections=[];
    let rows=[]
    let tempArr=[]
    for (let pid of carts){
        let tempid=0
        for (let brand of data){
            let invs=brand.invigorants.filter((item)=>item.id==pid)
            if(invs.length>0){
                if(sections.indexOf(brand.name)==-1){
                    sections.push(brand.name)
                }
                if(rows.length>tempid){
                    if(rows[tempid].indexOf(invs[0].id)==-1){
                        rows[tempid]=[...rows[tempid],invs[0].id]
                    }
                }else{
                    rows.push([invs[0].id])
                }

            }
            tempid++
        }
    }
    return [sections,rows]
}

const getGoodsNum=(carts,id)=>{
    return carts.filter(v=>v==id).length
}

export {
    width,
    height,
    getPrice,
    getCartBrandNotZore,
    getGoodsNum
}


