import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ListView,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import {getCartBrandNotZore,getGoodsNum,getPrice} from '../utils'
import {COLOR} from '../config'
import {width} from '../utils'
import Button from 'apsl-react-native-button'
import {cartAdd,cartReduce} from '../store/actions'
import AddrView from './order_comp/AddrView'
import PaywayView from './order_comp/PaywayView'
import BottomView from './shop_comp/BottomView'




class OrderPage extends Component{
    constructor(){
        super()
        this.ds=new ListView.DataSource({
            getSectionData:this.getSectionData,
            getRowData:this.getRowData,
            sectionHeaderHasChanged:(s1,s2)=>s1!==s2,
            rowHasChanged:(r1,r2)=>r1!==r2,
        })

    }
    render(){
        const tarr=getCartBrandNotZore(this.props.carts,this.props.brand)
        const dataSource=this.ds.cloneWithRowsAndSections(this.props.brand,tarr[0],tarr[1])
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListView
                        initialListSize={6}
                        contentContainerStyle={styles.listview}
                        dataSource={dataSource}
                        renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, sectionID, rowID, highlightRow)}
                        renderSectionHeader = {this.renderSectionHeader}
                    />
                    <AddrView/>
                    <PaywayView/>
                </ScrollView>
                <BottomView
                    style={styles.bottom}
                    leftTitle={`合计￥${getPrice(this.props.carts,this.props.brand)}`}
                    rightTitle={'确认下单'}
                    onRightPress={()=>{alert('xiadan')}}
                />
            </View>
        )
    }
    getSectionData(data,sectionId){
        return sectionId
    }
    getRowData(data,sectionId,rowId){
        const barr=data.filter((v)=>v.name===sectionId)
        const rdata=barr[0].invigorants.filter(i=>i.id==rowId)
        return rdata[0]
    }
    renderSectionHeader(sectionData, sectionID){
            return (
                <View style={styles.listviewheader}>
                    <View style={{height:5,backgroundColor:'#f5f5f5'}}/>
                    <View style={styles.listviewheadermain}>
                        <Text style={{flex:1,color:COLOR.main}}>{sectionID}</Text>
                        <Text style={{fontSize:12}}>清空此类购物车</Text>
                    </View>
                    <View style={{backgroundColor:'#997833',height:0.5}}/>
                </View>
            )
    }
    _renderRow(rowData, sectionID, rowID) {
        const goodsNum=getGoodsNum(this.props.carts,rowID)
        return (
                <View style={styles.rowStyle}>
                    <Text numberOfLines={1} style={styles.rowName}>{rowData.name}</Text>
                    <Text style={styles.rowPrice}>￥{goodsNum*rowData.price}</Text>
                    <TouchableOpacity onPress={()=>{this.props.dispatch(cartReduce(rowID))}}><Text style={styles.addBtnStyle}>&ndash;</Text></TouchableOpacity>
                    <Text style={styles.rowNum}>{goodsNum}</Text>
                    <TouchableOpacity onPress={()=>{this.props.dispatch(cartAdd(rowID))}}><Text style={styles.addBtnStyle}>➕</Text></TouchableOpacity>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop:60,
        width
    },
    listview:{
        flexDirection:'column',
        backgroundColor:'#dddddd',
    },
    rowStyle: {
        paddingLeft: 20,
        paddingRight:15,
        flexDirection:'row',
        paddingTop:7,
        paddingBottom:7,
        backgroundColor:'white',
        alignItems:'center',
    },
    listviewheader:{
        flexDirection:'column',
        backgroundColor:'white',
    },
    listviewheadermain:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10
    },
    addBtnStyle:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:COLOR.main,
        color:'white',
        textAlign:'center'
    },
    bottom:{
        position:'absolute',
        height:45,
        bottom:0
    },
    rowName:{
        flex:1
    },
    rowPrice:{
        marginRight:10
    },
    rowNum:{
        width:30,
        textAlign:'center'
    }
});

export default connect(state=>state)(OrderPage)