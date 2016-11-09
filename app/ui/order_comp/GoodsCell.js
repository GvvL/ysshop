import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native'
import {COLOR} from '../../config'

const PCell=()=>{
    return
}

export default ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.top_title}>狗蓝旗</Text>
                <TouchableOpacity>
                    <Image/>
                    <Text>清空此类购物车</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.middle}/>
            <ListView style={styles.bottom}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'white'
    },
    top:{
        flexDirection:'row',
        paddingTop:3,
        paddingBottom:3,
        paddingLeft:10,
        paddingRight:10
    },
    top_title:{
        flex:1,
        color:COLOR.main
    },
    middle:{
        height:1,
        backgroundColor:COLOR.main
    },
    bottom:{
    }
})