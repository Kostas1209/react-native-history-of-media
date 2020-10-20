import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import images from '../../data/images';
import {AnswerProps, answerData} from '../../data/answers';
import styles from './QuestionListStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WrapperEmmiter from '../../helpers/wrapper';

interface QuestionListProps {
  navigation: {
    navigate: (path: string, params?: Object) => void;
  };
}

const QuestionListComponent = (props: QuestionListProps) => {
  const renderItem = (answer: AnswerProps, index: number) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('AnswerScreen', {answerIndex: index})
        }>
        <Text>
          {index + 1}. {answer.question}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderList = () => {
    return (
      <ScrollView style={{marginLeft: 20, marginTop: 10}}>
        {answerData.map((item, index) => renderItem(item, index))}
      </ScrollView>
    );
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      {renderList()}
      <Image style={styles.image} source={images['lizard']} />
    </View>
  );
};

export default WrapperEmmiter(QuestionListComponent);
