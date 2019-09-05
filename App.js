import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from 'permission_aware_react_native_component'
import CameraComponent from './Components/Camera'
import GalleryComponent from './Components/Gallery'
import Default from './Components/Default'

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

    return (
      <View style={styles.container}>
        <PermissionAwareComponent
          permissionComponentList={[
            ({
              permission:PermissionConstants.CAMERA_ROLL,
              component:(<GalleryComponent setSource={this.setSource} />)
            }),
            ({
              permission:PermissionConstants.CAMERA,
              component:(<CameraComponent setSource={this.setSource} />)
            }),
          ]}
          defaultComponent={(<Default setSource={this.setSource} />)}
        />
        {
          (imageSrc !== null) ? (<Image style={styles.image} source={imageSrc} />) : null
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
    width:'70%',
    height:'70%',
  }
});