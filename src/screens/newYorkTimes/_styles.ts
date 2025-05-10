import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BOTTOM_TAB_HEIGHT} from '../../utils/constants';

const all = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
    paddingBottom: BOTTOM_TAB_HEIGHT,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export {all};
