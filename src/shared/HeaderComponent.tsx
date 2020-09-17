import * as React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper';
import {config, colors} from '../shared/config';

const {height, width} = Dimensions.get('screen');
const aspectRation = height / width;

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
  const [isLeftMenuOpen, setIsLeftMenuOpen] = React.useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = React.useState(false);

  const renderLeftMenu = () => {
    return (
      <View
        style={{
          elevation: 100,
          backgroundColor: Colors.white,
          position: 'absolute',
          marginTop: 5,
          left: '13%',
          borderRadius: 2,
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MainMenu')}
          style={styles.navigateButton}>
          <Text>Основні єтапи розвитку </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ChronologyOfInventions')}
          style={styles.navigateButton}>
          <Text>Хронологія винаходів</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={styles.navigateButton}>
          <Text>Відповіді на запитання</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Galery')}
          style={styles.navigateButton}>
          <Text>Глосарій</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderRightMenu = () => {
    return (
      <View
        style={{
          elevation: 100,
          backgroundColor: Colors.white,
          position: 'absolute',
          marginTop: 10,
          left: '40%',
          borderRadius: 2,
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={styles.navigateButton}>
          <Text>Сторінка розробника</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Galery')}
          style={styles.navigateButton}>
          <Text>Галерея</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        zIndex: 100,
        flexDirection: 'row',
        backgroundColor: colors.backgroundColor,
        height: height * 0.08,
      }}>
      <MaterialCommunityIcon
        style={{marginLeft: 10, alignSelf: 'center', color: '#fff'}}
        onPress={() => {
          setIsRightMenuOpen(false);
          setIsLeftMenuOpen(!isLeftMenuOpen);
        }}
        size={aspectRation * 14}
        name="menu"
      />
      <MaterialIcon
        style={{left: width - 70, alignSelf: 'center', color: '#fff'}}
        onPress={() => {
          setIsLeftMenuOpen(false);
          setIsRightMenuOpen(!isRightMenuOpen);
        }}
        size={aspectRation * 14}
        name="more-vert"
      />
      <Text
        style={{
          marginLeft: 10,
          alignSelf: 'center',
          color: '#fff',
          fontSize: aspectRation * 10,
        }}>
        {props.scene.descriptor.options.title}
      </Text>
      {isLeftMenuOpen === true ? renderLeftMenu() : undefined}
      {isRightMenuOpen === true ? renderRightMenu() : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  navigateButton: {
    margin: 2,
    borderRadius: 10,
    padding: 10,
  },
});

export default withNavigation(HeaderComponent);
