import { StyleSheet, Dimensions } from 'react-native'

const {width, height } = Dimensions.get("screen")

const styles = StyleSheet.create ({
    textContainer:{
        width: "100%",
        paddingBottom: 5,
        paddingTop: 5,
    },
    textWithBackground :
    {
        backgroundColor: "rgb(150, 75, 0)"
    },
    textOpacityContainer:{
        left: "20%"
    },
    container :
    {
        width: "100%",
        height: "84%",
        backgroundColor: "#fff",
        alignItems: "center",
        top: "8%"
    },
    article:{
        fontSize: 23,
        fontWeight: "700",
        marginBottom: "10%",
        marginTop: "5%"
    }
})

export default styles