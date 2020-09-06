import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper';
import {config, colors} from '../shared/config';

const {height, width} = Dimensions.get('screen');

export interface HeaderProps {
  navigation: {
    navigate: (path: string) => void;
  };
  scene: {
    descriptor: {
      options: {
        title?: string;
      };
    };
  };
}

function HeaderComponent(props: HeaderProps) {
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.backgroundColor,
        height: height * 0.08,
      }}>
      <Icon
        style={{marginLeft: 10, alignSelf: 'center'}}
        onPress={() => setIsPickerOpen(!isPickerOpen)}
        size={height * 0.03}
        name="hamburger"
      />
      <Text style={{marginLeft: 10, alignSelf: 'center'}}>
        {props.scene.descriptor.options.title}
      </Text>
      {isPickerOpen === true ? (
        <View
          style={{
            borderWidth: 1,
            backgroundColor: Colors.white,
            position: 'absolute',
            left: '15%',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainMenu')}
            style={styles.navigateButton}>
            <Text>Main Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ChronologyOfInventions')}
            style={styles.navigateButton}>
            <Text>Chronology of inventions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={styles.navigateButton}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Galery')}
            style={styles.navigateButton}>
            <Text>Galery</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  navigateButton: {
    paddingBottom: 5,
    paddingTop: 5,
    margin: 2,
    borderRadius: 10,
  },
});

export default withNavigation(HeaderComponent);
