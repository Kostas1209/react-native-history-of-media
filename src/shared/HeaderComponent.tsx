import  * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native-paper';

const {height , width} = Dimensions.get("screen");

function HeaderComponent(props : any)
{
    const [isPickerOpen, setIsPickerOpen] = React.useState(false);

    console.log(props);
    return(
        <View style={{flexDirection: "row", backgroundColor: Colors.orange900, height: height * 0.06}}>
            <Icon style={{marginLeft: 10}} onPress={()=> setIsPickerOpen(!isPickerOpen)} size={height * 0.05} name="hamburger"/>
            {
                isPickerOpen === true ? 
                <View style={{borderWidth: 1, backgroundColor: Colors.white, position: "absolute", left: "15%"}}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MainMenu")} style={styles.navigateButton}><Text>Main Menu</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.navigateButton}><Text>Chronology of inventions</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.navigateButton}><Text>Profile</Text></TouchableOpacity>
                </View>
                : null
            }
        </View>

    )
}


const styles = StyleSheet.create({
    navigateButton: {
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: Colors.purple100,
        margin: 2,
        borderRadius: 10
    }
})

export default withNavigation(HeaderComponent)