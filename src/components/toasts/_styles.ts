import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const commonToast = StyleSheet.create({
  container: {
    width: '90%',
    padding: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(4),
    gap: verticalScale(8),
  },
  buttons: {
    flexDirection: 'row',
    gap: scale(16),
  },
  text: {
    textAlign: 'center',
  },
});

const toastButton = StyleSheet.create({
  container: {
    width: '45%',
    padding: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(2),
    borderWidth: moderateScale(1),
  },
});

export {commonToast, toastButton};
