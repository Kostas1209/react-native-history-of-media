import * as React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './ChronologyOfInventionsStyles'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                    <Text style={styles.text}>Some Text asfagasdgasdgasgsagsagssf asfdasf asfsafg afasfgsagsagsagsa asfafssaf<TouchableOpacity style={{position: "relative",borderColor: "#000", borderWidth: 1}} onPress={()=>{this.props.navigation.navigate("DetailedInformation")}}><Text style={{textAlignVertical: "bottom"}}>Читать далее</Text></TouchableOpacity></Text> 
                    <Image source={require("../../../assets/Button.png")}
                        style={styles.image}
                    /> 
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.text}>Some Text</Text>
                    <Image source={require("../../../assets/Button.png")}
                        style={styles.image}
                    />
                </View> 
            </View>
        )
    }
    
}
