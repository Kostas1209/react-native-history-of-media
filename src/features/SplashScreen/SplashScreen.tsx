import React from 'react';
import {
  Text,
  Animated,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import images from '../../data/images';
import styles from './SplashScreenStyles';

interface SplashProps {
  navigation: {
    navigate: (route: string) => void;
    replace: (route: string) => void;
    push: (route: string) => void;
  };
}

const {width, height} = Dimensions.get('screen');

const SplashScreen = (props: SplashProps) => {
  const [fadeAnim, changeFadeAnim] = React.useState(new Animated.Value(0));
  const [isButtonShow, setIsButtonShow] = React.useState(false);

  const renderRightButton = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          left: width - 70,
          height: 50,
          width: 50,
          zIndex: 100,
        }}
        onPress={() => {
          props.navigation.replace('Profile');
        }}>
        <Image
          style={{height: 50, width: 50}}
          resizeMode="contain"
          source={images.splashScreenAuthorButton}
        />
      </TouchableOpacity>
    );
  };

  const renderLeftButton = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          height: 40,
          width: 40,
          zIndex: 100,
        }}
        onPress={() => {
          props.navigation.replace('MainMenu');
        }}>
        <Image
          style={{height: 40, width: 40}}
          resizeMode="contain"
          source={images.hamburgerIcon}
        />
      </TouchableOpacity>
    );
  };

  React.useEffect(() => {
    fadeOutDialog();
    setTimeout(() => {
      setIsButtonShow(true);
    }, 4000);
  }, []);

  const fadeOutDialog = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{opacity: fadeAnim}}>
      {isButtonShow && renderLeftButton()}
      {isButtonShow && renderRightButton()}
      <Image resizeMethod="resize" style={styles.image} source={images.maya} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Історія розвитку мультимедіа</Text>
      </View>
      <Image
        resizeMethod="resize"
        style={styles.image}
        source={images.splashScreenTop}
      />
    </Animated.View>
  );
};

export default SplashScreen;
