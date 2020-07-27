import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Root from './src/features';
import { NavigationContainer } from '@react-navigation/native';
 

class SomeComponent extends Component<{navigation : any}> {

  render() {
    return (
      <View style={{height: "100%", width: "100%"}}>
        <NavigationContainer>  
          <Root />
        </NavigationContainer>
      </View>
    );
  }
}
 
export default SomeComponent;