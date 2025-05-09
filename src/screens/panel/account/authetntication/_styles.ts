import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const resetPassword = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  errorWrapper: {gap: verticalScale(8)},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(20),
  },
});

const common = StyleSheet.create({
  errorWrapper: {gap: verticalScale(8)},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(20),
  },
});

export {common, resetPassword};
