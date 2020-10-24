import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../shared/config';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  textContainer: {
    width: width,
    paddingVertical: 10,
  },
  textWithBackground: {
    backgroundColor: colors.backgroundColor,
  },
  textOpacityContainer: {
    left: '20%',
    height: 30,
  },
  container: {
    width: '100%',
    height: '84%',
    backgroundColor: '#fff',
    alignItems: 'center',
    top: '8%',
  },
  article: {
    fontSize: width * 0.06,
    fontWeight: '700',
    marginBottom: '10%',
    marginTop: '5%',
  },
  text: {
    left: '20%',
    width: '80%',
  },
});

export default styles;
