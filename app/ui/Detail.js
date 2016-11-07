import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

class Detail extends React.Component{
    componentDidMount() {
        this.props.hideNavBar=true
    }
    render(){
        console.log(this.props)
        return <View style={styles.container}><Text>{this.props.rowData.title}</Text></View>
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50
    }
})

export default Detail