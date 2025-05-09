import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const commonPanelButton = StyleSheet.create({
  container: {
    borderRadius: scale(2),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderWidth: moderateScale(1),
  },
});

const commonAccountFormInput = StyleSheet.create({
  input: {
    width: '65%',
    borderRadius: scale(2),
    borderWidth: scale(1),
    letterSpacing: 0.35,
    padding: scale(15),
  },
});

const commonPanelError = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});

export {commonPanelButton, commonAccountFormInput, commonPanelError};
