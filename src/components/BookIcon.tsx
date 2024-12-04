import * as React from 'react';
import {ColorValue, ViewStyle} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import {theme} from '../style/styles';

type Props = {
  width?: number;
  height?: number;
  style?: ViewStyle;
  fill?: ColorValue;
};

const BookIcon: React.FC<Props> = ({width, height, style, fill}) => (
  <Svg viewBox="0 0 448 512" width={width} height={height}>
    <Path
      fill={fill}
      d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96m0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32m32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16m16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"></Path>
  </Svg>
);

export default BookIcon;