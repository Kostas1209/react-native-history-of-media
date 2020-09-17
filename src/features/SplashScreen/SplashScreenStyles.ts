import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');
const aspectRation = height / width;

export default StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.37,
  },
  textContainer: {
    height: height * 0.2,
    width: '100%',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: aspectRation * 10,
  },
});
