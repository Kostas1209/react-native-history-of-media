import * as React from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './MainMenuStyles';

interface MainMenuProps
{
    navigation: any
}

export class MainMenu extends React.Component<MainMenuProps>
{ 
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("")
                    }}    
                >
                    <Text style={styles.text}>Основні етапи розвитку</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("ChronologyOfInventions")
                    }}    
                >
                    <Text  style={styles.text}>Хронологія винаходів</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("")
                    }}    
                >
                    <Text style={styles.text}>Відповіді на запитання гри</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("")
                    }}        
                >
                    <Text style={styles.text}>Глосарій з "Історії мультимедіа"</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}