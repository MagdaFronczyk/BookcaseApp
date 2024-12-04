import React from 'react';
import {StyleSheet, View} from 'react-native';

//components
import RobotoBlack from '../fonts/RobotoBlack';
import RobotoRegular from '../fonts/RobotoRegular';
//styles
import {theme} from '../../style/styles';

const WebViewError = () => {
  return (
    <View style={styles.statusContainer}>
      <RobotoBlack size={theme.fontSize.sixteen} color={theme.color.black}>
        Aplikacja napotkała problem.
      </RobotoBlack>
      <RobotoRegular size={theme.fontSize.sixteen} color={theme.color.black}>
        Spróbuj ponownie później.
      </RobotoRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: theme.backgroundColor.white,
  },
});

export default WebViewError;
