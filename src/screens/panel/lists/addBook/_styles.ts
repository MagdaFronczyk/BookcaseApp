import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const index = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(16),
  },
});

export {index};
