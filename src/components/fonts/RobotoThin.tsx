import React from 'react';
import {Text, StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';

type Props = {
  color: string;
  size: number;
  children: any;
  numberOfLines?: number;
  style?: StyleProp<ViewStyle | TextStyle>;
};

const RobotoThin: React.FC<Props> = ({
  children,
  color,
  size,
  style,
  numberOfLines,
}): JSX.Element => {
  return (
    <Text
      style={[style, {...styles.text, color: color, fontSize: size}]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Thin',
  },
});

export default RobotoThin;
