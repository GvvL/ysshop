import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    ListView
} from 'react-native'
import Button from 'apsl-react-native-button'
import {Actions} from 'react-native-router-flux'

import {connect} from 'react-redux'
import {brandAdd,changemsg,getDataInServer,brandGetFromServer} from '../store/actions'
import Swiper from 'react-native-swiper'
import {width} from '../utils'
import ModalDropdown from 'react-native-modal-dropdown';
import ShopCell from './ShopCell'

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
class ShopPage extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(brandGetFromServer())
    }
    render(){

        return (
            <View style={styles.container}>
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
                        dataSource={ds.cloneWithRows(this.props.brand)}
                        renderRow={(rowData) => <ShopCell rowData={rowData}/>}
                        initialListSize={6}
                    >

                    </ListView>
                <Text style={styles.welcome}>
                    ShopPage! {this.props.msg}
                </Text>
                <Text style={styles.instructions}>
                    {this.props.loading?'true':'false'}===>{this.props.brand.length}
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Button onPress={()=>Actions.order({title:'sss'})}>
                    click
                </Button>
                </ScrollView>
            </View>
        )
    }

    //轮播图
    renderSwiper(){
        return (
            <Swiper style={styles.swiperStyle}
                    showsPagination={true}
                    autoplay={true}
                    height={120}
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.6)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: 'rgba(0,0,0,1)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            >
                <View style={styles.swipercell} >
                    <Image resizeMode='stretch' style={styles.image} source={require('../img/app_logo.png')} />
                </View>
                <View style={styles.swipercell}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../img/app_logo.png')} />
                </View>
                <View style={styles.swipercell}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../img/app_logo.png')} />
                </View>
            </Swiper>
        )
    }
    //选择框
    renderLeftMenu(){
        return (
            <ModalDropdown style={styles.menu}
                           textStyle={styles.menucelltext}
                           dropdownStyle={styles.menu_dropdown}
                           options={DEMO_OPTIONS_1}
                           renderRow={this._dropdown_renderRow.bind(this)}
            />
        )
    }
    renderRightMenu(){
        return (
            <ModalDropdown style={styles.menu}
                           textStyle={styles.menucelltext}
                           dropdownStyle={styles.menu_dropdown}
                           options={DEMO_OPTIONS_1}
                           renderRow={this._dropdown_renderRow.bind(this)}
            />
        )
    }
    _dropdown_renderRow(rowData, rowID, highlighted) {
        let icon = highlighted ? require('../img/app_logo.png') : require('../img/app_logo.png');
        let evenRow = rowID % 2;
        return (
            <View style={[styles.menucell, evenRow && {backgroundColor: 'lemonchiffon'}]}>
                <Image style={styles.menucell_image}
                       mode='stretch'
                       source={icon}
                />
                <Text style={[styles.menucell_text, highlighted && {color: 'mediumaquamarine'}]}>
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
        paddingTop:50
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
      height:120,
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
        borderWidth: 2,
        borderRadius: 3,
    },
    menucell: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    menucell_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
    },
    menucell_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
    },
    listview:{
        flexDirection:'row',
        flexWrap:'wrap',

    }
});


export default connect(state=>state)(ShopPage)