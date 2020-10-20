import {ViewStyle} from 'react-native';

export interface ComponentProps {
  type: 'image' | 'anchor' | 'text' | 'breakLine' | 'list';
  text?: string; /// mark text to go to url
  url?: string; /// anchor endpoint
  imageName?: string; /// image name from images
  style?: ViewStyle; /// style for image and breakline
  listItems?: Array<string>; ///items for list
}
