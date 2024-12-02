import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

//styles
import {theme} from '../style/styles';

const CommonLoading: React.FC = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.color.black} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CommonLoading;
