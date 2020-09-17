import React from 'react';
import {Article} from '../../data/articles';
import {ScrollView, View, Image, Text} from 'react-native';
import images from '../../data/images';
import styles from './styles';

interface CarouselProps {
  article: Article;
}

const CarouseComponent = (props: CarouselProps) => {
  const renderItem = (props: {image?: string; text?: string}) => {
    return (
      <View style={{width: '50%'}}>
        {props.image ? (
          <View style={styles.imageContainer}>
            <Image source={images[props.image]} style={styles.image} />
          </View>
        ) : undefined}
        {props.text ? <Text style={styles.text}>{props.text}</Text> : undefined}
      </View>
    );
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          width: '200%',
          height: '100%',
        }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        horizontal={true}>
        {renderItem({
          image: props.article.imageName,
          text: props.article.article[0],
        })}
        {props.article.article.length > 1
          ? renderItem({text: props.article.article[1]})
          : undefined}
      </ScrollView>
    </View>
  );
};

export default CarouseComponent;
