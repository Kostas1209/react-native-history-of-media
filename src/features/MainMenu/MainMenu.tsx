import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MainMenuStyles';
import images from '../../data/images';

interface MainMenuProps {
  navigation: {
    navigate: (path: string) => void;
  };
}

export const MainMenu = (props: MainMenuProps) => {
  const renderButton = (path: string, text: string, isMarked: boolean) => {
    const style = isMarked
      ? [styles.textContainer, styles.textWithBackground]
      : styles.textContainer;

    const textStyle = isMarked ? {color: '#fff'} : {color: '#000'};

    const onPress = () => {
      console.log('tests');
      props.navigation.navigate(path);
    };

    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <Text style={[textStyle, styles.text]}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={{resizeMode: 'contain', maxHeight: '40%'}}
        source={images.mainMenu}
      />
      <Text style={styles.article}>Історія розвитку мультимедіа</Text>
      {renderButton('', 'Основні етапи розвитку', true)}
      {renderButton('ChronologyOfInventions', 'Хронологія винаходів', false)}
      {renderButton('', 'Відповіді на запитання гри', true)}
      {renderButton('', 'Глосарій з "Історії мультимедіа"', false)}
    </View>
  );
};
