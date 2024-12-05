import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
//components
import {LIKE_ICON_SIZE} from '../../../components/LikeIcon';
//styles
import {theme} from '../../../style/styles';

const image = StyleSheet.create({
  image: {
    marginTop: verticalScale(10),
    alignSelf: 'center',
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
  details: {
    marginTop: moderateScale(10),
  },
});

export {image, details};
