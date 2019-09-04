import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Camera } from 'expo-camera'
import { ImagePicker} from 'expo'


class CameraComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      type:Camera.Constants.Type.front,
      pictureTaken : false,
    }
  }

  snap = async () => {
    if(this.camera) {
      let photo = await this.camera.takePictureAsync()
      console.log({uri:photo.uri})
      this.props.setSource({uri:photo.uri})
      this.setState({pictureTaken: true})
    }
  }

  render() {
    if(!this.state.pictureTaken) {
      return (
        <View style={{ flex: 1, width:'100%', height:'100%' }}>
          <Camera style={{ flex: 1, width:'90%', height:'90%' }} type={this.state.type} ref={ref => {
          this.camera = ref; } }>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent:'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 50, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={ () => {
                  this.snap()
                }}>
                <Text style={{ fontSize: 12, marginBottom: 50, color: 'white' }}> Tomar foto </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
      } 
      return null;
  }
}

  export default CameraComponent