import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  text: {
    maxWidth: '60%',
    fontSize: height * 0.021,
  },
  mainContainer: {
    flexDirection: 'column',
  },
  articleContainer: {
    width: '100%',
    flexDirection: 'row',
    left: '20%',
    height: height * 0.15,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  textContainer: {
    maxWidth: '70%',
  },
  image: {
    marginLeft: 10,
    height: '100%',
    width: '25%',
    resizeMode: 'contain',
  },
});

export default styles;
