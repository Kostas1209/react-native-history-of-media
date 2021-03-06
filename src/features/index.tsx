import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainMenu} from './MainMenu/MainMenu';
import ChronologyOfInventions from './ChronologyOfInventions/ChronologyOfInventions';
import DetailedInformation from './DetailedInformation/DetailedInformation';
import Profile from './Profile/Profile';
import {Dimensions} from 'react-native';
import Header from '../shared/HeaderComponent';
import Galery from './Galery/Galery';
import SingleImage from './SingleImage/SingleImage';
import {colors} from '../shared/config';
import SplashScreen from '../features/SplashScreen/SplashScreen';
import MainPeriodsOfMedia from '../features/MainPeriodsMedia/MainPeriodsComponent';
import GlosaryComponent from './Glosary/GlosaryComponent';
import QuestionListComponent from './Answers/QuestionList';
import AnswerScreen from './AnswerScreen/Answer';

interface RootProps {
  navigation: any;
  isUserInit: boolean;
}

const {height, width} = Dimensions.get('screen');

class Root extends React.Component<RootProps> {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName={'SplashScreen'}>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{
            cardStyle: {
              backgroundColor: colors.backgroundColor,
              shadowColor: 'transparent',
            },
            title: '',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChronologyOfInventions"
          component={ChronologyOfInventions}
          options={{
            cardStyle: {
              backgroundColor: 'rgb(255, 255, 255)',
              shadowColor: 'transparent',
            },
            title: 'Хронологія винаходів до ХХ ст.',
            headerShown: true,
            header: (props) => <Header {...props} isBackButton={true} />,
            headerStyle: {backgroundColor: colors.backgroundColor},
          }}
        />
        <Stack.Screen
          name="DetailedInformation"
          component={DetailedInformation}
          options={{
            cardStyle: {
              backgroundColor: 'rgb(255, 255, 255)',
              shadowColor: 'transparent',
            },
            headerShown: false,
            headerStyle: {backgroundColor: colors.backgroundColor},
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            cardStyle: {
              backgroundColor: colors.backgroundColor,
              shadowColor: 'transparent',
            },
            title: '',
            headerShown: false,
            headerStyle: {backgroundColor: colors.backgroundColor},
            // headerLeft: null
          }}
        />
        <Stack.Screen
          name="Galery"
          component={Galery}
          options={{
            cardStyle: {
              backgroundColor: colors.backgroundColor,
              shadowColor: 'transparent',
            },
            title: 'Галерея',
            headerShown: true,
            headerStyle: {backgroundColor: colors.backgroundColor},
            header: (props) => <Header {...props} />,
            // headerLeft: null
          }}
        />
        <Stack.Screen
          name="SingleImage"
          component={SingleImage}
          options={{
            title: '',
            headerShown: false,
            //headerStyle: { backgroundColor: colors.backgroundColor },
            // header: (props)=><Header {...props}/>,
            // headerLeft: null
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            cardStyle: {
              backgroundColor: colors.backgroundColor,
              shadowColor: 'transparent',
            },
            title: '',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainPeriodsOfMedia"
          component={MainPeriodsOfMedia}
          options={{
            title: 'Етапи розвитку мультимедіа у ХХ ст.',
            headerStyle: {backgroundColor: colors.backgroundColor},
            header: (props) => <Header {...props} isBackButton={true} />,
          }}
        />
        <Stack.Screen
          name="Glosary"
          component={GlosaryComponent}
          options={{
            title: 'Глосарій',
            header: (props) => <Header {...props} isBackButton={true} />,
          }}
        />
        <Stack.Screen
          name="QuestionList"
          component={QuestionListComponent}
          options={{
            title: 'Відповіді на запитання',
            header: (props) => <Header {...props} isBackButton={false} />,
          }}
        />
        <Stack.Screen
          name="AnswerScreen"
          component={AnswerScreen}
          options={{
            title: 'Відповіді на запитання',
            header: (props) => <Header {...props} isBackButton={true} />,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default Root;
