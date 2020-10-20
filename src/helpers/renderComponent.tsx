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
      <TouchableOpacity onPress={() => Linking.openURL(item.url || '')}>
        <Text
          style={[
            {
              // textDecorationLine: 'underline',
              color: 'rgb(0, 0, 0)',
              fontSize: 17,
            },
            item.style && item.style,
          ]}>
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
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
          }}
          source={images[item.imageName]}
        />
      </View>
    );
  };

  const renderText = (item: ComponentProps) => {
    return (
      <Text style={[{fontSize: 17}, item.style && item.style]}>
        {'     ' + item.text}
      </Text>
    );
  };

  const renderList = (item: ComponentProps) => {
    const renderItem = (text: string) => {
      return (
        <View style={{flexDirection: 'row', marginTop: 2}}>
          <Image
            resizeMode="contain"
            style={{width: 40, height: 40}}
            source={images[item.imageName]}
          />
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              marginLeft: 10,
              width: '80%',
            }}>
            <Text style={{flexWrap: 'wrap'}}>{text}</Text>
          </View>
        </View>
      );
    };

    return (
      <View style={{marginTop: 10, flexDirection: 'column'}}>
        {item.listItems?.map((element) => renderItem(element))}
      </View>
    );
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
          case 'list':
            return renderList(item);
        }
      })}
    </View>
  );
};

export default renderComponent;
