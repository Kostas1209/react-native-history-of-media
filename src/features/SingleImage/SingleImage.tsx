import * as React from 'react';
import {View, Image} from 'react-native';
import images from '../../data/images';

class SingleImage extends React.Component<{route: any; navigation: any}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const {imageNumber} = this.props.route.params;

    console.log(imageNumber);
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Image
          style={{maxWidth: '100%', maxHeight: '100%'}}
          source={images.maya}
        />
      </View>
    );
  }
}

export default SingleImage;
