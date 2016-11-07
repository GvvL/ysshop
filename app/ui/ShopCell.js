import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import {width} from '../utils'
import {Actions} from 'react-native-router-flux'



export default class ShopCell extends Component{
    render(){
       return ( <TouchableOpacity style={styles.container} onPress={()=>{Actions.detail({rowData:this.props.rowData,title:this.props.rowData.title,backTitle:'首页'})}} activeOpacity={.7}>
                 <View >
                    <Image source={{uri:this.props.rowData.cover}} style={styles.image} resizeMode='contain'></Image>
                    <View style={styles.bottomview}>
                        <Text style={styles.title}>{this.props.rowData.title}</Text>
                        <Text style={styles.price}>￥{this.props.rowData.id}</Text>
                    </View>
                     <TouchableOpacity style={styles.cart} activeOpacity={0.8}>
                        <Image source={require('../img/app_logo.png')} style={{width:30,height:30}}></Image>
                     </TouchableOpacity>
                 </View>
           </TouchableOpacity>
       )

    }
}
const cellWidth=(width-16)/2
const styles=StyleSheet.create({
    container:{
        width:cellWidth,
        backgroundColor:'#fff',
        height:180,
        margin:4,
        alignItems:'center',
        justifyContent:'center',
    },
    bottomview:{
        height:50,
        width:cellWidth,
        paddingTop:3,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#ddd',
        justifyContent:'space-between'
    },
    image:{
        flex:1,
        width:cellWidth,
    },
    title:{
        fontSize:12,
    },
    price:{
        flex:1,
        fontSize:14,
        color:'#bc933f',
        marginTop:3
    },
    cart:{
        height:30,
        width:30,
        position:'absolute',
        bottom:5,
        right:5
    }
})