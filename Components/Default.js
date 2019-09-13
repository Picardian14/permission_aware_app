import React, { Component } from 'react'
import { Image, TouchableHighlight, View } from 'react-native'

class Default extends Component {

  render() {
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabon1.jpg'))}>
            <Image
              style={{ width: 66, height: 58, margin:20}}
              source={require('../assets/chabon1.jpg')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabon2.png'))}>
            <Image
              style={{ width: 66, height: 58,margin:20}}
              source={require('../assets/chabon2.png')}
            />
          </TouchableHighlight>
        </View>

        <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabona1.png'))}>
            <Image
              style={{ width: 66, height: 58, margin:20}}
              source={require('../assets/chabona1.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/chabona2.png'))}>
            <Image
              style={{ width: 66, height: 58, margin:20}}
              source={require('../assets/chabona2.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default Default