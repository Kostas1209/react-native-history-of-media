import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Root from './src/features';
 
class SomeComponent extends Component {

  render() {
    return (
      <View style={{alignSelf: "center", flexDirection: "column", height: "100%", width: "100%"}}>    
          <Root />
      </View>
    );
  }
}
 
export default SomeComponent;