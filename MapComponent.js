import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Constants, MapView, Permissions } from 'expo'
import PermissionAwareComponent from 'permission_aware_react_native_component'

import GPSLocComponent from './GPSLocComponent'
import ManualLocComponent from './ManualLocComponent'

export default class MapComponent extends Component {
  
  state = {
    mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
    location: null,
  };
  
  _setLocation = location => this.setState(
    {
      mapRegion:({...this.state.mapRegion,...location.coords}),
      location
    })
  _handleMapRegionChange = coords => this.setState({mapRegion:coords})

  getMapRegion = () => this.state.mapRegion

  render() {

    componentList = [
      ({permission:Permissions.LOCATION,component:(<GPSLocComponent _setLocation={this._setLocation.bind(this)}/>)}),      
    ]

    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          initialRegion={{...this.state.mapRegion}}
          onRegionChangeComplete={this._handleMapRegionChange}
        >
        {
          this.state.location ? (
            <MapView.Marker
              coordinate={this.state.location.coords}
              title="My Marker"
              description="Some description"
            />
          ) : null
        }
        </MapView>
        <PermissionAwareComponent  permissionComponentList={componentList} defaultComponent={(<ManualLocComponent _setLocation={this._setLocation.bind(this)} currentCoord={this.getMapRegion}/>)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    height: '100%',
    width: '100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

