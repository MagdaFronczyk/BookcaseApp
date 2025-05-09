import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
//helpers

const index = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(16),
    flex: 1,
  },
});

export {index};
