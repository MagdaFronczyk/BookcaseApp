import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const index = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const expandedListHeader = StyleSheet.create({
  wrapper: {
    gap: verticalScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
  },
  removeButton: {
    position: 'absolute',
    right: scale(10),
    borderRadius: scale(15),
  },
  addButton: {
    borderRadius: scale(4),
    paddingHorizontal: scale(10),
    paddingVertical: scale(6),
    borderWidth: scale(1),
    alignSelf: 'center',
    margin: scale(10),
  },
  image: {
    width: scale(30),
    height: scale(30),
  },
});

export {index, expandedListHeader};
