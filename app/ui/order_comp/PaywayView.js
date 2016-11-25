import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'
import {COLOR} from '../../config'
import {width} from '../../utils'


const PaywayCell=(props)=>{
    return (
        <View style={styles.row}>
            <Image/>
            <Text>支付宝支付</Text>
        </View>
    )
}


const PaywayView=()=>{
    return (
        <View style={styles.container}>
            <Text>付款方式</Text>
            <View style={styles.line}/>
            <View style={styles.main}>
                <PaywayCell key={1}/>
                <PaywayCell key={2}/>
            </View>
            <Text style={styles.bottom}>余额充值</Text>

        </View>
    )
}




export default PaywayView

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    line:{
        height:0.5,
        backgroundColor:COLOR.main
    },
    main:{
        flexDirection:'column'
    },
    cell:{
        flexDirection:'row'
    },
    bottom:{
        textAlign:'center',
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderBottomColor:COLOR.main,
        borderTopColor:COLOR.main,
        width
    }
})