import * as React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  DeviceEventEmitter,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper';
import {config, colors} from '../shared/config';
import RNExitApp from 'react-native-exit-app';

const getActiveRouteState = function (route: {name: string}): number {
  switch (route.name) {
    case 'MainPeriodsOfMedia':
      return 1;
    case 'ChronologyOfInventions':
      return 2;
    case 'QuestionList':
    case 'AnswerScreen':
      return 3;
    case 'Glosary':
      return 4;
    case 'Galery':
    case 'SingleImage':
      return 5;
    default:
      return 0;
  }
};

const {height, width} = Dimensions.get('screen');
const aspectRation = height / width;
const currentRouteColor = '#FCD12A';
let currentRouteIndex = 0;

export interface HeaderProps {
  navigation: {
    navigate: (path: string) => void;
    goBack: () => void;
  };
  scene?: {
    descriptor: {
      options: {
        title: string;
      };
    };
    route: {
      name: string;
    };
  };
  title?: string;
  isBackButton?: boolean;
}

function HeaderComponent(props: HeaderProps) {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = React.useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = React.useState(false);
  const [currentRouteIndex, setCurrentRouteIndex] = React.useState(0);

  React.useEffect(() => {
    DeviceEventEmitter.addListener('touchEmitter', closeAllMenu);

    return () => {
      DeviceEventEmitter.removeListener('touchEmitter', closeAllMenu);
    };
  }, []);

  React.useEffect(() => {
    if (props.scene) {
      setCurrentRouteIndex(getActiveRouteState(props.scene.route || 0));
    } else {
      setCurrentRouteIndex(2);
    }
  });

  const closeAllMenu = () => {
    setIsLeftMenuOpen(false);
    setIsRightMenuOpen(false);
  };

  const {isBackButton, title} = props;

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
          zIndex: 1000,
        }}>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            setCurrentRouteIndex(2);
            props.navigation.navigate('ChronologyOfInventions');
          }}
          style={styles.navigateButton}>
          <Text style={currentRouteIndex == 2 && {color: currentRouteColor}}>
            Хронологія винаходів до ХХ ст.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            setCurrentRouteIndex(1);
            props.navigation.navigate('MainPeriodsOfMedia');
          }}
          style={styles.navigateButton}>
          <Text
            style={[
              {color: '#000'},
              currentRouteIndex == 1 && {color: currentRouteColor},
            ]}>
            Етапи розвитку мультимедіа у ХХ ст.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            setCurrentRouteIndex(3);
            props.navigation.navigate('QuestionList');
          }}
          style={styles.navigateButton}>
          <Text style={currentRouteIndex == 3 && {color: currentRouteColor}}>
            Відповіді на запитання
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            setCurrentRouteIndex(4);
            props.navigation.navigate('Glosary');
          }}
          style={styles.navigateButton}>
          <Text style={currentRouteIndex == 4 && {color: currentRouteColor}}>
            Глосарій
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            setCurrentRouteIndex(5);
            props.navigation.navigate('Galery');
          }}
          style={styles.navigateButton}>
          <Text style={currentRouteIndex == 5 && {color: currentRouteColor}}>
            Галерея
          </Text>
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
          zIndex: 1001,
        }}>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            setCurrentRouteIndex(6);
            props.navigation.navigate('Profile');
          }}
          style={styles.navigateButton}>
          <Text style={currentRouteIndex == 6 && {color: currentRouteColor}}>
            Сторінка розробника
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeAllMenu();
            RNExitApp.exitApp(); /// only for android
          }}
          style={styles.navigateButton}>
          <Text>Закрити додаток</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuIcon = () => {
    return (
      <MaterialCommunityIcon
        style={{
          marginLeft: 10,
          alignSelf: 'center',
          color: '#fff',
        }}
        onPress={() => {
          setIsRightMenuOpen(false);
          setIsLeftMenuOpen(!isLeftMenuOpen);
        }}
        size={aspectRation * 14}
        name="menu"
      />
    );
  };

  const renderMoreIcon = () => {
    return (
      <MaterialIcon
        style={{left: width - 80, alignSelf: 'center', color: '#fff'}}
        onPress={() => {
          setIsLeftMenuOpen(false);
          setIsRightMenuOpen(!isRightMenuOpen);
        }}
        size={aspectRation * 14}
        name="more-vert"
      />
    );
  };

  const renderBackButton = () => {
    return (
      <MaterialIcon
        style={{left: width - 80, alignSelf: 'center', color: '#fff'}}
        onPress={() => {
          setIsLeftMenuOpen(false);
          props.navigation.goBack();
        }}
        size={aspectRation * 14}
        name="arrow-back"
      />
    );
  };

  const shownTitle: string = title
    ? title
    : props.scene.descriptor.options.title;

  const fontSize: number = (width / shownTitle.length) * 1.4;
  return (
    <View
      style={{
        zIndex: 1000,
        flexDirection: 'row',
        backgroundColor: colors.backgroundColor,
        height: height * 0.08,
      }}>
      {renderMenuIcon()}
      {isBackButton && isBackButton == true
        ? renderBackButton()
        : renderMoreIcon()}
      <Text
        style={{
          position: 'absolute',
          left: 50,
          alignSelf: 'center',
          color: '#fff',
          fontSize: fontSize > 17 ? 17 : fontSize,
        }}>
        {shownTitle}
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

export default HeaderComponent;
