import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const information = StyleSheet.create({
  container: {
    padding: moderateScale(10),
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
    marginTop: moderateScale(20),
  },
});

export {information};
