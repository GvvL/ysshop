import React from 'react'
import {Provider,connect} from 'react-redux'
import ShopPage from './ui/ShopPage'
import OrderPage from './ui/OrderPage'
import DetailPage from './ui/Detail'
import BannerPage from './ui/BannerPage'
import store from './store'
import {Actions,Scene,Router} from 'react-native-router-flux'
import {Text, View} from 'react-native'
import {COLOR} from './config'

const RouterWithRedux=connect()(Router)

const scenes=Actions.create(
    <Scene key='root'>
        <Scene
            key='shop'
            component={ShopPage}
            title="shop"
            hideNavBar={true}/>
        <Scene
            key="order"
            component={OrderPage}
            title="order"
            hideNavBar={false}
            backButtonImage={require('./img/back.png')}
            navigationBarStyle={{backgroundColor:COLOR.mainBg}}
            titleStyle={{color:COLOR.main}}
            rightButtonImage={require('./img/delete.png')}
            onRight={()=>{alert('--')}}
            rightButtonIconStyle={{height:25,width:25}}
        />
        <Scene key="detail" component={DetailPage} title="detail" backButtonImage={require('./img/back.png')}/>
        <Scene key="banner" component={BannerPage} hideNavBar={false} backButtonImage={require('./img/back.png')}/>
    </Scene>
)
export default ()=>{
    return <Provider store={store}>
                <RouterWithRedux scenes={scenes}>
                </RouterWithRedux>
            </Provider>
}
