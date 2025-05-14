import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const index = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const expandedListHeader = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
  },
  wrapper: {
    gap: verticalScale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    borderRadius: scale(4),
    paddingHorizontal: scale(10),
    paddingVertical: scale(6),
  },
});

export {index, expandedListHeader};
