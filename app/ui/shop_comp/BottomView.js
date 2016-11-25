import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {width} from '../../utils'
export default class BottomView extends React.Component{

    render(){
        const leftTitle=this.props.leftTitle?this.props.leftTitle:''
        const rightTitle=this.props.rightTitle?this.props.rightTitle:''
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.text}>{leftTitle}</Text>
                </View>
                <TouchableOpacity onPress={this.props.onRightPress}>
                <View style={styles.right}>
                    <Text style={styles.text}>{rightTitle}</Text>
                </View>
                </TouchableOpacity>
            </View>)
    }
}

const styles=StyleSheet.create({
    container:{
        height:45,
        flexDirection:'row',
        alignItems:'center',
    },
    left:{
       width:width*0.6,
        backgroundColor:'#111',
        height:45,
        justifyContent:'center',
        alignItems:'center'

    },
    right:{
        width:width*0.4,
        backgroundColor:'#bc933f',
        height:45,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:17
    }
})