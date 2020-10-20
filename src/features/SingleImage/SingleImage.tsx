import * as React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
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
  const scrollViewRef = React.useRef<ScrollView>(null);
  const {imageNumber} = props.route.params;

  React.useEffect(() => {
    scrollViewRef.current.scrollTo({
      x: width * imageNumber,
      y: 0,
      animated: false,
    });
  });

  const renderBackButton = () => {
    return (
      <MaterialIcon
        style={{
          left: 20,
          top: 50,
          color: '#fff',
          position: 'absolute',
          zIndex: 100,
        }}
        onPress={() => {
          props.navigation.goBack();
        }}
        size={aspectRation * 14}
        name="arrow-back"
      />
    );
  };

  const renderItem = (index: number) => {
    return (
      <View style={{width: width, height: height, justifyContent: 'center'}}>
        <View style={{width: '100%', height: 300}}>
          <ImageBackground
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={images[galeryImages[index].imageName]}
          />
        </View>
        <Text style={{marginLeft: 20, color: '#fff'}}>
          {galeryImages[index].imageBreiflyInformation}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {renderBackButton()}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        contentContainerStyle={{
          height: height,
          alignContent: 'center',
          justifyContent: 'center',
          width: `${galeryImages.length * 100}%`,
        }}
        style={{
          backgroundColor: '#000',
        }}>
        {galeryImages.map((element, index) => renderItem(index))}
      </ScrollView>
    </View>
  );
};

export default SingleImage;
