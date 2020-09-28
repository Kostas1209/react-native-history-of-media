import React from 'react';
import {Text, Animated, View, ImageBackground, Image} from 'react-native';
import images from '../../data/images';
import styles from './SplashScreenStyles';

interface SplashProps {
  navigation: any;
}

const INITIAL_ROUTE = 'MainMenu';

const SplashScreen = (props: SplashProps) => {
  const [fadeAnim, changeFadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    fadeOutDialog();
    setTimeout(() => {
      props.navigation.replace(INITIAL_ROUTE);
    }, 3500);
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
