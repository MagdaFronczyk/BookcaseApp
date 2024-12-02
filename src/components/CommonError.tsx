import React from 'react';
import {StyleSheet, View} from 'react-native';

import {verticalScale} from 'react-native-size-matters';
//components
import RobotoRegular from '../components/fonts/RobotoRegular';
import RobotoBlack from '../components/fonts/RobotoBlack';
//styles
import {theme} from '../style/styles';

const CommonError: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <RobotoBlack
        size={theme.fontSize.sixteen}
        color={theme.color.black}
        style={styles.title}>
        Aplikacja napotkała problem.
      </RobotoBlack>
      <RobotoRegular size={theme.fontSize.sixteen} color={theme.color.black}>
        Spróbuj ponownie później.
      </RobotoRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: verticalScale(15),
  },
});

export default CommonError;
