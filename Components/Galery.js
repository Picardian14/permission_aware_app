import * as React from 'react';
import { Button, Image, View } from 'react-native';
import {ImagePicker} from 'expo';

class GalleryComponent extends React.Component {
  
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.props.setSource(result.uri);
    }
  }

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Selecciona una imagen de tu galeria:"
          onPress={this._pickImage}
        />
      </View>
    );
  }
}