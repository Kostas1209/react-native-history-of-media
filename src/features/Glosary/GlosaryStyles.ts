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
    marginBottom: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});
