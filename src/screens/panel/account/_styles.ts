import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

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
  iconWrapper: {
    width: '38%',
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {index, authentication, account, accountHeader};
