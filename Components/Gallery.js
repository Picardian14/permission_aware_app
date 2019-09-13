import * as React from 'react';
import { Button, Image, View } from 'react-native';
import {ImagePicker} from 'expo';

class GalleryComponent extends React.Component {    

  constructor() {
    super()
    this.state = {
      pictureSelected : false,
    }
  }
  
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
    });
    if (!result.cancelled) {
      this.props.setSource({uri:result.uri});
      this.setState({pictureSelected: true})
    }
  }

  render() {
    if(!this.state.pictureSelected) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Selecciona una imagen de tu galeria:"
            onPress={this._pickImage}
          />
        </View>
      );
      }
      return null;
  }
}

export default GalleryComponent