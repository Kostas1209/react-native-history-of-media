import { StyleSheet, Dimensions } from "react-native"

const {height, width} = Dimensions.get("screen");
const aspectRation = height / width;

const styles = StyleSheet.create ({
    image:{
        maxHeight: "100%",
        maxWidth: "100%",
        alignSelf: "center",
        resizeMode: "contain",
    },
    imageContainer : {
        width: '100%', 
        height: '50%'
    },
    text: {
        fontSize: aspectRation * 10
    }
})


export default styles;