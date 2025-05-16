import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const USER_ICON_SIZE = scale(90);

const index = StyleSheet.create({
  container: {flex: 1},
});

const authentication = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(20),
  },
  title: {
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const account = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(10),
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

const accountHeader = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1.3 / 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(10),
  },
  icon: {
    width: USER_ICON_SIZE,
    height: USER_ICON_SIZE,
  },
});

export {index, authentication, account, accountHeader};
