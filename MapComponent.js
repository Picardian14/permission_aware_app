import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location } from 'expo';

export default class MapComponent extends Component {
  state = {
    mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
    location: null,
  };

  componentDidMount = ()=>this._getLocationAsync().then(this._setLocation.bind(this))

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => await Location.getCurrentPositionAsync({})

  _setLocation = location => this.setState({mapRegion:({...this.state.mapRegion,...location.coords}), location})

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          region={{...this.state.mapRegion}}
          onRegionChange={this._handleMapRegionChange}
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
        <Button title="A casa" onPress={()=>this._getLocationAsync().then(this._setLocation.bind(this))}/>
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

