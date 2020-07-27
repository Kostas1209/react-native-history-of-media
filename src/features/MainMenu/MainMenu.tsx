import * as React from 'react';
import { View, Text, Button} from 'react-native';
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
                <Text style={styles.article}>Історія розвитку мультимедіа</Text>
                <View style={[styles.textContainer, styles.textWithBackground]} >
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate("")
                        }}   
                        style={styles.textOpacityContainer}
                    >
                        <Text>Основні етапи розвитку</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate("ChronologyOfInventions")
                        }}    
                        style={styles.textOpacityContainer}
                    >
                        <Text>Хронологія винаходів</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.textContainer, styles.textWithBackground]}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate("")
                        }}    
                        style={styles.textOpacityContainer}
                    > 
                        <Text>Відповіді на запитання гри</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate("")
                        }}       
                        style={styles.textOpacityContainer} 
                    >
                        <Text>Глосарій з "Історії мультимедіа"</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}