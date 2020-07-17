import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainMenu } from './MainMenu/MainMenu';
import { ChronologyOfInventions } from './ChronologyOfInventions/ChronologyOfInventions';

interface RootProps{
    navigation: any,
    isUserInit: boolean
}

class Root extends React.Component<RootProps>
{ 
    render(){
        const Stack = createStackNavigator();
        return(
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={"MainMenu"}>
                        <Stack.Screen name="MainMenu" component = {MainMenu} options={{ 
                            cardStyle:{backgroundColor: 'rgb(255, 255, 255)', shadowColor: 'transparent'},
                            title: '',
                            headerShown: true,  
                            headerStyle: { backgroundColor: 'rgb(150, 75, 0)' }
                            // headerLeft: null 
                        }} />
                        <Stack.Screen name="ChronologyOfInventions" component = {ChronologyOfInventions} options={{ 
                            cardStyle:{backgroundColor: 'rgb(255, 255, 255)', shadowColor: 'transparent'},
                            title: 'Хронологія винаходів',
                            headerShown: true,  
                            headerStyle: { backgroundColor: 'rgb(150, 75, 0)' },
                        }} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
    
}

// const mapStateToProps = (state: RootState) => ({
//     isUserInit : state.user.userCreate
//   })

export default Root;