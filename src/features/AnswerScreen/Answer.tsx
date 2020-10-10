import React from 'react';
import {View, Text} from 'react-native';
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
    <View>
      <Text style={{fontSize: 20, alignSelf: 'center', marginBottom: 20}}>
        {currentAnswer.question}
      </Text>
      {renderComponent({component: currentAnswer.answer})}
    </View>
  );
};

export default WrapperEmmiter(AnswerScreen);
