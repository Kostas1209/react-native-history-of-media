import * as React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './ChronologyOfInventionsStyles'; 
import { Colors } from 'react-native-paper';


interface ChronologyOfInventionsProps
{
    navigation: any
}

export class ChronologyOfInventions extends React.Component<ChronologyOfInventionsProps>
{ 
    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.articleContainer}>
                    <Text style={styles.text}>Some Text asfagasdgasdgasgsagsagssf asfdasf asfsafg afasfgsagsagsagsa asfafssafsgagasgsag...
                            <Text onPress={()=>{this.props.navigation.navigate("DetailedInformation")}} style={styles.text}>Читать далее</Text>
                    </Text> 
                    <Image source={require("../../../assets/Button.png")}
                        style={styles.image}
                    /> 
                </View>
                <View style={{borderWidth: 1, borderColor: Colors.grey300}}></View>
            </View>
        )
    }
    
}
