import * as React from 'react';
import {View, Text, Image, DeviceEventEmitter} from 'react-native';
import styles from './ChronologyOfInventionsStyles';
import {Colors} from 'react-native-paper';
import {Article, articles} from '../../data/articles';
import images from '../../data/images';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface ChronologyOfInventionsProps {
  navigation: any;
}

const ChoronologyOfInventions = (props: ChronologyOfInventionsProps) => {
  const renderDevider = () => {
    return <View style={{borderWidth: 1, borderColor: Colors.grey300}}></View>;
  };

  const renderInvention = (inventionData: Article, index: number) => {
    return (
      <View key={index}>
        <View style={styles.articleContainer}>
          <Text style={styles.text}>
            {inventionData.breiflyContent}
            <Text
              onPress={() => {
                props.navigation.navigate('DetailedInformation', {
                  index: index,
                });
              }}
              style={[styles.text, {fontWeight: 'bold'}]}>
              ... Читати далі
            </Text>
          </Text>
          <Image
            source={images[inventionData.imageName]}
            style={styles.image}
          />
        </View>
        {renderDevider()}
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback
      style={styles.mainContainer}
      onPress={() => {
        DeviceEventEmitter.emit('touchEmitter');
      }}>
      {articles.map((articleData, index) =>
        renderInvention(articleData, index),
      )}
    </TouchableWithoutFeedback>
  );
};

export default ChoronologyOfInventions;
