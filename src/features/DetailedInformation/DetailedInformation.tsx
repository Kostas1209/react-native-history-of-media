import * as React from 'react';
import {View} from 'react-native';
import {articles} from '../../data/articles';
import Header, {HeaderProps} from '../../shared/HeaderComponent';
import CarouseComponent from '../../components/Carousel/Carousel';

interface DetailedInformationProps {
  navigation: {
    navigate: () => void;
    goBack: () => void;
  };
  route: {
    params: {
      index: number;
    };
  };
}

const DetailedInformation = (props: DetailedInformationProps) => {
  const {index} = props.route.params;
  const inventionData = articles[index];

  const headerProps: HeaderProps = {
    navigation: props.navigation,
    title: inventionData.title,
    isBackButton: true,
  };

  return (
    <View style={{flex: 1}}>
      <Header {...headerProps} />
      <CarouseComponent article={inventionData} />
    </View>
  );
};

export default DetailedInformation;
