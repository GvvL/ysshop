import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native'
import Button from 'apsl-react-native-button'
import {Actions} from 'react-native-router-flux'
import {YSHOST} from '../config'

import {connect} from 'react-redux'
import {brandAdd,changemsg,getDataInServer,brandGetFromServer,brandSelected,cartAdd} from '../store/actions'
import Swiper from 'react-native-swiper'
import {width,getPrice} from '../utils'
import ModalDropdown from 'react-native-modal-dropdown';
import ShopCell from './ShopCell'
import BottomView from './shop_comp/BottomView'
import Navbar from './shop_comp/NavBar'

const DEMO_OPTIONS = ['智能排序','价格排序'];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
class ShopPage extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(brandGetFromServer())
    }
    render(){
        const listviewdata=this.props.brand.length>0?this.props.brand[this.props.currBrandSelected].invigorants:[]
        return (
            <View style={styles.container}>
                <Navbar
                    style={styles.navbar}
                    cartNum={this.props.carts.length}
                />
                <ScrollView>
                    {this.renderSwiper()}
                    <View style={styles.menu_container}>
                        {this.renderLeftMenu()}
                        {this.renderRightMenu()}
                    </View>
                    <ListView
                        style={{width}}
                        contentContainerStyle={styles.listview}
                        enableEmptySections={true}
                        dataSource={ds.cloneWithRows(listviewdata)}
                        renderRow={(rowData) => <ShopCell onCartClick={(id)=>this.props.dispatch(cartAdd(id))} rowData={rowData}/>}
                        initialListSize={6}
                    >
                    </ListView>
                </ScrollView>
                <BottomView
                    style={styles.bottom}
                    leftTitle={'共 ￥'+getPrice(this.props.carts,this.props.brand)}
                    rightTitle={this.props.carts.length}
                    onRightPress={()=>{Actions.order({title:'购物车'})}}
                />
            </View>
        )
    }

    //轮播图
    renderSwiper(){
        return (
            <Swiper style={styles.swiperStyle}
                    showsPagination={true}
                    autoplay={true}
                    height={140}
                    dot={<View style={{backgroundColor: 'rgba(244,244,244,.6)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: 'rgba(0,0,0,1)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            >
                {this.props.banner.map((v,i)=>{
                    return <View key={i} style={styles.swipercell}>
                                <TouchableOpacity onPress={()=>Actions.banner({title:v.title,data:v})}>
                                <Image resizeMode='stretch' style={styles.image} source={{uri:YSHOST+v.advimg}} />
                                </TouchableOpacity>
                            </View>
                })}
            </Swiper>
        )
    }
    //选择框
    renderLeftMenu(){
        const options=this.props.brand.map((v)=>v.logo)
        const currBrandData=this.props.brand[this.props.currBrandSelected]
        return (
            <ModalDropdown style={styles.menu}
                           textStyle={styles.menucelltext}
                           dropdownStyle={styles.menu_dropdown}
                           options={options}
                           renderRow={this._dropdown_renderLeftRow.bind(this)}
                           defaultValue={'品牌选择'}
                           onDropdownWillShow={()=>{
                               return options.length>0
                           }}
                           onSelect={(ids,value)=>{
                                this.props.dispatch(brandSelected(Number(ids)))
                           }}
            >
                <Image style={styles.menu_img} resizeMode='contain' source={this.getLeftMenuImg(currBrandData)}></Image>
             </ModalDropdown>
        )
    }
    getLeftMenuImg(currdata){
        if(currdata){
            return {uri:YSHOST+currdata.logo}
        }else{
            return require('../img/app_logo.png')
        }
    }
    renderRightMenu(){
        return (
            <ModalDropdown style={styles.menu}
                           textStyle={styles.menucelltext}
                           dropdownStyle={styles.menu_dropdown}
                           options={DEMO_OPTIONS}
                           defaultValue={'智能排序'}
                           renderRow={this._dropdown_renderRightRow.bind(this)}
            >
                <View style={{justifyContent:'center',alignItems:'center',height:40}}>
                    <Text>智能排序</Text>
                </View>
            </ModalDropdown>
        )
    }
    _dropdown_renderLeftRow(rowData, rowID, highlighted) {
        return (
            <View style={styles.menucell}>
                <Image style={styles.menucell_image}
                       resizeMode='contain'
                       source={{uri:YSHOST+rowData}}
                />
            </View>
        );
    }
    _dropdown_renderRightRow(rowData, rowID, highlighted) {
        let icon = highlighted ? require('../img/app_logo.png') : require('../img/app_logo.png');
        let evenRow = rowID % 2;
        return (
            <View style={[styles.menucell, evenRow && {backgroundColor: 'lemonchiffon'}]}>
                <Text style={[styles.menucell_text, highlighted && {color: '#bc933f'}]}>
                    {rowData}
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    menu_container:{
        flexDirection:'row'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    swiperStyle:{
      height:140,
    },
    swipercell: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    image: {
        width,
        flex: 1
    },
    menu: {
        flex:1,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'white',
        height:40,
    },
    menu_img:{
        height:40
    },
    menucelltext: {
        height: 50,
        lineHeight: 20,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    menu_dropdown: {
        width: width/2,
        borderColor: '#bc933f',
        borderWidth: 1,
        borderRadius: 2,
    },
    menucell: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent:'center'
    },
    menucell_image: {
        marginLeft: 4,
        width:width/2,
        height: 50,
    },
    menucell_text: {
        marginHorizontal: 4,
        fontSize: 12,
        color: '#777',
        textAlignVertical: 'center',
    },
    listview:{
        flexDirection:'row',
        flexWrap:'wrap',

    },
    bottom:{
        position:'absolute',
        height:45,
        bottom:0
    },
    navbar:{
        position:'absolute',
        height:50,
        top:0
    }
});


export default connect(state=>state)(ShopPage)