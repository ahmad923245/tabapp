import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class Tab1 extends Component {
    render() {
        return (
            <View style={{justifyContent:'center',flex:1}}>

                <Button
                title="go to next"
                onPress={()=>this.props.navigation.navigate('Tab2')}
                />
                 
               
            </View>
        )
    }
}

export default Tab1
