import React, { Component } from 'react'
import { Text } from 'react-native'

export default class TurnOffMap extends Component {

  componentDidMount = () => this.props.toggleMap(false)

  render() {
    return (
      <Text>No dispone de wifi como para mostrar el mapa.</Text>  
    )
  }

}