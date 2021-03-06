import * as React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './ChronologyOfInventionsStyles';
import {Colors} from 'react-native-paper';
import {Article, articles} from '../../data/articles';
import images from '../../data/images';
import WrapperEmmiter from '../../helpers/wrapper';

interface ChronologyOfInventionsProps {
  navigation: any;
}

const ChoronologyOfInventions = (props: ChronologyOfInventionsProps) => {
  const renderDevider = () => {
    return <View style={{borderWidth: 1, borderColor: Colors.grey300}}></View>;
  };

  const renderInvention = (inventionData: Article, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          props.navigation.navigate('DetailedInformation', {
            index: index,
          });
        }}>
        <View style={styles.articleContainer}>
          <Text style={styles.text}>
            {inventionData.breiflyContent}
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              ... Читати далі
            </Text>
          </Text>
          <Image
            source={images[inventionData.imageName]}
            style={styles.image}
          />
        </View>
        {renderDevider()}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      {articles.map((articleData, index) =>
        renderInvention(articleData, index),
      )}
    </ScrollView>
  );
};

export default WrapperEmmiter(ChoronologyOfInventions);
