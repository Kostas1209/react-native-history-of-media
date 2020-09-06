import * as React from 'react';
import {View, Image, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import galeryStyles from './GaleryStyle';
import images from '../../data/images';

class GaleryComponent extends React.Component<{navigation: any}> {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: '100%',
          width: '100%',
          flex: 1,
        }}>
        <ScrollView
          style={{flex: 1, marginLeft: '5%', marginRight: '5%', marginTop: 30}}>
          <Text> фото</Text>
        </ScrollView>
      </View>
    );
  }
}

export default GaleryComponent;
