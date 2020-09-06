import * as React from 'react';
import { View, Image, Text} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import galeryStyles from './GaleryStyle';


const assetsPath="../../../assets/"
const imagePath= ["letter.png","Cars.png","Button.png", "Button.png", "Button.png", "Button.png", "Button.png", "Button.png",
"Button.png","Button.png","Button.png","Button.png"
]


class GaleryComponent extends React.Component<{navigation: any}>
{
    render()
    {
        return (
            <View style={{backgroundColor: "#fff", height: "100%", width: "100%", flex: 1}}>
                <ScrollView style={{ flex: 1, marginLeft: "5%", marginRight: "5%", marginTop: 30,}}>
                    <Text>{imagePath.length} фото</Text>
                    {
                        imagePath.map(
                        (item, index)=>{
                            return(
                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate("SingleImage",{imageNumber: index})}
                                >
                                    <Image style={galeryStyles.image} source={require(assetsPath + "Button.png")} />
                                </TouchableOpacity>
                            )
                        })
                    }
                    

                </ScrollView>
            </View>
        )
    } 
}

export default GaleryComponent