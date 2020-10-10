import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');
const aspectRation = height / width;

const styles = StyleSheet.create({
  infoText: {
    fontSize: aspectRation * 7,
    flexWrap: 'wrap',
  },
  photo: {
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    maxHeight: '40%',
  },
  mainContainerGradient: {
    flex: 0.92,
    backgroundColor: Colors.white,
    width: '100%',
  },
  infoContainer: {
    marginTop: height * 0.02,
    flex: 0.5,
    marginLeft: '20%',
  },
  socialInfoContainer: {
    flex: 0.42,
    width: '100%',
    marginTop: height * 0.02,
  },
  devider: {
    left: '20%',
    width: '80%',
    borderWidth: 1,
    opacity: 0.1,
    marginBottom: height * 0.015,
  },
  socialInfoText: {
    marginLeft: '20%',
    marginTop: height * 0.02,
  },
  backButton: {
    left: 15,
    top: 20,
    color: '#fff',
    position: 'absolute',
    zIndex: 100,
  },
});

export default styles;
