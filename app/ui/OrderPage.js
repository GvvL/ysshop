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
import {getCartBrandNotZore,getGoodsNum} from '../utils'
import {COLOR} from '../config'
import {width} from '../utils'
import Button from 'apsl-react-native-button'




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
                </ScrollView>
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
                    <Text numberOfLines={1}>{rowData.name}{goodsNum}</Text>
                    <Text>￥{goodsNum*rowData.price}</Text>
                    <Text>&ndash;</Text>
                    <Text>{goodsNum}</Text>
                    <Text>➕</Text>
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
    }
});

export default connect(state=>state)(OrderPage)