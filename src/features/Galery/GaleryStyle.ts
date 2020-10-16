import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const galeryStyles = StyleSheet.create({
  image: {
    width: width * 0.45,
    height: width * 0.4,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default galeryStyles;
