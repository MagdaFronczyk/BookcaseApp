import React from 'react';
import {ViewStyle} from 'react-native';

import {Path, Svg} from 'react-native-svg';
import {theme} from '../../style/styles';

type Props = {
  style?: ViewStyle;
  expanded?: boolean;
  height: number;
  width: number;
};

const ExpandIcon: React.FC<Props> = ({
  style,
  expanded = false,
  height,
  width,
}) => {
  return (
    <Svg height={height} width={width} style={{...style}} viewBox="0 0 24 24">
      {expanded ? (
        <>
          <Path
            fill={theme.color.white}
            d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"
          />
          <Path d="M0 0h24v24H0z" fill="none" />
        </>
      ) : (
        <>
          <Path
            fill={theme.color.lightGray}
            d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
          />
          <Path d="M0 0h24v24H0z" fill="none" />
        </>
      )}
    </Svg>
  );
};

export default ExpandIcon;
