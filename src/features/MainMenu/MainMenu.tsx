import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MainMenuStyles';
import images from '../../data/images';

interface MainMenuProps {
  navigation: {
    navigate: (path: string, params?: Object) => void;
  };
}

export const MainMenu = (props: MainMenuProps) => {
  const renderButton = (
    path: string,
    text: string,
    isMarked: boolean,
    params?: Object,
  ) => {
    const style = isMarked
      ? [styles.textContainer, styles.textWithBackground]
      : styles.textContainer;

    const textStyle = isMarked ? {color: '#fff'} : {color: '#000'};

    const onPress = () => {
      props.navigation.navigate(path, params);
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
      {renderButton(
        'ChronologyOfInventions',
        'Хронологія винаходів до ХХ ст.',
        true,
      )}
      {renderButton(
        'MainPeriodsOfMedia',
        'Етапи розвитку мультимедіа у ХХ ст.',
        false,
      )}
      {renderButton('QuestionList', 'Відповіді на запитання гри', true)}
      {renderButton('Glosary', 'Глосарій з "Історії мультимедіа"', false)}
      {renderButton('Galery', 'Галерея', true)}
    </View>
  );
};
