
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

export {
    width,
    height,
    getPrice
}


