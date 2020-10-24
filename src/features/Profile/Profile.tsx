import * as React from 'react';
import {View, Image, Text, Dimensions, ImageBackground} from 'react-native';
import {Colors, Button} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import images from '../../data/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');
const aspectRation = height / width;

interface ProfileProps {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Profile = (props: ProfileProps) => {
  const renderTextWithImage = (text: string, iconName: string) => {
    return (
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Icon
          style={{
            position: 'absolute',
            top: '35%',
            left: '7%',
            color: 'rgb(93, 59, 50)',
          }}
          name={iconName}
          size={aspectRation * 13}
        />
        <Text style={styles.socialInfoText}>{text}</Text>
      </View>
    );
  };

  const renderBackButton = () => {
    return (
      <MaterialIcon
        style={styles.backButton}
        onPress={() => {
          props.navigation.goBack();
        }}
        size={aspectRation * 20}
        name="arrow-back"
      />
    );
  };

  const renderDevider = () => {
    return <View style={styles.devider} />;
  };

  return (
    <LinearGradient
      colors={['rgb(137,137,137)', '#fff']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.2}}
      style={styles.mainContainerGradient}>
      {renderBackButton()}
      <Image
        style={styles.photo}
        source={require('../../../assets/profilePhoto.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Кривомлинова Ельміра Олександрівна</Text>
        <Text style={styles.infoText}>23 роки</Text>
        <Text style={styles.infoText}>Студентка ХНЕУ ім. С. Кузнеця</Text>
        <Text style={styles.infoText}>Факультет: Економічної інформатики</Text>
        <Text style={styles.infoText}>
          Спеціальності 186 Видавництво та поліграфія
        </Text>
      </View>
      <View style={styles.socialInfoContainer}>
        {renderDevider()}
        {renderTextWithImage('el.krivomlinova1997@gmail.com', 'email')}
        {renderTextWithImage('0967000143', 'phone')}
        {renderTextWithImage('onlywe_on', 'instagram')}
      </View>
    </LinearGradient>
  );
};

export default Profile;
