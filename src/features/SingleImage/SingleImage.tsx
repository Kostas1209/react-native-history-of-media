import * as React from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import images from '../../data/images';
import {galeryImages} from '../../data/galeryImages';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');
const aspectRation = height / width;

interface SingleImageProps {
  route: {
    params: {
      imageNumber: number;
    };
  };
  navigation: {
    navigate: (route: string, params?: Object) => void;
    goBack: () => void;
  };
}

const SingleImage = (props: SingleImageProps) => {
  const {imageNumber} = props.route.params;

  const renderBackButton = () => {
    return (
      <MaterialIcon
        style={{left: 20, top: 50, color: '#fff', position: 'absolute'}}
        onPress={() => {
          props.navigation.goBack();
        }}
        size={aspectRation * 14}
        name="arrow-back"
      />
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#000',
        width: width,
        height: height,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      {renderBackButton()}
      <Image
        style={{
          maxWidth: '100%',
          maxHeight: height * 0.5,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
        source={images[galeryImages[imageNumber].imageName]}
      />
      <Text style={{marginLeft: 20, color: '#fff'}}>
        {galeryImages[imageNumber].imageBreiflyInformation}
      </Text>
    </View>
  );
};

export default SingleImage;
