import * as React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './DetailedInformationStyles';
import images from '../../data/images';
import {articles} from '../../data/articles';
import Header, {HeaderProps} from '../../shared/HeaderComponent';

interface DetailedInformationProps {
  navigation: {
    navigate: () => void;
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
    scene: {
      descriptor: {
        options: {
          title: inventionData.title,
        },
      },
    },
  };

  return (
    <View>
      <Header {...headerProps} />
      <View style={{width: '100%', height: '50%'}}>
        <Image source={images[inventionData.imageName]} style={styles.image} />
      </View>
      <Text>{inventionData.article}</Text>
    </View>
  );
};

export default DetailedInformation;
