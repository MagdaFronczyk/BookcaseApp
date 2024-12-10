import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

//styles
import {theme} from '../../../style/styles';

const details = StyleSheet.create({
  detailsContainer: {
    padding: moderateScale(20),
  },
  title: {
    textAlign: 'center',
  },
  description: {
    marginTop: moderateScale(10),
    textAlign: 'justify',
  },
  buyLinksContainer: {
    borderWidth: moderateScale(1),
    marginTop: moderateScale(10),
    alignItems: 'center',
    height: moderateScale(40),
    justifyContent: 'center',
    borderColor: theme.color.darkGray,
    borderRadius: moderateScale(20),
  },
  buyLinks: {
    marginTop: moderateScale(10),
  },
});

export {details};
