import React from 'react'
import {Provider,connect} from 'react-redux'
import ShopPage from './ui/ShopPage'
import OrderPage from './ui/OrderPage'
import DetailPage from './ui/Detail'
import store from './store'
import {Actions,Scene,Router} from 'react-native-router-flux'
import {Text} from 'react-native'
const RouterWithRedux=connect()(Router)
const scenes=Actions.create(
    <Scene key='root'>
        <Scene key='shop' component={ShopPage} title="shop"/>
        <Scene key="order" component={OrderPage} title="order" backTitle="aaa"/>
        <Scene key="detail" component={DetailPage} title="detail"/>
    </Scene>
)
export default ()=>{
    return <Provider store={store}>
                <RouterWithRedux scenes={scenes}>
                </RouterWithRedux>
            </Provider>
}
