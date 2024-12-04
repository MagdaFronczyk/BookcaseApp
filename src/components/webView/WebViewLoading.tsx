import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

//styles
import {theme} from '../../style/styles';

const WebViewLoading: React.FC = (): JSX.Element => {
  return (
    <View style={styles.statusContainer}>
      <ActivityIndicator size={'large'} color={theme.color.black} />
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

export default WebViewLoading;
