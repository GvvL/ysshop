import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {COLOR} from '../../config'



export default class NavBar extends Component{

    render(){

        return (
            <View style={styles.container}>
                {this.props.cartNum>0&&<Text style={styles.bable}>{this.props.cartNum}</Text>}
                <TouchableOpacity>
                    <Image source={require('../../img/back.png')} style={styles.leftimg}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middleimg} activeOpacity={.9}>
                    <Image style={styles.middleimgLeft} source={require('../../img/search.png')}/>
                    <Text style={styles.middleimgText}>输入产品名称..</Text>
                </TouchableOpacity>
                <TouchableOpacity><Image source={require('../../img/cart.png')} style={styles.rightimg}/></TouchableOpacity>
            </View>)
    }


}

const styles=StyleSheet.create({
    container:{
        backgroundColor:COLOR.mainBg,
        height:54,
        alignItems:'center',
        flexDirection:'row'
    },
    leftimg:{
        height:25,
        width:25,
        marginLeft:10
    },
    rightimg:{
        height:25,
        width:25,
        marginRight:10
    },
    middleimg:{
        flex:1,
        height:36,
        borderRadius:12,
        borderWidth:1,
        borderColor:COLOR.main,
        marginLeft:10,
        marginRight:15,
        flexDirection:'row',
        alignItems:'center'
    },
    middleimgText:{
        color:COLOR.main,
        fontSize:12,
        flex:1,
        marginLeft:10
    },
    middleimgLeft:{
        width:16,
        height:16,
        marginLeft:15
    },
    bable:{
        width:12,
        height:12,
        borderRadius:6,
        position:'absolute',
        backgroundColor:COLOR.main,
        top:8,
        right:10,
        color:'white',
        textAlign:'center',
        fontSize:8

    }
})