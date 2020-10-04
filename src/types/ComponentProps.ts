export interface ComponentProps {
  type: 'image' | 'anchor' | 'text' | 'breakLine';
  text?: string; /// mark text to go to url
  url?: string; /// anchor endpoint
  imageName?: string; /// image name from images
  style?: Object; /// style for image and breakline
}
