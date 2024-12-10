import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const all = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export {all};
