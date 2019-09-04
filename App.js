import React from 'react'
import { StyleSheet, View } from 'react-native'

import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from 'permission_aware_react_native_component'
import CameraComponent from './Components/Camera'
import GalleryComponent from './Components/Galery'
import PickerComponent from './Components/Default'

export default class App extends React.Component {

  constructor() {
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
            (PermissionConstants.CAMERA,<CameraComponent setSource={this.setSource} />),
            (PermissionConstants.CAMERA_ROLL,<GalleryComponent setSource={this.setSource} />),
          ]}
          defaultComponent={PickerComponent}
        />
        {
          (imageSrc !== null) ? <Image src={imageSrc} /> : null
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
});
