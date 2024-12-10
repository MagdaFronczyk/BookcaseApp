import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
//components

const details = StyleSheet.create({
  detailsContainer: {
    padding: moderateScale(20),
  },
  title: {
    textAlign: 'center',
  },
  details: {
    marginTop: moderateScale(10),
  },
});

export {details};
