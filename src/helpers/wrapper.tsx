import React, {ReactChild, ReactComponentElement} from 'react';
import {
  TouchableWithoutFeedback,
  DeviceEventEmitter,
  Dimensions,
  Text,
  View,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const WrapperEmmiter = (Component: any) => {
  const Wrapper = (props: any) => {
    return (
      <TouchableWithoutFeedback
        style={{width: width, height: height, backgroundColor: '#000'}}
        onPress={() => {
          DeviceEventEmitter.emit('touchEmitter');
        }}>
        <Component {...props} />
      </TouchableWithoutFeedback>
    );
  };
  return Wrapper;
};

export default WrapperEmmiter;
