import React, { Component } from 'react'
import {Image, TouchableHighlight} from 'react-native'
export default class Default extends Component {


    render(){
        <TouchableHighlight onPress={this.props.setSource('../assets/chabon1.jpg')}>
            <Image style={{width: 66, height: 58}}
                   source={require('../assets/chabon1.jpg')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.setSource('../assets/chabon2.png')}>
            <Image style={{width: 66, height: 58}}
               source={require('../assets/chabon2.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.setSource('../assets/chabona1.png')}>
            <Image style={{width: 66, height: 58}}
                   source={require('../assets/chabona1.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.setSource('../assets/chabona2.png')}>
            <Image style={{width: 66, height: 58}}
                   source={require('../assets/chabona2.png')} />
        </TouchableHighlight>
            

    }
}