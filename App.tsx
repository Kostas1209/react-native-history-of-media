import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Root from './src/features';
import {NavigationContainer} from '@react-navigation/native';

class SomeComponent extends Component<{navigation: any}> {
  render() {
    return (
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    );
  }
}

export default SomeComponent;
