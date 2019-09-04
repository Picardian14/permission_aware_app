import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Camera } from 'expo-camera'
import { ImagePicker} from 'expo'


class CameraComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      type:Camera.Constants.Type.front
    }
  }

  snap = async () => {
    if(this.camera) {
      let photo = await this.camera.takePictureAsync()
      console.log({uri:photo.uri})
      this.props.setSource({uri:photo.uri})
    }
  }

  render() {
    return (
      <View style={{ flex: 1, width:'100%', height:'50%' }}>
        <Camera style={{ flex: 1, width:'100%', height:'50%' }} type={this.state.type} ref={ref => {
        this.camera = ref; } }>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                });
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={ () => {
                 this.snap()
              }}>
              <Text style={{ fontSize: 15, marginBottom: 5, color: 'white', alignSelf:'center' }}> Tomar foto </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )
  }
}

  export default CameraComponent