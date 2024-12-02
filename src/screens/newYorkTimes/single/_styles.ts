import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {theme} from '../../../style/styles';
import {LIKE_ICON_SIZE} from '../../../components/LikeIcon';

const image = StyleSheet.create({
  shadow: {
    shadowColor: '#9645006d',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2,
  },
  heartShadow: {
    shadowColor: theme.general.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 3,
  },
  gradient: {
    alignItems: 'center',
    marginBottom: moderateVerticalScale(18),
  },
  image: {
    aspectRatio: 1,
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
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor.white,
  },
});

export {image};
