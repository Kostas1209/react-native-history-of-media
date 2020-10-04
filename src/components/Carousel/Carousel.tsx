import React from 'react';
import {Article} from '../../data/articles';
import {ScrollView, View} from 'react-native';
import renderComponent from '../../helpers/renderComponent';

interface CarouselProps {
  article: Article;
}

const CarouseComponent = (props: CarouselProps) => {
  return (
    <ScrollView
      style={{flex: 1}}
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      horizontal={false}>
      {renderComponent({component: props.article.article})}
    </ScrollView>
  );
};

export default CarouseComponent;
