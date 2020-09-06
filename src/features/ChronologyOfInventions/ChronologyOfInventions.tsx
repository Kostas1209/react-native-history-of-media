import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ChronologyOfInventionsStyles';
import {Colors} from 'react-native-paper';
import {Article, articles} from '../../data/articles';
import images from '../../data/images';

interface ChronologyOfInventionsProps {
  navigation: any;
}

const ChoronologyOfInventions = (props: ChronologyOfInventionsProps) => {
  const renderDevider = () => {
    return <View style={{borderWidth: 1, borderColor: Colors.grey300}}></View>;
  };

  const renderInvention = (inventionData: Article, index: number) => {
    console.log(inventionData);
    return (
      <View>
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
    <View style={styles.mainContainer}>
      {articles.map((articleData, index) =>
        renderInvention(articleData, index),
      )}
    </View>
  );
};

export default ChoronologyOfInventions;
