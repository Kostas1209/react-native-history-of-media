import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    alignSelf: 'center',
    maxHeight: 30,
    maxWidth: 30,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});
