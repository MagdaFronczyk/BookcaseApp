import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {theme} from '../../style/styles';

const {width} = Dimensions.get('window');

const tile = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: moderateScale(10),
  },
  image: {
    width: width * 0.44,
    aspectRatio: 1,
  },
  title: {
    flex: 1,
    width: width * 0.44,
    flexWrap: 'wrap',
    letterSpacing: moderateScale(0.48),
    textAlign: 'center',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(5),
  },
  likeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.general.white,
    height: scale(41),
    aspectRatio: 1,
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

const all = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export {tile, all};
