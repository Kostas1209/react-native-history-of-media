import * as React from 'react'
import { View, Image } from 'react-native';
 
const imagePath= ["letter.png","Cars.png","Button.png", "Button.png", "Button.png", "Button.png", "Button.png", "Button.png",
"Button.png","Button.png","Button.png","Button.png"
]

const assetsPath="../../../assets/"

class SingleImage extends React.Component<{ route:any, navigation:any }> {

    constructor(props : any)
    {
        super(props);
    
    }
  render() {
    const {imageNumber} = this.props.route.params 

    console.log(imageNumber)
    return (
        <View style={{width: "100%", height: "100%"}}>
            <Image style={{maxWidth: "100%",maxHeight: "100%"}} source={require("../../../assets/Button.png")}/>
        </View>
    )
  }
}

export default SingleImage