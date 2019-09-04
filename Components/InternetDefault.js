import React, { Component } from 'react'
import { Image, TouchableHighlight, View } from 'react-native'

class InternetDefault extends Component {
  
  render(){
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.setSource(require('https://react.semantic-ui.com/images/avatar/large/steve.jpg'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('https://react.semantic-ui.com/images/avatar/large/steve.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setSource(require('https://react.semantic-ui.com/images/avatar/large/daniel.jpg'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('https://react.semantic-ui.com/images/avatar/large/daniel.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setSource(require('https://react.semantic-ui.com/images/avatar/large/jenny.jpg'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('https://react.semantic-ui.com/images/avatar/large/jenny.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setSource(require('https://react.semantic-ui.com/images/avatar/large/molly.png'))}>
          <Image
            style={{width: 66, height: 58}}
            source={require('https://react.semantic-ui.com/images/avatar/large/molly.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

export default InternetDefault