import React from 'react';
import {StyleSheet, View} from 'react-native';

import {verticalScale} from 'react-native-size-matters';
//components
import RobotoRegular from '../components/fonts/RobotoRegular';
//styles
import {theme} from '../style/styles';
import RobotoBold from '../components/fonts/RobotoBold';

type Props = {
  title: string;
  text?: string;
};

const CommonEmpty: React.FC<Props> = ({title, text}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <RobotoBold
        style={styles.title}
        color={theme.color.black}
        size={theme.fontSize.fourteen}>
        {title}
      </RobotoBold>
      <RobotoRegular
        style={styles.text}
        color={theme.color.black}
        size={theme.fontSize.fourteen}>
        {text}
      </RobotoRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: verticalScale(40),
  },
  title: {
    textAlign: 'center',
  },
  text: {
    marginTop: verticalScale(5),
    textAlign: 'center',
  },
});

export default CommonEmpty;
