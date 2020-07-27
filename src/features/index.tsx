import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainMenu } from './MainMenu/MainMenu';
import { ChronologyOfInventions } from './ChronologyOfInventions/ChronologyOfInventions';
import { DetailedInformation } from './DetailedInformation/DetailedInformation';
import { Profile } from './Profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface RootProps{
    navigation: any,
    isUserInit: boolean
}

const {height , width} = Dimensions.get("screen");

function headerLeft(navigation)
{
    console.log(arguments[0]);
    return(
        <Icon style={{marginLeft: 10}} onPress={()=> navigation.navigate("DetailedInformation")} size={height * 0.05} name="hamburger"/>
    )
}

class Root extends React.Component<RootProps>
{ 
    render(){
        const Stack = createStackNavigator()
        return(
                
                    <Stack.Navigator initialRouteName={"MainMenu"}>
                        <Stack.Screen name="MainMenu" component = {MainMenu} options={{ 
                            cardStyle:{backgroundColor: 'rgb(150, 75, 0)', shadowColor: 'transparent'},
                            title: '',
                            headerShown: false,  
                            headerStyle: { backgroundColor: 'rgb(150, 75, 0)' }
                            // headerLeft: null 
                        }} />
                        <Stack.Screen name="ChronologyOfInventions" component = {ChronologyOfInventions} 
                        options={{ 
                            cardStyle:{backgroundColor: 'rgb(255, 255, 255)', shadowColor: 'transparent'},
                            title: 'Хронологія винаходів',
                            headerShown: true,
                            // headerLeftContainerStyle: {left: -100},
                            // headerLeft: (headerLeft),
                            header: (headerLeft),
                            headerStyle: { backgroundColor: 'rgb(150, 75, 0)' },
                        }} />
                        <Stack.Screen name="DetailedInformation" component = {DetailedInformation} options={{ 
                            cardStyle:{backgroundColor: 'rgb(255, 255, 255)', shadowColor: 'transparent'},
                            title: 'Хронологія винаходів',
                            headerShown: true,  
                            headerStyle: { backgroundColor: 'rgb(150, 75, 0)' },
                        }} />
                        <Stack.Screen name="Profile" component = {Profile} options={{ 
                            cardStyle:{backgroundColor: 'rgb(150, 75, 0)', shadowColor: 'transparent'},
                            title: '',
                            headerShown: false,  
                            headerStyle: { backgroundColor: 'rgb(150, 75, 0)' }
                            // headerLeft: null 
                        }} />
                    </Stack.Navigator>
        )
    }
    
}

// const mapStateToProps = (state: RootState) => ({
//     isUserInit : state.user.userCreate
//   })

export default Root;