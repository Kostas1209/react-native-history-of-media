import * as React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {Colors, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

export class Profile extends React.Component {
  render() {
    return (
      <View style={{flex: 0.92, backgroundColor: Colors.white, width: '100%'}}>
        <Image
          style={{alignSelf: 'center', resizeMode: 'contain', maxHeight: '50%'}}
          source={require('../../../assets/profilePhoto.png')}
        />
        <View style={{marginTop: height * 0.01, flex: 0.6, left: '20%'}}>
          <Text>Криволмлинова Ельміра Олександрівна</Text>
          <Text>23 роки</Text>
          <Text>Студентка ХНЕУ ім. С. Кузнеця</Text>
          <Text>Факультет: Економічної інформатики</Text>
          <Text>Спеціальності 186 Видавництво та поліграфія</Text>
        </View>
        <View style={{flex: 0.2, width: '100%', marginTop: height * 0.02}}>
          <View
            style={{
              left: '20%',
              width: '80%',
              borderWidth: 1,
            }}></View>
          <Text style={{left: '20%', marginTop: height * 0.02}}>
            el.krivomlinova1997@gmail.com
          </Text>
          <Text style={{left: '20%', marginTop: height * 0.02}}>
            0967000143
          </Text>
          <Text style={{left: '20%', marginTop: height * 0.02}}>onlywe_on</Text>
        </View>
      </View>
    );
  }
}
