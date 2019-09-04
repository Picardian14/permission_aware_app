import React, { Component } from 'react'
import { Image, TouchableHighlight, View } from 'react-native'

class Default extends Component {
  
  render(){
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabon1.jpg'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('../assets/chabon1.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabon2.png'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('../assets/chabon2.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabona1.png'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('../assets/chabona1.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabona2.png'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('../assets/chabona2.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

export default Default