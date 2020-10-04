import React from 'react';
import {View, Text} from 'react-native';
import {answerData} from '../../data/answers';
import renderComponent from '../../helpers/renderComponent';

interface AnswerScreenProps {
  route: {
    params: {
      answerIndex: number;
    };
  };
}

const AnswerScreen = (props: AnswerScreenProps) => {
  console.log(props);
  const {answerIndex} = props.route.params;
  const currentAnswer = answerData[answerIndex];

  return (
    <View>
      <Text>{currentAnswer.question}</Text>
      {renderComponent({component: currentAnswer.answer})}
    </View>
  );
};

export default AnswerScreen;
