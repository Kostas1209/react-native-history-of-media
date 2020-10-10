import React from 'react';
import {ComponentProps} from '../types/ComponentProps';
import {
  View,
  Linking,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import images from '../data/images';

interface RenderComponentProps {
  component: ComponentProps[];
}

const renderComponent = (props: RenderComponentProps) => {
  const renderAnchor = (item: ComponentProps) => {
    return (
      <TouchableOpacity
        style={{margin: 20}}
        onPress={() => Linking.openURL(item.url || '')}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: 'rgb(0, 0, 255)',
            fontSize: 20,
          }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderBreakline = (item: ComponentProps) => {
    if (item.style) {
      return <View style={item.style} />;
    }
  };

  const renderImage = (item: ComponentProps) => {
    return (
      <View style={item.style}>
        <Image
          style={{resizeMode: 'contain', width: '100%', height: '100%'}}
          source={images[item.imageName]}
        />
      </View>
    );
  };

  const renderText = (item: ComponentProps) => {
    return <Text style={{fontSize: 17}}>{'     ' + item.text}</Text>;
  };

  return (
    <View>
      {props.component.map((item: ComponentProps) => {
        switch (item.type) {
          case 'anchor':
            return renderAnchor(item);
          case 'breakLine':
            return renderBreakline(item);
          case 'image':
            return renderImage(item);
          case 'text':
            return renderText(item);
        }
      })}
    </View>
  );
};

export default renderComponent;
