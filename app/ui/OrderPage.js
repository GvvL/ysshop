import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'



class OrderPage extends Component{
    componentDidMount() {
        console.log(this.props.navigationState)
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    OrderPage! {this.props.msg}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
});

export default connect(state=>state)(OrderPage)