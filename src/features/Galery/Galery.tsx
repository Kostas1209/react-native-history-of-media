import * as React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import galeryStyles from './GaleryStyle';
import images from '../../data/images';
import {galeryImages, GaleryImage} from '../../data/galeryImages';

interface GaleryProps {
  navigation: {
    navigate: (route: string, params?: Object) => void;
  };
}

const GaleryComponent = (props: GaleryProps) => {
  const renderItem = (galeryImage: GaleryImage, index: number) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('SingleImage', {imageNumber: index})
        }
        style={galeryStyles.imageContainer}
        key={index}>
        <ImageBackground
          imageStyle={{resizeMode: 'contain'}}
          style={galeryStyles.image}
          source={images[galeryImage.imageName]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
      }}>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 30,
        }}>
        <Text style={{marginBottom: 10, marginLeft: 10}}>
          {galeryImages.length} фото
        </Text>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {galeryImages.map((item, index) => renderItem(item, index))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GaleryComponent;
