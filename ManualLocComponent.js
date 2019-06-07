import React, { Component } from 'react'
import { Button } from 'react-native'

export default class GPSLocComponent extends Component {

  _getLocation = (coords) => ({coords})

  render() {
    return (
      <Button title="Ok" onPress={()=> this.props._setLocation(this._getLocation(this.props.currentCoord()))}/> 
    )
  }

}