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
import {YSHOST} from '../config'



export default class ShopCell extends Component{
    render(){
       return ( <TouchableOpacity style={styles.container} onPress={()=>{Actions.detail({rowData:this.props.rowData,title:this.props.rowData.title,backTitle:'首页'})}} activeOpacity={.7}>
                 <View >
                    <Image source={{uri:YSHOST+this.props.rowData.picture}} style={styles.image} resizeMode='contain'></Image>
                    <View style={styles.bottomview}>
                        <Text style={styles.title} numberOfLines={1}>{this.props.rowData.name}</Text>
                        <Text style={styles.price} numberOfLines={1}>￥{this.props.rowData.price}</Text>
                    </View>
                     <TouchableOpacity style={styles.cart} activeOpacity={0.7} onPress={()=>this.props.onCartClick(this.props.rowData.id)}>
                        <Text style={styles.carttext}>+</Text>
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
        right:5,
        backgroundColor:'#bc933f',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    carttext:{
        color:'white',
        fontSize:25,
        textAlign:'center',
    }
})