import React from 'react'
import { StyleSheet, View } from 'react-native'

import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
 } from 'permission_aware_react_native_component'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PermissionAwareComponent
          permissionComponentList={[]}
          defaultComponent={(<Text>Default</Text>)}
        />
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
