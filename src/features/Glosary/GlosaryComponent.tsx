import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {glosaryArticles, GlosaryText} from '../../data/glosaryText';
import images from '../../data/images';
import styles from './GlosaryStyles';

interface GlosaryProps {
  navigation: {
    navigate: () => void;
  };
}

const GlosaryComponent = (props: GlosaryProps) => {
  const renderEye = () => {
    return <Image source={images.eye} style={styles.image} />;
  };
  const renderSectionTitle = (title: string) => {
    return (
      <View style={styles.titleContainer}>
        {renderEye()}
        <Text style={styles.title}>{title}</Text>
        {renderEye()}
      </View>
    );
  };

  const renderSection = (item: GlosaryText, sectionIndex: number) => {
    return (
      <View key={sectionIndex}>
        {renderSectionTitle(item.title)}
        {item.article.map((article: string, index: number) => {
          return <Text key={index}>{article}</Text>;
        })}
      </View>
    );
  };

  const renderList = () => {
    return (
      <View>
        {glosaryArticles.map((item, index) => {
          return renderSection(item, index);
        })}
      </View>
    );
  };

  return <ScrollView>{renderList()}</ScrollView>;
};

export default GlosaryComponent;
