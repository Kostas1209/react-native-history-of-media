import * as React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './DetailedInformationStyles'

export class DetailedInformation extends React.Component
{
    render()
    {
        return (
            <View>
                <View style={{width: "100%", height: "30%"}}>
                    <Image source={require("../../../assets/Button.png")}
                            style={styles.image}
                    /> 
                </View>
                <Text>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablablablablablablablablablablablablablabla
                </Text>
            </View>
        )
    } 
}