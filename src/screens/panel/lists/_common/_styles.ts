import {StyleSheet} from 'react-native';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const addListButton = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(30),
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    borderRadius: 999,
    padding: scale(10),
    marginHorizontal: scale(8),
  },
});

const listItem = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
    borderRadius: moderateScale(4),
    paddingHorizontal: scale(8),
    paddingVertical: scale(12),
    marginHorizontal: scale(6),
    marginBottom: scale(5),
  },
  name: {
    letterSpacing: 0.5,
  },
  expandIcon: {
    transform: [{rotate: '90deg'}],
  },
});

const commonNoData = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  text: {
    flex: 1,
    paddingTop: verticalScale(8),
    textAlign: 'center',
    paddingHorizontal: scale(8),
  },
});

export {addListButton, listItem, commonNoData};
