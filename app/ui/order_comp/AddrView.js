import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'
import {COLOR} from '../../config'
import {width} from '../../utils'

const AddrView=()=>{
    return (
        <View style={styles.container}>
            <Image/>
            <View style={styles.address}>
                <View style={styles.addressleft}>
                    <Text>山东省</Text>
                    <Text>张先生</Text>
                </View>
                <Image style={styles.addressright}/>
            </View>
            <View style={styles.line}/>
            <View style={styles.selected}>

            </View>
        </View>
    )
}

export default AddrView


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    address:{
      flexDirection:'row'
    },
    addressleft:{
        flex:1,
        flexDirection:'column'
    },
    addressright:{
        width:30
    },
    selelct:{
        flexDirection:'row'
    },
    line:{
        height:0.5,
        backgroundColor:COLOR.main,
        width
    }
})