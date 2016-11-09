import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

export default class BannerPage extends React.Component{
    render(){
        return <View style={styles.container}></View>
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4f4f4'
    }
})