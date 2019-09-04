import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from 'permission_aware_react_native_component'
import CameraComponent from './Components/Camera'
import GalleryComponent from './Components/Gallery'
import PickerComponent from './Components/Default'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      imageSrc: null,
    }
  }

  setSource = (imageSrc) => this.setState(() => ({imageSrc}))

  render() {
    const {
      imageSrc,
    } = this.state
    console.log(imageSrc)

    return (
      <View style={styles.container}>
        <PermissionAwareComponent
          permissionComponentList={[
            ({
              permission:PermissionConstants.CAMERA_ROLL,
              component:(<GalleryComponent setSource={this.setSource} />)
            }),
            //(PermissionConstants.CAMERA,<CameraComponent setSource={this.setSource} />),
          ]}
          defaultComponent={<Text>A</Text>}
        />
        {
          (imageSrc !== null) ? (<Image style={styles.image} source={{uri:imageSrc}} />) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  }
});