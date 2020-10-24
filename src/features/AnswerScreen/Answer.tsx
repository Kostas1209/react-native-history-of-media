import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {answerData} from '../../data/answers';
import renderComponent from '../../helpers/renderComponent';
import WrapperEmmiter from '../../helpers/wrapper';

interface AnswerScreenProps {
  route: {
    params: {
      answerIndex: number;
    };
  };
}

const AnswerScreen = (props: AnswerScreenProps) => {
  const {answerIndex} = props.route.params;
  const currentAnswer = answerData[answerIndex];

  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
      <Text
        style={{
          fontSize: 15,
          alignSelf: 'center',
          marginBottom: 20,
          textAlign: 'center',
        }}>
        {currentAnswer.question}
      </Text>
      {renderComponent({component: currentAnswer.answer})}
    </ScrollView>
  );
};

export default WrapperEmmiter(AnswerScreen);
