import {StyleSheet} from 'react-native';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const EXPAND_ICON_SIZE = scale(40);
const REMOVE_ICON_SIZE = scale(20);
const ADD_ICON_SIZE = scale(40);

const addListButton = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(30),
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: ADD_ICON_SIZE,
    height: ADD_ICON_SIZE,
    marginRight: scale(10),
  },
});

const listItem = StyleSheet.create({
  container: {
    borderRadius: moderateScale(4),
    paddingHorizontal: scale(8),
    paddingVertical: scale(12),
    marginBottom: scale(5),
    flexDirection: 'row',
    borderWidth: scale(1),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    letterSpacing: 0.5,
  },
  expandIcon: {
    width: EXPAND_ICON_SIZE,
    height: EXPAND_ICON_SIZE,
    marginLeft: scale(10),
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

const bookItem = StyleSheet.create({
  container: {
    borderWidth: scale(1),
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(15),
    marginBottom: scale(5),
  },
  removeButton: {
    width: REMOVE_ICON_SIZE,
    height: REMOVE_ICON_SIZE,
  },
});

export {addListButton, listItem, commonNoData, bookItem};
