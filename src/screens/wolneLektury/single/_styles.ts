import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
//components
import {LIKE_ICON_SIZE} from '../../../components/icons/LikeIcon';
//styles
import {theme} from '../../../style/styles';

const image = StyleSheet.create({
  image: {
    aspectRatio: 2,
    marginTop: verticalScale(10),
  },
  likeContainer: {
    position: 'absolute',
    top: verticalScale(33),
    right: scale(27),
  },
  likeIcon: {
    width: LIKE_ICON_SIZE,
    height: LIKE_ICON_SIZE,
  },
});

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
  downloadLinkContainer: {
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

export {image, details};
