import * as React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './DetailedInformationStyles'

export class DetailedInformation extends React.Component
{
    render()
    {
        return (
            <View>
                <Image source={require("../../../assets/Button.png")}
                        style={styles.image}
                /> 
                <Text>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablablablablablablablablablablablablablabla
                </Text>
            </View>
        )
    } 
}