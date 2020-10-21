import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {mainPeriodsText} from '../../data/mainPeriodsText';
import images from '../../data/images';
import {styles} from './MainPeriodsStyles';

const MainPeriodsComponent = () => {
  const renderItem = (item: string, index: number) => {
    return (
      <View style={styles.itemContainer} key={index}>
        <Image style={styles.image} source={images.eye} />
        <Text style={{textAlign: 'justify'}}>{item}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      {mainPeriodsText.map((item, index) => {
        return renderItem(item, index);
      })}
    </ScrollView>
  );
};

export default MainPeriodsComponent;
