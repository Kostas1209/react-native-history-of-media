import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const galeryStyles = StyleSheet.create({
  image: {
    width: width * 0.4,
    height: width * 0.3,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginLeft: 1,
    marginTop: 3,
    marginBottom: 3,
    width: width * 0.4,
    height: width * 0.3,
  },
});

export default galeryStyles;
